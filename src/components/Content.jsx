import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import EditCustomerForm from "./custumers/EditCustomerForm"; // Import your EditCustomerForm component
import { fetchCustomers, deleteCustomer,fetchCustomerById } from "../API/customerApi"; // Added deleteCustomer

const Content = () => {
  const [data, setData] = useState([]); // Table data
  const [open, setOpen] = useState(false); // Dialog open/close state
  const [currentRow, setCurrentRow] = useState(null); // Currently selected row
  const [loading, setLoading] = useState(true); // Loading state for table

  useEffect(() => {
    const getData = async () => {
      try {
        const customers = await fetchCustomers(); // Fetch all customers
        setData(customers);
      } catch (error) {
        console.error("Failed to fetch customers:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleEditClick = async (rowId) => {
    try {
      setLoading(true);
      const customerData = await fetchCustomerById(rowId); // Fetch customer data by ID
      setCurrentRow(customerData);
      setOpen(true);
    } catch (error) {
      console.error("Failed to fetch customer data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = async (rowId) => {
    try {
      await deleteCustomer(rowId); // Delete customer by ID
      setData((prevData) => prevData.filter((customer) => customer._id !== rowId));
    } catch (error) {
      console.error("Failed to delete customer:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>REF INFO</TableCell>
            <TableCell>NAME</TableCell>
            <TableCell>TYPE</TableCell>
            <TableCell>ADDRESS</TableCell>
            <TableCell>PHONE</TableCell>
            <TableCell>FAX</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>EXTRA INFO</TableCell>
            <TableCell>ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={9} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : data.length > 0 ? (
            data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row._id || "N/A"}</TableCell> {/* Customer ID */}
                <TableCell>{row.primaryInfo?.customer_name || "N/A"}</TableCell> {/* Customer Name */}
                <TableCell>{row.primaryInfo?.address || "N/A"}</TableCell>
                <TableCell>{row.primaryInfo?.phone || "N/A"}</TableCell>
                <TableCell>{row.primaryInfo?.fax || "N/A"}</TableCell>
                <TableCell>{row.primaryInfo?.email || "N/A"}</TableCell>
                <TableCell>{row.primaryInfo?.ext || "N/A"}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditClick(row._id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => handleDeleteClick(row._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} align="center">
                No data available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        {currentRow && (
          <EditCustomerForm
            customerData={currentRow} // Pass the customer data
            onClose={handleClose} // Close the dialog
            setData={setData} // Update the main table data after editing
            data={data}
          />
        )}
      </Dialog>
    </TableContainer>
  );
};

export default Content;
