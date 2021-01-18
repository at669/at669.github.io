const profile = {
  fullName: 'Amanda Trang',
  description: 'SOFTWARE DEVELOPER',
  avatarPath: 'me.png',
  about: {
    title: `Amanda Trang`,
    description: `I'm a software developer with a hardware background, and I think games are neat. 
    
    I've recently received my M.Eng in Computer Science and a B.S. in Electrical and Computer Engineering from Cornell University, with a minor in Game Design. My interests span game development, VR/AR, and hardware and robotics. In my spare time, I enjoy listening to and making music, playing and making video games, falling off my skateboard, and taking low-quality pictures of dogs.`,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Greater Salt Lake City Area, UT',
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
        iconName: 'csharp',
        text: 'C#',
        hoverColor: '#333a87'
      },
      {
        iconName: 'python',
        text: 'Python',
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
        iconName: 'gamepad',
        text: 'Game Design',
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
      // {
      //   iconName: 'git',
      //   text: 'Git',
      //   hoverColor: '#333a87'
      // },
      {
        iconName: 'robot',
        text: 'ROS',
        hoverColor: '#333a87'
      },
      {
        iconName: 'embedded',
        text: 'Hardware',
        hoverColor: '#333a87'
      },
      {
        iconName: 'XOR',
        text: 'FPGA/HDL',
        hoverColor: '#333a87'
      },
      {
        iconName: 'brain',
        text: 'Machine Learning',
        hoverColor: '#333a87'
      }
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
    siteUrl: 'http://ricegames.net/shujinkou'
  },
  {
    title: 'Pick-and-Place Demo',
    img: 'assets/img/niryo.png',
    description: 'An end-to-end tutorial to integrate ROS with Unity.',
    categories: ['Unity', 'C#', 'Python', 'robotics'],
    siteUrl: 'https://blogs.unity3d.com/2020/11/19/robotics-simulation-in-unity-is-as-easy-as-1-2-3/',
    sourceCodeUrl: 'https://github.com/Unity-Technologies/Unity-Robotics-Hub/'
  },
  {
    title: 'Unity Simulation Demos',
    img: 'assets/img/sim_warehouse.png',
    description: 'Sample Unity projects featuring ADR, synthetic data generation, and DOTS.',
    categories: ['Unity', 'C#', 'Python'],
    siteUrl: 'https://github.com/Unity-Technologies/Unity-Simulation-Docs',
    sourceCodeUrl: 'https://assetstore.unity.com/packages/essentials/tutorial-projects/unity-simulation-sample-project-warehouse-robot-176606'
  },
  // {
  //   title: 'Project Zero',
  //   img: 'assets/img/sim_windridge.png',
  //   description: '.',
  //   categories: ['Unity', 'C#'],
  //   sourceCodeUrl: 'https://github.com/at669/CCTrain/tree/master/Project0'
  // },
  {
    title: 'Thermics',
    img: 'assets/img/cs5678.png',
    description: 'A research project on the effects of tactile thermal feedback in virtual reality.',
    categories: ['AR/VR', 'C#', 'Unity', 'hardware'],
    siteUrl: 'https://sites.google.com/cornell.edu/cs5678-2020sp-projects/home/thermics',
    sourceCodeUrl: 'https://github.com/at669/cs5678'
  },
  {
    title: 'Let\'s Gogh!',
    img: 'assets/img/arvr.png',
    description: 'An Oculus Quest application that takes users into their favorite paintings.',
    categories: ['AR/VR', 'C#', 'Unity'],
    siteUrl: 'https://sites.google.com/cornell.edu/cs5650-projects-2019/projects/lets-gogh?authuser=0',
    sourceCodeUrl: 'https://github.com/at669/project-2019-g01-let-s-gogh'
  },
  {
    title: 'Cluck Cluck Moose',
    img: 'assets/img/ccm.png',
    description: 'A mobile chicken-stacking RPS game with lots of bad puns. Now on the Play Store!',
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
    img: 'assets/img/osam.jpg',
    description: 'A data arbiter to manage the LiDAR emulator\'s rx/tx transactions.',
    categories: ['FPGA', 'C/C++', 'HDL', 'Python'],
    siteUrl: 'https://sspd.gsfc.nasa.gov/restore-L.html'
  }
  // {
  //   title: 'CU Solar Boat',
  //   img: 'assets/img/cusb.png',
  //   description: 'The motor control & telemetry systems for a solar-powered speedboat.',
  //   categories: ['Python', 'hardware'],
  //   // siteUrl: 'http://cusolarboat.org/'
  //   siteUrl: 'https://www.facebook.com/CUsolarboat'
  // }
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
