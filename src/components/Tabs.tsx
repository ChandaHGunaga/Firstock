import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

interface ScrollableTabsButtonPreventProps {
  children: React.ReactNode;
}

export default function ScrollableTabsButtonPrevent({
  children,
}: ScrollableTabsButtonPreventProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        orientation="vertical"
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
          '& .Mui-selected': {
            color: '',
          },
        }}
      >
        {children}
      </Tabs>
    </Box>
  );
}
