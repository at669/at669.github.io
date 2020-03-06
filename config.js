const profile = {
  fullName: 'Amanda Trang',
  description: 'SOFTWARE & EMBEDDED DEVELOPER',
  avatarPath: 'me.png',
  about: {
    title: `Amanda Trang`,
    description: `I'm currently an M.Eng student at Cornell Tech studying Computer Science. My background is in Electrical and Computer Engineering at Cornell University with a Game Design minor. My interests span hardware and robotics, VR/AR, game development, and generally how technology interacts with the world. 
    
    In my spare time, I enjoy listening to and making music, playing and making video games, falling off my skateboard, and taking low-quality pictures of dogs.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'New York, NY',
        url: '',
        hoverColor: '#333a87'
      },
      {
        iconName: 'github',
        text: 'GitHub',
        url: 'https://github.com/at669',
        hoverColor: '#333a87'
      },
      {
        iconName: 'email',
        text: 'amanda.q.trang@gmail.com',
        url: 'mailto:amanda.q.trang@gmail.com',
        hoverColor: '#333a87'
      },
      {
        iconName: 'account-star',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/amandatrang/',
        hoverColor: '#333a87'
      }
    ]
  },
  social: [
    {
      iconName: 'account-star',
      url: 'https://www.linkedin.com/in/amandatrang/',
      text: "I'm on LinkedIn",
      hoverColor: '#333a87'
    },
    {
      iconName: 'github',
      url: 'https://github.com/at669',
      text: "I'm on Github",
      hoverColor: '#333a87'
    },
    {
      iconName: 'email',
      url: 'mailto:amanda.q.trang@gmail.com',
      text: 'Send me an email',
      hoverColor: '#333a87'
    }
  ]
}

const projects = [
  {
    title: 'Shujinkou',
    img: 'https://www.ricegames.net/press/images/logo.png',
    description: 'An in-development story-driven Japanese language-learning action game.',
    categories: ['Unity', 'C#', 'game dev'],
    siteUrl: 'http://ricegames.net/'
    // sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Let\'s Gogh!',
    img: 'https://avatars0.githubusercontent.com/u/42649948?s=200&v=4',
    description: 'An Oculus Quest application that takes users into their favorite paintings.',
    categories: ['AR/VR', 'C#', 'Unity'],
    siteUrl: 'https://sites.google.com/cornell.edu/cs5650-projects-2019/'
    // sourceCodeUrl: 'https://github.com/at669/project-2019-g01-let-s-gogh'
  },
  {
    title: 'Cluck Cluck Moose',
    img: 'https://lh3.googleusercontent.com/D5OqXaqTx9I-IrAvkiqxioJsWUYjQixgQ-6cpsnJ5jASG0_BehaIJEVCjy4CVyt87D8=s360-rw',
    description: 'A mobile chicken-stacking RPS game with lots of bad puns.',
    categories: ['game dev', 'C/C++'],
    siteUrl: 'https://play.google.com/store/apps/details?id=com.wingingitstudios.ccm&hl=en_US',
    sourceCodeUrl: 'https://github.com/ZRich098/CluckCluckMoose'
  },
  {
    title: 'City of Light',
    img: 'https://pbs.twimg.com/profile_images/1021442904663961600/tLQmPu5P_400x400.jpg',
    description: 'A puzzle/stealth game set in 1920s Paris. A BostonFIG 2018 digital showcase game.',
    categories: ['game dev', 'Java'],
    siteUrl: 'https://www.bostonfig.com/exhibitor/city-of-light/',
    sourceCodeUrl: 'https://github.com/Oliviafx/cs3152-game'
  },
  {
    title: 'Restore-L: Kodiak Emulator',
    img: 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg',
    description: 'A data arbiter module to manage the emulator\'s LiDAR read/write transactions.',
    categories: ['FPGA', 'C/C++', 'HDL', 'Python'],
    siteUrl: 'https://sspd.gsfc.nasa.gov/restore-L.html'
  },
  {
    title: 'CU Solar Boat',
    img: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t31.0-8/12819221_1706820822866892_3252301890566566395_o.jpg?_nc_cat=110&_nc_ohc=BnN0E9_xH18AQlzpiRhwmoNGibkCF4TM045ECewWIaOL6rf1H5B-bGrPA&_nc_ht=scontent-sjc3-1.xx&oh=40bcb336a3ff70bd696e5096429ba0fc&oe=5E688C45',
    description: 'The motor control & telemetry systems for a solar-powered speedboat.',
    categories: ['Python', 'hardware'],
    siteUrl: 'http://cusolarboat.org/'
  },
  // {
  //   title: 'LFO ASIC',
  //   img: 'https://www.ece.cornell.edu/themes/custom/cornell/assets/img/cornell_university-seal_red.svg',
  //   description: 'An ASIC module for the low-frequency oscillator in a synthesizer project.',
  //   categories: ['hardware', 'HDL'],
  //   sourceCodeUrl: 'https://github.com/at669/ECE5746'
  // },
  {
    title: 'ReConnect',
    img: 'https://www.unrefugees.org/img/UNHCR-visibility-horizontal-Blue-CMYK-v2016.svg',
    description: 'A low-data platform that connects refugees to the gig economy.',
    categories: ['Python'],
    siteUrl: 'http://buildboard-10044.cornelltech.io/fall-2019/team_pages/F19-T069.html'
  },
  // {
  //   title: 'Awear',
  //   img: 'https://cornell-tech-logos.fvcproductions.com/assets/img/logos/twisted-t/png/black.png',
  //   description: '.',
  //   categories: ['hardware'],
  //   siteUrl: ''
  // },
  // {
  //   title: 'Koala Rescue',
  //   img: 'https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/featured_image/2020/02/274841/screen_shot_2020-02-02_at_2.53.25_pm.png?itok=vk5eCK9D&timestamp=1580673460',
  //   description: '1-2 player platformer made over the span of a few hours for GameJam 2020.',
  //   categories: ['game dev', 'C#', 'Unity'],
  //   siteUrl: 'https://globalgamejam.org/2020/games/koala-rescue-4',
  //   sourceCodeUrl: 'https://github.com/at669/GameJam2020'
  // },
  {
    title: 'Security Box',
    img: 'https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/pics/1.jpg',
    description: 'A security box capable of facial recognition, voice recognition, and NFC detection.',
    categories: ['Python', 'hardware'],
    siteUrl: 'https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/index.html'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
