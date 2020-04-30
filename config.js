const profile = {
  fullName: 'Amanda Trang',
  description: 'SOFTWARE & EMBEDDED DEVELOPER',
  avatarPath: 'me.png',
  about: {
    title: `Amanda Trang`,
    // description: `Currently a Software Developer Intern at Unity Technologies. I've received my M.Eng in Computer Science from Cornell Tech and a B.S. in Electrical and Computer Engineering from Cornell University, with a minor in Game Design. My interests span game development, VR/AR, hardware and robotics, and generally how technology interacts with the world. 
    
    // In my spare time, I enjoy listening to and making music, playing and making video games, falling off my skateboard, and taking low-quality pictures of dogs.`,
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
        iconName: 'linkedin',
        text: 'LinkedIn',
        url: 'https://www.linkedin.com/in/amandatrang/',
        hoverColor: '#333a87'
      }
    ],
    programmingLanguages: [
      {
        iconName: 'python',
        text: 'Python',
        hoverColor: '#333a87'
      },
      {
        iconName: 'csharp',
        text: 'C#',
        hoverColor: '#333a87'
      },
      {
        iconName: 'cpp',
        text: 'C++',
        hoverColor: '#333a87'
      },
      {
        iconName: 'c',
        text: 'C',
        hoverColor: '#333a87'
      },
      {
        iconName: 'java',
        text: 'Java',
        hoverColor: '#333a87'
      },
      {
        iconName: 'unity',
        text: 'Unity',
        hoverColor: '#333a87'
      },
      // {
      //   iconName: 'unreal',
      //   text: 'Unreal Engine',
      //   hoverColor: '#333a87'
      // },
      {
        iconName: 'mr',
        text: 'AR/VR',
        hoverColor: '#333a87'
      },
      {
        iconName: 'git',
        text: 'Git',
        hoverColor: '#333a87'
      },
      // {
      //   iconName: 'rpi',
      //   text: 'Raspberry Pi',
      //   hoverColor: '#333a87'
      // },
      {
        iconName: 'embedded',
        text: 'Hardware',
        hoverColor: '#333a87'
      },
      {
        iconName: 'windows',
        text: 'Windows',
        hoverColor: '#333a87'
      },
      {
        iconName: 'osx',
        text: 'OSX',
        hoverColor: '#333a87'
      },
      {
        iconName: 'linux',
        text: 'UNIX/Linux',
        hoverColor: '#333a87'
      }
      // {
      //   iconName: 'android',
      //   text: 'Android',
      //   hoverColor: '#333a87'
      // },
      // {
      //   iconName: 'ios',
      //   text: 'iOS',
      //   hoverColor: '#333a87'
      // }
    ]
  },
  social: [
    {
      iconName: 'linkedin',
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
    img: 'assets/img/sjk.png',
    description: 'An in-development story-driven Japanese language learning game.',
    categories: ['Unity', 'C#', 'game dev'],
    siteUrl: 'http://ricegames.net/'
    // sourceCodeUrl: 'github.com/user/project'
  },
  {
    title: 'Thermics',
    img: 'assets/img/cs5678-2.png',
    description: 'A research project on the effects of tactile thermal feedback in virtual reality.',
    categories: ['AR/VR', 'C#', 'Unity', 'hardware'],
    // siteUrl: 'https://sites.google.com/cornell.edu/cs5678-projects-2020/',
    sourceCodeUrl: 'https://github.com/at669/cs5678'
  },
  {
    title: 'Let\'s Gogh!',
    img: 'assets/img/arvr.png',
    description: 'An Oculus Quest application that takes users into their favorite paintings.',
    categories: ['AR/VR', 'C#', 'Unity'],
    // siteUrl: 'https://sites.google.com/cornell.edu/cs5650-projects-2019/',
    siteUrl: 'https://sites.google.com/cornell.edu/cs5650-projects-2019/projects/lets-gogh?authuser=0',
    sourceCodeUrl: 'https://github.com/at669/project-2019-g01-let-s-gogh'
  },
  {
    title: 'Cluck Cluck Moose',
    img: 'assets/img/ccm.png',
    description: 'A mobile chicken-stacking RPS game with lots of bad puns.',
    categories: ['game dev', 'C/C++'],
    siteUrl: 'https://play.google.com/store/apps/details?id=com.wingingitstudios.ccm&hl=en_US',
    sourceCodeUrl: 'https://github.com/ZRich098/CluckCluckMoose'
  },
  {
    title: 'City of Light',
    img: 'assets/img/cs3152.png',
    description: 'A puzzle/stealth game set in 1920s Paris. A BostonFIG 2018 digital showcase game.',
    categories: ['game dev', 'Java'],
    siteUrl: 'https://www.bostonfig.com/exhibitor/city-of-light/',
    sourceCodeUrl: 'https://github.com/Oliviafx/cs3152-game'
  },
  {
    title: 'OSAM-1: Kodiak Emulator',
    img: 'assets/img/nasa.jpeg',
    description: '(Prev. Restore-L). A data arbiter to manage the emulator\'s LiDAR rx/tx transactions.',
    categories: ['FPGA', 'C/C++', 'HDL', 'Python'],
    siteUrl: 'https://sspd.gsfc.nasa.gov/restore-L.html'
  },
  {
    title: 'CU Solar Boat',
    img: 'assets/img/cusb.png',
    description: 'The motor control & telemetry systems for a solar-powered speedboat.',
    categories: ['Python', 'hardware'],
    // siteUrl: 'http://cusolarboat.org/'
    siteUrl: 'https://www.facebook.com/CUsolarboat'
  },
  // {
  //   title: 'ReConnect',
  //   // img: 'https://www.unrefugees.org/img/UNHCR-visibility-horizontal-Blue-CMYK-v2016.svg',
  //   img: 'assets/img/unhcr.jpeg',
  //   description: 'A low-data platform that connects refugees to the gig economy.',
  //   categories: ['Python'],
  //   siteUrl: 'http://buildboard-10044.cornelltech.io/fall-2019/team_pages/F19-T069.html'
  // },
  // {
  //   title: 'Awear',
  //   img: 'https://cornell-tech-logos.fvcproductions.com/assets/img/logos/twisted-t/png/black.png',
  //   description: '.',
  //   categories: ['hardware'],
  //   siteUrl: ''
  // },
  {
    title: 'Security Box',
    img: 'assets/img/eos.jpg',
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
