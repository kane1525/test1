import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import CompaniesTab from './components/companies-tab';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: { xs: 0, sm: 3 } }}>{children}</Box>}
    </div>
  );
}

const SubscriptionsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ p: { xs: 0, sm: 3, md: 4 } }}>
      <Typography variant="h3" gutterBottom>
        Your Subscriptions
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="Subscriptions Tabs"
      >
        <Tab label="Companies" {...a11yProps(0)} />
        <Tab label="Mines" {...a11yProps(1)} />
      </Tabs>
      <CustomTabPanel value={selectedTab} index={0}>
        <CompaniesTab />
      </CustomTabPanel>
    </Box>
  );
};

export default SubscriptionsPage;
