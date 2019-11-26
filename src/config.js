const profile = {
  fullName: 'Amanda Trang',
  description: 'SOFTWARE & EMBEDDED DEVELOPER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
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
        hoverColor: '#546e7a'
      },
      {
        iconName: 'github',
        text: 'GitHub',
        url: 'https://github.com/at669',
        hoverColor: '#1da1f2'
      },
      {
        iconName: 'email',
        text: 'amanda.q.trang@gmail.com',
        url: 'mailto://amanda.q.trang@gmail.com',
        hoverColor: '#546e7a'
      },
      {
        iconName: 'account-star',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/amandatrang/',
        hoverColor: '#e9641c'
      }
    ]
  },
  social: [
    // {
    //   iconName: 'twitter',
    //   url: 'https://twitter.com/username',
    //   text: "I'm on Twitter",
    //   hoverColor: '#1da1f2'
    // },
    {
      iconName: 'account-star',
      url: 'https://www.linkedin.com/in/amandatrang/',
      text: "I'm on LinkedIn",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/at669',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:amanda.q.trang@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
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
    description: 'An Oculus Quest app that takes users into their favorite paintings.',
    categories: ['AR/VR', 'C#', 'Unity'],
    siteUrl: 'https://sites.google.com/cornell.edu/cs5650projectsfall2019/g01'
  },
  {
    title: 'Cluck Cluck Moose',
    img: 'https://lh3.googleusercontent.com/D5OqXaqTx9I-IrAvkiqxioJsWUYjQixgQ-6cpsnJ5jASG0_BehaIJEVCjy4CVyt87D8=s360-rw',
    description: 'An Android chicken-stacking RPS game, with lots of bad puns.',
    categories: ['game dev', 'C++'],
    siteUrl: 'https://play.google.com/store/apps/details?id=com.wingingitstudios.ccm&hl=en_US',
    sourceCodeUrl: 'https://github.com/ZRich098/CluckCluckMoose'
  },
  {
    title: 'City of Light',
    img: 'https://github.com/Oliviafx/cs3152-game/blob/master/readme-art/logo.jpg?raw=true',
    description: 'A desktop puzzle/stealth game, set in 1920s Paris.',
    categories: ['game dev', 'Java'],
    siteUrl: 'https://www.bostonfig.com/exhibitor/city-of-light/',
    sourceCodeUrl: 'https://github.com/Oliviafx/cs3152-game'
  },
  {
    title: 'Restore-L: Kodiak Emulator',
    img: 'https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg',
    description: 'A data arbiter module to manage the emulator\'s LiDAR read/write transactions.',
    categories: ['FPGA', 'C', 'VHDL', 'Python'],
    siteUrl: 'https://sspd.gsfc.nasa.gov/restore-L.html'
  },
  {
    title: 'CU Solar Boat',
    img: 'https://media.licdn.com/dms/image/C560BAQF4wmQ7gmG3Bw/company-logo_400_400/0?e=1582761600&v=beta&t=yEknwjCP44nRmMCpyRaJaLy7-5fT7pMt_DtWf_9BKEY',
    description: 'The motor control & telemetry systems for a solar-powered speedboat.',
    categories: ['Python', 'hardware'],
    siteUrl: 'http://cusolarboat.org/'
  },
  {
    title: 'LFO ASIC',
    img: 'https://www.ece.cornell.edu/themes/custom/cornell/assets/img/cornell_university-seal_red.svg',
    description: 'An ASIC module for the low-frequency oscillator in a synthesizer project.',
    categories: ['hardware', 'Verilog', 'MATLAB'],
    sourceCodeUrl: 'https://github.com/at669/ECE5746'
  },
  {
    title: 'Product Studio',
    img: 'https://cornell-tech-logos.fvcproductions.com/assets/img/logos/twisted-t/png/black.png',
    description: 'An low-data platform that connects refugees to the gig economy.',
    categories: ['Python'],
    siteUrl: 'http://buildboard-10044.cornelltech.io/fall-2019/team_pages/F19-T069.html'
  },
  {
    title: 'Security Box',
    img: 'https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/pics/1.jpg',
    description: 'A security box capable of facial recognition, voice recognition, and NFC detection.',
    categories: ['Python', 'hardware'],
    siteUrl: 'https://courses.ece.cornell.edu/ece5990/ECE5725_Spring2019_Projects/at669_mr2242/index.html'
  }
]

const formUrl = 'http://localhost:4000'
// const formUrl = 'https://at669.github.io/'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
const missingProjectIcon = './assets/no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}