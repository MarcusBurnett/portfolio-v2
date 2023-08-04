import React, {
  useState,
  useContext,
  createContext,
  useLayoutEffect,
  useMemo,
  useCallback,
} from 'react';
import darkBlueIcons from '../images/Icons/DarkBlue';
import whiteIcons from '../images/Icons/White';
import redIcons from '../images/Icons/Red';
import lightRedIcons from '../images/Icons/LightRed';
import lightBlueIcons from '../images/Icons/LightBlue';
import fadedRedIcons from '../images/Icons/FadedRed';
import blackIcons from '../images/Icons/Black';
import greenIcons from '../images/Icons/Green';

const ThemeContext = createContext();

ThemeContext.displayName = 'ThemeContext';

const themes = {
  light: {
    title: 'Light',
    key: 'light',
    font: 'Comfortaa',
    backgroundColor: '#f8f8f8',
    accent: '#CD6B55',
    color: '#2B3652',
    storyColor: '#2B3652',
    selected: '#FFFFFF',
    contactIcons: '#F0F1F4',
    secondary: '#eaedf0',
    boxShadow: '#eaedf0',
    shadow: true,
    card: '#FFFFFF',
    borderRadius: {
      default: '40px',
      small: '20px',
      indicator: '10px 0 0 10px',
      indicatorCollapsed: '0 10px 10px 0',
      tab: '16px',
      tooltip: '8px',
      icon: '50%',
      medium: '30px',
    },
    border: {
      default: '1px solid transparent',
      tab: '1px solid transparent',
      tabSelected: '1px solid transparent',
      icon: '1px solid transparent',
    },
    button: {
      primary: {
        backgroundColor: '#CD6B55',
        color: '#FFFFFF',
        hover: '#CA4C30',
        focusBorder: '1px solid #2B3652',
        borderRadius: '20px',
      },
      secondary: {
        backgroundColor: '#F0F1F4',
        color: '#2B3652',
        hover: '#EAEBEF',
        focusBorder: '1px solid #2B3652',
        borderRadius: '20px',
      },
    },
    input: {
      backgroundColor: '#FFFFFF',
      color: '#2B3652',
      hover: '#f8f8f8',
      border: '1px solid #eaedf0',
      focusBorder: '1px solid #2B3652',
      validBorder: '1px solid #53A53F',
      errorBorder: '1px solid #C74747',
      borderRadius: '20px',
      errorColor: '#C74747',
    },
    icons: {
      default: darkBlueIcons,
      selected: redIcons,
      check: greenIcons,
    },
  },
  dark: {
    title: 'Dark',
    key: 'dark',
    font: 'Comfortaa',
    backgroundColor: '#1C1C1E',
    accent: '#F0A595',
    color: '#F3F3F3',
    storyColor: '#F3F3F3',
    selected: '#292C2E',
    secondary: '#242627',
    contactIcons: '#353739',
    boxShadow: '#161718',
    shadow: true,
    card: '#232528',
    borderRadius: {
      default: '40px',
      small: '20px',
      indicator: '10px 0 0 10px',
      indicatorCollapsed: '0 10px 10px 0',
      tab: '16px',
      tooltip: '8px',
      icon: '50%',
      medium: '30px',
    },
    border: {
      default: '1px solid transparent',
      tab: '1px solid transparent',
      tabSelected: '1px solid transparent',
      background: '1px solid transparent',
      icon: '1px solid transparent',
    },
    button: {
      primary: {
        backgroundColor: '#F0A595',
        color: '#F3F3F3',
        hover: '#AE8278',
        focusBorder: '1px solid #CD6B55',
        borderRadius: '20px',
      },
      secondary: {
        backgroundColor: '#353739',
        color: '#F3F3F3',
        hover: '#292C2E',
        focusBorder: '1px solid #F0A595',
        borderRadius: '20px',
      },
    },
    icons: {
      default: whiteIcons,
      selected: lightRedIcons,
      check: greenIcons,
    },
    input: {
      backgroundColor: '#212121',
      color: '#FFFFFF',
      hover: '#1E1E1E',
      border: '1px solid #242627',
      focusBorder: '1px solid #F0A595',
      validBorder: '1px solid #53A53F',
      errorBorder: '1px solid #C74747',
      borderRadius: '20px',
      errorColor: '#C74747',
    },
  },
  blackout: {
    title: 'Blackout',
    key: 'blackout',
    font: 'Della Respira',
    backgroundColor: '#121212',
    accent: '#9FB1DC',
    color: '#F3F3F3',
    storyColor: '#F3F3F3',
    selected: '#121212',
    secondary: '#121212',
    boxShadow: '#121212',
    contactIcons: '#121212',
    shadow: false,
    card: '#121212',
    border: {
      default: '1px solid #3A3A3A',
      tab: '1px solid transparent',
      tabSelected: '1px solid #3A3A3A',
      background: '1px solid #000000',
      icon: '1px solid #3A3A3A',
    },
    borderRadius: {
      default: 0,
      small: 0,
      indicator: 0,
      indicatorCollapsed: 0,
      tab: 0,
      tooltip: 0,
      icon: 0,
      medium: 0,
    },
    button: {
      primary: {
        backgroundColor: '#121212',
        color: '#F3F3F3',
        hover: '#353739',
        focusBorder: '1px solid #CD6B55',
        borderRadius: 0,
      },
      secondary: {
        backgroundColor: '#121212',
        color: '#F3F3F3',
        hover: '#292C2E',
        focusBorder: '1px solid #F0A595',
        borderRadius: 0,
      },
    },
    icons: {
      default: whiteIcons,
      selected: lightBlueIcons,
      check: greenIcons,
    },
    input: {
      backgroundColor: '#121212',
      color: '#FFFFFF',
      hover: '#212121',
      border: '1px solid #3A3A3A',
      focusBorder: '1px solid #3A3A3A',
      validBorder: '1px solid #53A53F',
      errorBorder: '1px solid #C74747',
      borderRadius: 0,
      errorColor: '#C74747',
    },
  },
  whiteout: {
    title: 'Whiteout',
    key: 'whiteout',
    font: 'Gruppo',
    backgroundColor: '#FFFFFF',
    accent: '#AE8278',
    color: '#121212',
    storyColor: '#121212',
    selected: '#FFFFFF',
    secondary: '#FFFFFF',
    boxShadow: '#FFFFFF',
    contactIcons: '#FFFFFF',
    shadow: false,
    card: '#FFFFFF',
    border: {
      default: '1px solid #E9E9E9',
      tab: '1px solid transparent',
      tabSelected: '1px solid #E9E9E9',
      background: '1px solid #E9E9E9',
      icon: '1px solid #E9E9E9',
    },
    borderRadius: {
      default: '6px',
      small: '6px',
      indicator: '6px 0 0 6px',
      indicatorCollapsed: '6px',
      tab: '6px',
      tooltip: '6px',
      icon: '6px',
      medium: '6px',
    },
    button: {
      primary: {
        backgroundColor: '#AE8278',
        color: '#FFFFFF',
        hover: '#C38273',
        focusBorder: '1px solid #E9E9E9',
        borderRadius: '6px',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        color: '#121212',
        hover: '#F5F5F5',
        focusBorder: '1px solid #E9E9E9',
        borderRadius: '6px',
      },
    },
    icons: {
      default: darkBlueIcons,
      selected: fadedRedIcons,
      check: greenIcons,
    },
    input: {
      backgroundColor: '#FFFFFF',
      color: '#121212',
      hover: '#F5F5F5',
      border: '1px solid #DFDFDF',
      focusBorder: '1px solid #A1A1A1',
      validBorder: '1px solid #53A53F',
      errorBorder: '1px solid #C74747',
      borderRadius: '6px',
      errorColor: '#C74747',
    },
  },
  mono: {
    title: 'Mono',
    key: 'mono',
    font: 'Monaco',
    backgroundColor: '#F5F5F5',
    accent: '#212121',
    color: '#212121',
    storyColor: '#212121',
    selected: '#FFFFFF',
    secondary: '#F2F2F2',
    boxShadow: '#E9E9E9',
    contactIcons: '#F2F2F2',
    shadow: true,
    card: '#FFFFFF',
    border: {
      default: '1px solid transparent',
      tab: '1px solid transparent',
      tabSelected: '1px solid transparent',
      background: '1px solid transparent',
      icon: '1px solid transparent',
    },
    borderRadius: {
      default: 0,
      small: 0,
      indicator: 0,
      indicatorCollapsed: 0,
      tab: 0,
      tooltip: 0,
      icon: 0,
      medium: 0,
    },
    button: {
      primary: {
        backgroundColor: '#121212',
        color: '#F3F3F3',
        hover: '#353739',
        focusBorder: '1px solid #CD6B55',
        borderRadius: 0,
      },
      secondary: {
        backgroundColor: '#F5F5F5',
        color: '#212121',
        hover: '#F1F1F1',
        focusBorder: '1px solid #F3F3F3',
        borderRadius: 0,
      },
    },
    icons: {
      default: blackIcons,
      selected: blackIcons,
      check: greenIcons,
    },
    input: {
      backgroundColor: '#FFFFFF',
      color: '#121212',
      hover: '#F2F2F2',
      border: '1px solid #DFDFDF',
      focusBorder: '1px solid #212121',
      validBorder: '1px solid #53A53F',
      errorBorder: '1px solid #C74747',
      borderRadius: 0,
      errorColor: '#C74747',
    },
  },
  mint: {
    title: 'Mint',
    key: 'mint',
    font: 'Red Rose',
    backgroundColor: '#89F3C7',
    accent: '#354656',
    color: '#354656',
    storyColor: '#FFFFFF',
    selected: '#97FFD3',
    secondary: '#7AF4C1',
    boxShadow: '#354656',
    contactIcons: '#7AF4C1',
    shadow: true,
    card: '#90FFD1',
    border: {
      default: '1px solid transparent',
      tab: '1px solid transparent',
      tabSelected: '1px solid transparent',
      background: '1px solid transparent',
      icon: '1px solid transparent',
    },
    borderRadius: {
      default: '10px',
      small: '10px',
      indicator: '10px',
      indicatorCollapsed: '10px',
      tab: '10px',
      tooltip: '10px',
      icon: '10px',
      medium: '10px',
    },
    button: {
      primary: {
        backgroundColor: '#89F3C7',
        color: '#121212',
        hover: '#353739',
        focusBorder: '1px solid #CD6B55',
        borderRadius: '10px',
      },
      secondary: {
        backgroundColor: '#7DF4C2',
        color: '#354656',
        hover: '#97FFD3',
        focusBorder: '1px solid #354656',
        borderRadius: '10px',
      },
    },
    icons: {
      default: darkBlueIcons,
      selected: darkBlueIcons,
      check: darkBlueIcons,
    },
    input: {
      backgroundColor: '#90FFD1',
      color: '#354656',
      hover: '#AAFFDB',
      border: '1.5px solid #90FFD1',
      focusBorder: '1.5px solid #354656',
      validBorder: '1.5px solid #46D297',
      errorBorder: '1.5px solid #E98E8E',
      borderRadius: '10px',
      errorColor: '#E98E8E',
    },
  },
};

function ThemeProvider(props) {
  const [theme, setTheme] = useState('light');
  const [themeChanging, setThemeChanging] = useState(false);

  useLayoutEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await localStorage.getItem('theme');

        if (savedTheme) setTheme(savedTheme);
      } catch (e) {
        // no error handling
      }
    };

    getTheme();
  }, []);

  useLayoutEffect(() => {
    document.body.style.backgroundColor =
      themes[theme]?.backgroundColor ?? '#F5F5F5';
  }, [theme]);

  const toggleTheme = useCallback((newTheme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    setThemeChanging(true);
    setTimeout(() => {
      setThemeChanging(false);
    }, 400);
  }, []);

  const value = useMemo(
    () => ({
      theme: themes[theme],
      themes: Object.values(themes),
      toggleTheme,
      themeChanging,
    }),
    [theme, themeChanging, toggleTheme]
  );

  return (
    <ThemeContext.Provider
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);

  return context || {};
};

export { ThemeProvider, useTheme };
