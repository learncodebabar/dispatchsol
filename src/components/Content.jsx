
import React, { useState } from "react";
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
import EditCustomerForm from "./custumers/EditCustomerForm"; // Import the EditCustomerForm component

const dummyData = [
  {
    refInfo: "REF12345",
    name: "John Doe",
    type: "Customer",
    address: "123 Main St",
    phone: "123-456-7890",
    fax: "123-456-7891",
    email: "johndoe@example.com",
    extraInfo: "VIP client",
  },
  {
    refInfo: "REF67890",
    name: "Jane Smith",
    type: "Vendor",
    address: "456 Elm St",
    phone: "987-654-3210",
    fax: "987-654-3211",
    email: "janesmith@example.com",
    extraInfo: "Wholesale",
  },
];

const Content = () => {
  const [data, setData] = useState(dummyData);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleEditClick = (row) => {
    setCurrentRow(row);
    setOpen(true);
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
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.refInfo}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.fax}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.extraInfo}</TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleEditClick(row)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <EditCustomerForm
          customerData={currentRow}
          onClose={handleClose}
          setData={setData}
          data={data}
        />
      </Dialog>
    </TableContainer>
  );
};

export default Content;
