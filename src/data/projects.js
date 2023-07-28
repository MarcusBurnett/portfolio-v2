import airtimeRewardsTile from '../images/AirtimeRewards/Tile.svg';
import airtimeRewardsLogo from '../images/AirtimeRewards/Logo.svg';

export default [
  {
    title: 'Airtime Rewards',
    skills: ['React Native', 'Redux', 'Git', 'Sketch'],
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
    image: airtimeRewardsTile,
    path: '/experience/airtime-rewards',
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
