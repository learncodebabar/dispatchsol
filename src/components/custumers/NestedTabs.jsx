// NestedTabs.js
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import BillingAddress from './BillingAddress';
import Discount from './Discount';
import RunningRights from './RunningRights';
import Salesman from './Salesman';

const NestedTabs = () => {
  const [nestedTabIndex, setNestedTabIndex] = useState(0);

  const handleNestedTabChange = (event, newValue) => {
    setNestedTabIndex(newValue);
  };

  return (
    <Box mt={3}>
      <Tabs value={nestedTabIndex} onChange={handleNestedTabChange}>
        <Tab label="Billing Address" />
        <Tab label="Discount" />
        <Tab label="Running Rights" />
        <Tab label="Salesman" />
      </Tabs>
      {nestedTabIndex === 0 && <BillingAddress />}
      {nestedTabIndex === 1 && <Discount />}
      {nestedTabIndex === 2 && <RunningRights />}
      {nestedTabIndex === 3 && <Salesman />}
    </Box>
  );
};

export default NestedTabs;
