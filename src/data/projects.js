import airtimeRewardsTile from '../images/AirtimeRewards/Tile.svg';
import airtimeRewardsLogo from '../images/AirtimeRewards/Logo.svg';
import sendcloudTile from '../images/Sendcloud/Tile.svg';
import sendcloudLogoBlue from '../images/Sendcloud/Logo/Blue.svg';
import sendcloudLogoWhite from '../images/Sendcloud/Logo/White.svg';
import sendcloudImage from '../images/Sendcloud/Image.png';
import timolineTile from '../images/Timoline/Tile.svg';
// import timolineLogo from '../images/Timoline/Logo.svg';
import o2Tile from '../images/O2/Tile.svg';
// import o2Logo from '../images/O2/Logo.svg';
import eeTile from '../images/EE/Tile.svg';
// import eeLogo from '../images/EE/Logo.svg';
import sunTile from '../images/Sun/Tile.svg';
// import sunLogo from '../images/Sun/Logo.svg';
import tdsTile from '../images/TDS/Tile.svg';
// import tdsLogo from '../images/EE/Logo.svg';
import Figma from '../images/Figma.svg';
import Dovetail from '../images/Dovetail.png';
import Maze from '../images/Maze.avif';
import React from '../images/React.svg';
import Mixpanel from '../images/Mixpanel.png';
import Hotjar from '../images/Hotjar.png';

export default [
  {
    title: 'Sendcloud',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Mixpanel', img: Mixpanel },
      { name: 'Hotjar', img: Hotjar },
      { name: 'Maze', img: Maze },
      { name: 'Dovetail', img: Dovetail },
      { name: 'React', img: React },
    ],
    logos: {
      light: sendcloudLogoBlue,
      dark: sendcloudLogoWhite,
      whiteout: sendcloudLogoBlue,
      blackout: sendcloudLogoWhite,
      mono: sendcloudLogoBlue,
      mint: sendcloudLogoBlue,
    },
    website: 'https://www.sendcloud.com',
    downloadLinks: [
      {
        store: 'apple',
        url: 'ht\tps://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: sendcloudTile,
    bullets: ['Joined in August 2021', 'Eindhoven, Netherlands'],
    description:
      'I started working at Sendcloud when I moved to the Netherlands. This is where I really grew as a designer. I was able to tackle truly complex problems and deliver outstanding user experiences based on extensive user research.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: sendcloudImage,
    achievement: (
      <p>
        I was the sole designer responsible for a complete overhaul of our
        onboarding experience.
        <br />
        <br />
        I lead the project from discovery to delivery, collaborating with users,
        developers and key stakeholders across multiple departments in the
        company, to ensure we delivered the best experience possible. Thanks to
        all of our hard work, we saw some outstanding results during A/B
        testing;
        <br />
        <br />
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>
            Time to ship first parcel: <strong>54 hrs to 24 hrs</strong>
          </li>
          <li>
            Time to add a payment method: <strong>7 hrs to 13 mins</strong>
          </li>
          <li>
            Time to add a brand: <strong>66 hrs to 21 hrs</strong>
          </li>
        </ul>
      </p>
    ),
    lesson: (
      <p>
        I have learnt so much during my time at Sendcloud, but one of the more
        important lessons is stakeholder management.
        <br />
        <br />
        Through a number of projects, I had to work closely with Product,
        Development, Marketing, Sales, Finance, and everyone has a different
        goal in mind.
        <br />
        <br />
        My job was to make sure the user was always the priority, while also
        leaning on the expertise of others to balance this with business goals.
      </p>
    ),
  },
  {
    title: 'Timoline',
    logos: {
      dark: '',
      light: '',
      default: timolineTile,
    },
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    website: 'https://www.timoline.com',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: timolineTile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
  {
    title: 'Airtime Rewards',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    logos: {
      dark: '',
      light: '',
      default: airtimeRewardsLogo,
    },
    website: 'https://www.airtimerewards.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: airtimeRewardsTile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
  {
    title: 'My O2',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    logos: {
      dark: '',
      light: '',
      default: o2Tile,
    },
    website: 'https://myo2.airtimerewards.co.uk/',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: o2Tile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
  {
    title: 'EE Up',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    logos: {
      dark: '',
      light: '',
      default: eeTile,
    },
    website: 'https://ee.co.uk/ee-and-me/my-ee-app',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: eeTile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
  {
    title: 'Sun Cashback',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    logos: {
      dark: '',
      light: '',
      default: sunTile,
    },
    website: 'https://www.suncashback.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: sunTile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
  {
    title: 'Theatre Dance Studios',
    tools: [
      { name: 'Figma', img: Figma },
      { name: 'Dovetail', img: Dovetail },
      { name: 'Maze', img: Maze },
      { name: 'React', img: React },
    ],
    logos: {
      dark: '',
      light: '',
      default: tdsTile,
    },
    website: 'https://www.tdsbolton.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/airtime-rewards-earn-rewards/id975840117',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.karrot',
      },
    ],
    tile: tdsTile,
    description:
      'The main focus of my time at Airtime Rewards was our React Native app. In 2020 we re-built the app from scratch, allowing us to work with the latest React Native features and packages. I have also been responsible for a lot of design work and created a number of Sketch component libraries to make our design process easier.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    backgroundImage: '',
  },
];
