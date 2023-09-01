import airtimeRewardsTile from '../images/AirtimeRewards/Tile.svg';
import airtimeRewardsLogoBlue from '../images/AirtimeRewards/Logo/Blue.svg';
import airtimeRewardsLogoWhite from '../images/AirtimeRewards/Logo/White.svg';
import airtimeRewardsImage from '../images/AirtimeRewards/Image.png';
import sendcloudTile from '../images/Sendcloud/Tile.svg';
import sendcloudLogoBlue from '../images/Sendcloud/Logo/Blue.svg';
import sendcloudLogoWhite from '../images/Sendcloud/Logo/White.svg';
import sendcloudImage from '../images/Sendcloud/Image.png';
import timolineTile from '../images/Timoline/Tile.svg';
import timolineLogoBlue from '../images/Timoline/Logo/Blue.svg';
import timolineLogoWhite from '../images/Timoline/Logo/White.svg';
import timolineImage from '../images/Timoline/Image.png';
import o2Tile from '../images/O2/Tile.svg';
import o2Image from '../images/O2/Image.png';
import o2LogoBlue from '../images/O2/Logo/Blue.svg';
import o2LogoWhite from '../images/O2/Logo/White.svg';
import eeTile from '../images/EE/Tile.svg';
import eeImage from '../images/EE/Image.png';
import eeLogoGreen from '../images/EE/Logo/Green.png';
import eeLogoYellow from '../images/EE/Logo/Yellow.png';
import sunTile from '../images/Sun/Tile.svg';
import sunLogo from '../images/Sun/Logo.png';
import sunImage from '../images/Sun/Image.png';
import tdsTile from '../images/TDS/Tile.svg';
import tdsImage from '../images/TDS/Image.png';
import tdsLogoPurple from '../images/TDS/Logo/Purple.png';
import tdsLogoWhite from '../images/TDS/Logo/White.png';
import Figma from '../images/Tools/Figma.svg';
import Dovetail from '../images/Tools/Dovetail.svg';
import Maze from '../images/Tools/Maze.svg';
import React from '../images/Tools/React.svg';
import ReactNative from '../images/Tools/ReactNative.svg';
import Mixpanel from '../images/Tools/Mixpanel.svg';
import Hotjar from '../images/Tools/Hotjar.svg';
import Firebase from '../images/Tools/Firebase.svg';
import VueJS from '../images/Tools/VueJS.svg';
import XD from '../images/Tools/XD.svg';
import Sketch from '../images/Tools/Sketch.svg';
import Git from '../images/Tools/Git.svg';
import TestingLibrary from '../images/Tools/TestingLibrary.svg';

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
      <span>
        I was the sole designer responsible for a complete overhaul of our
        onboarding experience.
        <br />
        <br />
        I led the project from discovery to delivery, collaborating with users,
        developers and key stakeholders across multiple departments in the
        company, to ensure we delivered the best experience possible. Thanks to
        all of our hard work, we saw some outstanding results during A/B
        testing;
        <br />
        <br />
        <ul style={{ listStyleType: 'disc', marginLeft: '1rem' }}>
          <li>
            <span>Time to ship first parcel:</span>
            <br />
            <span style={{ marginLeft: '1rem' }}>
              From <strong>54 hrs</strong> to just <strong>24 hrs</strong>
            </span>
          </li>
          <br />
          <li>
            <span>Time to add a payment method:</span>
            <br />
            <span style={{ marginLeft: '1rem' }}>
              From <strong>7 hrs</strong> to just <strong>13 mins</strong>
            </span>
          </li>
          <br />
          <li>
            <span>Time to add a brand:</span>
            <br />
            <span style={{ marginLeft: '1rem' }}>
              From <strong>66 hrs</strong> to just <strong>21 hrs</strong>
            </span>
          </li>
        </ul>
      </span>
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
      light: timolineLogoBlue,
      dark: timolineLogoWhite,
      whiteout: timolineLogoBlue,
      blackout: timolineLogoWhite,
      mono: timolineLogoBlue,
      mint: timolineLogoBlue,
    },
    tools: [
      { name: 'React Native', img: ReactNative },
      { name: 'Adobe XD', img: XD },
      { name: 'Figma', img: Figma },
      { name: 'Firebase', img: Firebase },
      { name: 'Git', img: Git },
    ],
    website: 'https://www.timoline.com',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/timoline/id1548294530',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.timoline',
      },
    ],
    tile: timolineTile,
    bullets: ['Created December 2021', 'Consistent background project'],
    description:
      "Initially, Timoline was a simple app I created in order to populate a timeline with my son's most important moments, while staying away from mainstram applications with questionable data security. However, it quickly grew into a more expansive experience and I ended up making it available on the app store",
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: timolineImage,
    achievement: (
      <span>
        This was the first mobile application I designed built and deployed
        entirely by myself. The inital intention filled the specific need of
        myself and my family, and was initially built as a basic app that I
        could manually install on peoples devices. Over time, the concept
        evolved, the design matured, and I have continued to develop it ever
        since
        <br />
        <br />
        Given I had no team to support me, I had to figure out a lot, which
        taught me plenty about research, design and development. I was able to
        take all of my learnings from previous projects, and see it all come
        together in a final product, which is actively used by family and
        friends.
      </span>
    ),
    lesson: (
      <p>
        A product is never finished. After I released the first version of
        Timoline, I was thrilled to have delivered my own app. For a while at
        least, until I discovered some competitors. As it turned out, these apps
        were far ahead of what I created, and I felt a little disappointed in
        myself.
        <br />
        <br />
        That is when I realised that my design and development skills needed to
        improve if I were to reach the top of my respective field. I can be
        competitive, and I put that to good use, overhauling the app to produce
        an app that could reach the level of what I had seen.
      </p>
    ),
  },
  {
    title: 'Airtime Rewards',
    tools: [
      { name: 'Sketch', img: Sketch },
      { name: 'React', img: React },
      { name: 'React Native', img: ReactNative },
      { name: 'Git', img: Git },
      { name: 'React Testing Library', img: TestingLibrary },
    ],
    logos: {
      light: airtimeRewardsLogoBlue,
      dark: airtimeRewardsLogoWhite,
      whiteout: airtimeRewardsLogoBlue,
      blackout: airtimeRewardsLogoWhite,
      mono: airtimeRewardsLogoBlue,
      mint: airtimeRewardsLogoBlue,
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
    bullets: ['May 2019 - Aug 2021', 'Manchester, UK'],
    description:
      'The main focus of my time at Airtime Rewards was our app, built using React Native. In 2020 we re-built it from scratch, allowing us to work with the latest features and packages for the framework. I also played a significant role in the deisgn process, implementing a cloud-based design system and branching to streamline the process.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: airtimeRewardsImage,
    achievement: (
      <span>
        As a part of a 3 person FE team in a rapidly growing start-up, I was
        thrust into the deep end at the beginning of my career, and I thoroughly
        enjoyed it. I was given far more responsibility than a junior would
        expect, and given the chance to rise to the occasion.
        <br />
        <br />
        After less than a year, we were tasked with completely rebuilding our
        mobile application, using a brand new brand and design (which I also
        contributed towards). Not only that, we were asked to do so at an
        accelerated rate, and not only were we able to deliver on time, we were
        commended for the standard of our work.
      </span>
    ),
    lesson: (
      <p>
        Coming in as a junior, I failed plenty of times (as you can expect). And
        this taught me the value of perserverence and patience. Learning to
        build web and mobile applications presents plenty of unexpected
        challenges, with solutions of varying complexity.
        <br />
        <br />
        I learned to work through the frustrations presented by each problem,
        taking mental breaks where necessary, seeking help when needed and,
        importantly, staying fresh and relaxed.
        <br />
        <br />I also learnt that the age old adage &quot;Have you tried turning
        it off and on again&quot; is a valuable piece of advice, particularly
        when building out mobile apps...
      </p>
    ),
  },
  {
    title: 'My O2',
    tools: [
      { name: 'Sketch', img: Sketch },
      { name: 'React', img: React },
      { name: 'VueJS', img: VueJS },
      { name: 'Git', img: Git },
      { name: 'React Testing Library', img: TestingLibrary },
    ],
    logos: {
      light: o2LogoBlue,
      dark: o2LogoWhite,
      whiteout: o2LogoBlue,
      blackout: o2LogoWhite,
      mono: o2LogoBlue,
      mint: o2LogoBlue,
    },
    website: 'https://myo2.airtimerewards.co.uk/',
    tile: o2Tile,
    bullets: ['First built October 2019', 'Final iteration May 2021'],
    description:
      'As a key partner of Airtime Rewards, we built the My O2 web app in React, giving O2 members easier access to the Airtime platform. In 2021, I re-designed the app using a new DSM and contributed to the development changes required to implement the new design. While it is accessible via desktop, it was primarily built to be viewed via a webview in the My O2 app.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: o2Image,
    achievement: (
      <span>
        I was given the chance to handle the full design process of this
        application, using a brand new design system provided by O2. This meant
        I collaborated with stakeholders from both companies, which was a unique
        experience for me. Thankfully, what we created was received very
        positively by all stakeholders, with only minor notes
        <br />
        <br />
        It was also interesting to see how design functioned in such a large
        company, as I was given access to the new design system library, privy
        to conversations between designers and exchanged occasional
        back-and-forths when planning the application architecture.
      </span>
    ),
    lesson: (
      <p>
        It was in this project that I learnt how designers do not just have free
        reign, especially in huge companies like O2. Everything we created had
        to be checked, not only by design, but by brand managers and even legal.
        In fact, we had a last minute crisis when the legal team took issue with
        something we created, which had to be resolved before we released the
        product.
        <br />
        <br />
        So I learned to be mindful of other aspects of a product, with the
        understanding that my role was not just to make a good design. There
        were many acets to the job, which must be taken into account
      </p>
    ),
  },
  {
    title: 'EE Up',
    tools: [
      { name: 'Sketch', img: Sketch },
      { name: 'React', img: React },
      { name: 'Git', img: Git },
      { name: 'React Testing Library', img: TestingLibrary },
    ],
    logos: {
      light: eeLogoGreen,
      dark: eeLogoYellow,
      whiteout: eeLogoGreen,
      blackout: eeLogoYellow,
      mono: eeLogoGreen,
      mint: eeLogoGreen,
    },
    website: 'https://ee.co.uk/ee-and-me/my-ee-app',
    tile: eeTile,
    bullets: ['Created June 2020', 'Full control of the design'],
    description:
      'Similar to the My O2 app, we created a web application specifically for EE members. I played a key role in both the design and development of the app, designed in Sketch and built with React. Our application is then displayed to the user via a webview in the My EE app.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: eeImage,
    achievement: (
      <span>
        Interestingly, with this app we were given more design freedom than with
        O2. We were able to use our design system, which I had recently created,
        and this was just the second time we were able to utilise the benefits
        of this new DSM. The key to this type of application, was to drive users
        towards the Airtime Rewards app, while offering enough functionality for
        it to still be useful as a standalone application.
        <br />
        <br />
        My achievement for this project was the usage of the new DSM, in
        collaboration with an external company, and seeing it hold up well
        during the design process.
      </span>
    ),
    lesson: (
      <p>
        This was one of the early projects where I worked essentially in a
        designer/developer hybrid role, and so I had to learn how to navigate
        the responsibility that comes with each discipline. Particularly, when
        hadning over a design and then being a part of the development team
        implementing it, I had to learn not to be too attached to my designs,
        and to work with developers from an earlier stage in the process.
      </p>
    ),
  },
  {
    title: 'Sun Cashback',
    tools: [
      { name: 'React Native', img: ReactNative },
      { name: 'Sketch', img: Sketch },
      { name: 'Git', img: Git },
      { name: 'React Testing Library', img: TestingLibrary },
    ],
    logos: {
      light: sunLogo,
      dark: sunLogo,
      whiteout: sunLogo,
      blackout: sunLogo,
      mono: sunLogo,
      mint: sunLogo,
    },
    website: 'https://www.suncashback.co.uk',
    downloadLinks: [
      {
        store: 'apple',
        url: 'https://apps.apple.com/gb/app/sun-cashback/id1534593837',
      },
      {
        store: 'google',
        url: 'https://play.google.com/store/apps/details?id=com.airtimerewards.suncashback.android',
      },
    ],
    tile: sunTile,
    bullets: [
      'Built in January 2021',
      'Collaboration with external design team',
    ],
    description:
      "The Sun Cashback app is a re-skinned, limited version of the Airtime Rewards app. I was tasked with taking our app, stripping it down to essential features only, and re-designing it using The Sun's branding, as well as sourcing and implementing a new icon library. Once the designs were signed off I also contributed to the development of the app, built with React Native.",
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: sunImage,
    achievement: (
      <span>
        One fateful Tuesday morning, while working on the Airtime Rewards
        application, I was asked to attended a meeting. During this meeting, I
        was told that we would be building an app for The Sun, and was asked if
        I could create a design. Not only that, but could it be done by
        Friday...
        <br />
        <br />
        So what did this project entail? I had to get access to the branding and
        guidelines of The Sun, spend time exploring their existing products to
        get a better feel of their brand experience, align with key stakeholders
        as to what exactly needed to be delivered, and then overhaul our
        existing designs to meet the requirements.
        <br />
        This app was not just a mirror image of the Airtime Rewards app. It was
        fully re-skinned, with a number of key user journeys modified, such as
        the login experience. Thankfully with the help of my FE lead, we were
        able to deliver the design on time (just).
      </span>
    ),
    lesson: (
      <p>
        Sometimes you can say &quot;no&quot;. In order to deliver this project,
        I had to drop everything I was doing and work overtime, simply because
        the project was not planned well. In hindsight, I should have explained
        why the timeframe requested was not ideal, and presented a number of
        risks which could be addressed if we were given just another week.
        <br />
        <br />
        There is also the risk that taking on and actually delivering a large
        project in this timeframe enforces negative behaviour (stakeholders may
        come to expect this all the time) which is not sustainable long-term
      </p>
    ),
  },
  {
    title: 'Theatre Dance Studios',
    tools: [
      { name: 'Adobe XD', img: XD },
      { name: 'React', img: React },
      { name: 'Firebase', img: Firebase },
    ],
    logos: {
      light: tdsLogoPurple,
      dark: tdsLogoWhite,
      whiteout: tdsLogoPurple,
      blackout: tdsLogoWhite,
      mono: tdsLogoPurple,
      mint: tdsLogoPurple,
    },
    website: 'https://www.tdsbolton.co.uk',
    tile: tdsTile,
    bullets: ['Built October 2019', 'Bolton, UK'],
    description:
      'One of my first projects was to build a new website for Theatre Dance Studios in Bolton. I designed the site in Adobe XD, built the front end in React and used Firebase for the back end, allowing dance school admins to update the data in each section of the app. Adding Firebase allowed the dance school to keep the site up-to-date without requiring frequent deployments.',
    colors: {
      background: '#0D2633',
      tint: '#154355',
      rgb: { r: 13, g: 38, b: 51 },
    },
    image: tdsImage,
    achievement: (
      <span>
        As my first project for an external client, building this website
        presented a fun challenge for me. I had to create a visually appealing
        user interface that would attract new customers for the business, but
        also create an interface that was easily editable by administrators.
        <br />
        <br />
        One of the key requirements for the project was the ability to make
        simple changes to hte data without having to request it from a
        developer. Given the dynamic state of the data that would be entered,
        such as event scheduling, timetables etc. this was crucial, and
        something I had never created previously.
        <br />
        <br />
        Thankfully, I was able to deliver a product that made the client happy,
        and gave them full control over the data that they can display
      </span>
    ),
    lesson: (
      <p>
        This project took far longer than I had anticipated. So my biggest
        lesson was to plan out projects in full, and take into account
        experience level. A lot of the additional time I needed, was because I
        had to learn a lot in order to deliver hwat I had promised. Had I taken
        this into account, the client would have been given an accurate delivery
        estimate. Instead, due to inexperience they were forced to wait.
      </p>
    ),
  },
];
