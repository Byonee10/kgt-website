import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || 
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return false;
  }
  return true;
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}


function LinkTab(props: LinkTabProps) {
  return <Tab component={Link} to={props.href || '#'} {...props} />;
}


export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (
      event.type !== 'click' ||
      (event.type === 'click' &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        ))
    ) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs"
        role="navigation"
        textColor='secondary'
      >
        <LinkTab label="Anasayfa" href="/" />
        <LinkTab label="BİZ KİMİZ" href="/bizkimiz" />
        <LinkTab label="ETKİNLİKLER" href="/etkinlikler" />
        <LinkTab label="BİZE KATIL" href="/katil" />
      </Tabs>
    </Box>
  );
}
