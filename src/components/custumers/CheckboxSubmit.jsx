import React from "react";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const CheckboxSubmit = ({ isChecked, handleCheckboxChange }) => {
  return (
    <Box mt={2}>
      <FormControlLabel
        control={<Checkbox checked={isChecked} onChange={handleCheckboxChange} />}
        label="I agree to submit the form"
      />
    </Box>
  );
};

export default CheckboxSubmit;
