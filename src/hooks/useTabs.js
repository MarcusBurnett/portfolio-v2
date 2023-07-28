import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { medium } from '../styles/breakpoints';
import useWindowDimensions from './useWindowDimensions';
import { useTheme } from '../context/theme';

const useTabs = () => {
  const { pathname } = useLocation();
  const [selectedTab, setSelectedTab] = useState({});
  const [tabs, setTabs] = useState([]);
  const { width } = useWindowDimensions();
  const isMobile = width <= Number.parseInt(medium.replace('px', ''), 10);
  const { theme } = useTheme();

  useEffect(() => {
    const arr = [
      {
        title: 'About me',
        mobileTitle: 'About',
        icon: theme.icons?.default?.profileIcon,
        selectedIcon: theme.icons?.selected?.profileIcon,
        path: '/about-me',
        selected: pathname?.includes('about-me'),
      },
      {
        title: 'Experience',
        icon: theme.icons?.default?.experienceIcon,
        selectedIcon: theme.icons?.selected?.experienceIcon,
        path: '/experience',
        selected: pathname?.includes('experience'),
      },
      {
        title: 'Theme',
        icon: theme.icons?.default?.themeIcon,
        selectedIcon: theme.icons?.selected?.themeIcon,
        path: '/theme',
        selected: pathname?.includes('theme'),
      },
      {
        title: 'Contact',
        icon: theme.icons?.default?.contactIcon,
        selectedIcon: theme.icons?.selected?.contactIcon,
        path: '/contact',
        selected: pathname?.includes('contact'),
      },
    ];

    setTabs(arr);
  }, [pathname, isMobile, theme]);

  useEffect(() => {
    setSelectedTab(tabs.find((tab) => tab.selected) ?? {});
  }, [tabs]);

  return { tabs, selectedTab };
};

export default useTabs;
