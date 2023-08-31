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
      default: '4rem',
      small: '2rem',
      indicator: '1rem 0 0 1rem',
      indicatorCollapsed: '0 1rem 1rem 0',
      tab: '1.6rem',
      tooltip: '0.8rem',
      icon: '50%',
      medium: '3rem',
    },
    border: {
      default: '0.1rem solid transparent',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid transparent',
      icon: '0.1rem solid transparent',
    },
    button: {
      primary: {
        backgroundColor: '#CD6B55',
        color: '#FFFFFF',
        hover: '#CA4C30',
        focusBorder: '0.1rem solid #2B3652',
        borderRadius: '2rem',
      },
      secondary: {
        backgroundColor: '#F0F1F4',
        color: '#2B3652',
        hover: '#EAEBEF',
        focusBorder: '0.1rem solid #2B3652',
        borderRadius: '2rem',
      },
    },
    input: {
      backgroundColor: '#FFFFFF',
      color: '#2B3652',
      hover: '#f8f8f8',
      border: '0.1rem solid #eaedf0',
      focusBorder: '0.1rem solid #2B3652',
      validBorder: '0.1rem solid #53A53F',
      errorBorder: '0.1rem solid #C74747',
      borderRadius: '2rem',
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
      default: '4rem',
      small: '2rem',
      indicator: '1rem 0 0 1rem',
      indicatorCollapsed: '0 1rem 1rem 0',
      tab: '1.6rem',
      tooltip: '0.8rem',
      icon: '50%',
      medium: '3rem',
    },
    border: {
      default: '0.1rem solid transparent',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid transparent',
      background: '0.1rem solid transparent',
      icon: '0.1rem solid transparent',
    },
    button: {
      primary: {
        backgroundColor: '#F0A595',
        color: '#F3F3F3',
        hover: '#AE8278',
        focusBorder: '0.1rem solid #CD6B55',
        borderRadius: '2rem',
      },
      secondary: {
        backgroundColor: '#353739',
        color: '#F3F3F3',
        hover: '#292C2E',
        focusBorder: '0.1rem solid #F0A595',
        borderRadius: '2rem',
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
      border: '0.1rem solid #242627',
      focusBorder: '0.1rem solid #F0A595',
      validBorder: '0.1rem solid #53A53F',
      errorBorder: '0.1rem solid #C74747',
      borderRadius: '2rem',
      errorColor: '#C74747',
    },
    imageFilter: 'saturate(60%)',
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
      default: '0.1rem solid #3A3A3A',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid #3A3A3A',
      background: '0.1rem solid #000000',
      icon: '0.1rem solid #3A3A3A',
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
        focusBorder: '0.1rem solid #CD6B55',
        borderRadius: 0,
      },
      secondary: {
        backgroundColor: '#121212',
        color: '#F3F3F3',
        hover: '#292C2E',
        focusBorder: '0.1rem solid #F0A595',
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
      border: '0.1rem solid #3A3A3A',
      focusBorder: '0.1rem solid #3A3A3A',
      validBorder: '0.1rem solid #53A53F',
      errorBorder: '0.1rem solid #C74747',
      borderRadius: 0,
      errorColor: '#C74747',
    },
    imageFilter: 'grayscale(80%)',
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
      default: '0.1rem solid #E9E9E9',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid #E9E9E9',
      background: '0.1rem solid #E9E9E9',
      icon: '0.1rem solid #E9E9E9',
    },
    borderRadius: {
      default: '0.6rem',
      small: '0.6rem',
      indicator: '0.6rem 0 0 0.6rem',
      indicatorCollapsed: '0.6rem',
      tab: '0.6rem',
      tooltip: '0.6rem',
      icon: '0.6rem',
      medium: '0.6rem',
    },
    button: {
      primary: {
        backgroundColor: '#AE8278',
        color: '#FFFFFF',
        hover: '#C38273',
        focusBorder: '0.1rem solid #E9E9E9',
        borderRadius: '0.6rem',
      },
      secondary: {
        backgroundColor: '#FFFFFF',
        color: '#121212',
        hover: '#F5F5F5',
        focusBorder: '0.1rem solid #E9E9E9',
        borderRadius: '0.6rem',
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
      border: '0.1rem solid #DFDFDF',
      focusBorder: '0.1rem solid #A1A1A1',
      validBorder: '0.1rem solid #53A53F',
      errorBorder: '0.1rem solid #C74747',
      borderRadius: '0.6rem',
      errorColor: '#C74747',
    },
    imageFilter: 'saturate(40%)',
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
      default: '0.1rem solid transparent',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid transparent',
      background: '0.1rem solid transparent',
      icon: '0.1rem solid transparent',
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
        focusBorder: '0.1rem solid #CD6B55',
        borderRadius: 0,
      },
      secondary: {
        backgroundColor: '#F5F5F5',
        color: '#212121',
        hover: '#F1F1F1',
        focusBorder: '0.1rem solid #F3F3F3',
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
      border: '0.1rem solid #DFDFDF',
      focusBorder: '0.1rem solid #212121',
      validBorder: '0.1rem solid #53A53F',
      errorBorder: '0.1rem solid #C74747',
      borderRadius: 0,
      errorColor: '#C74747',
    },
    imageFilter: 'grayscale(90%)',
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
      default: '0.1rem solid transparent',
      tab: '0.1rem solid transparent',
      tabSelected: '0.1rem solid transparent',
      background: '0.1rem solid transparent',
      icon: '0.1rem solid transparent',
    },
    borderRadius: {
      default: '1rem',
      small: '1rem',
      indicator: '1rem',
      indicatorCollapsed: '1rem',
      tab: '1rem',
      tooltip: '1rem',
      icon: '1rem',
      medium: '1rem',
    },
    button: {
      primary: {
        backgroundColor: '#89F3C7',
        color: '#121212',
        hover: '#353739',
        focusBorder: '0.1rem solid #CD6B55',
        borderRadius: '1rem',
      },
      secondary: {
        backgroundColor: '#7DF4C2',
        color: '#354656',
        hover: '#97FFD3',
        focusBorder: '0.1rem solid #354656',
        borderRadius: '1rem',
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
      border: '0.15rem solid #90FFD1',
      focusBorder: '0.15rem solid #354656',
      validBorder: '0.15rem solid #46D297',
      errorBorder: '0.15rem solid #E98E8E',
      borderRadius: '1rem',
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
