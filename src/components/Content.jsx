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
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Tabs,
  Tab,
  Box,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

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
  // Additional dummy rows
];

const Content = () => {
  const [data, setData] = useState(dummyData);
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const handleEditClick = (row) => {
    setCurrentRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentRow(null);
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const handleChange = (e) => {
    setCurrentRow({ ...currentRow, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setData(
      data.map((row) => (row.refInfo === currentRow.refInfo ? currentRow : row))
    );
    handleClose();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              REF INFO
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              NAME
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              TYPE
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              ADDRESS
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              PHONE
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              FAX
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              EMAIL
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              EXTRA INFO
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}
            >
              ACTIONS
            </TableCell>
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
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Customer</DialogTitle>
        <DialogContent>
          <Tabs
            value={tabIndex}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Personal Info" />
            <Tab label="Contact Details" />
            <Tab label="Additional Info" />
          </Tabs>
          <Box mt={2}>
            {tabIndex === 0 && (
              <>
                <TextField
                  label="Name"
                  name="name"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.name || ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Type"
                  name="type"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.type || ""}
                  onChange={handleChange}
                />
              </>
            )}
            {tabIndex === 1 && (
              <>
                <TextField
                  label="Address"
                  name="address"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.address || ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.phone || ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Fax"
                  name="fax"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.fax || ""}
                  onChange={handleChange}
                />
              </>
            )}
            {tabIndex === 2 && (
              <>
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.email || ""}
                  onChange={handleChange}
                />
                <TextField
                  label="Extra Info"
                  name="extraInfo"
                  fullWidth
                  variant="outlined"
                  margin="dense"
                  value={currentRow?.extraInfo || ""}
                  onChange={handleChange}
                />
              </>
            )}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
};

export default Content;
