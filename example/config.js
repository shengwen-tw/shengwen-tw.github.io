module.exports = {
  pathPrefix: '/',
  siteUrl: 'https://shengwen-tw.github.io',
  title: 'Sheng-Wen Cheng (鄭聖文)',
  description: 'Sheng-Wen Cheng\'s Page',
  author: 'Sheng-Wen Cheng',
  authorAlternative: '鄭聖文',
  introduction: [
'Hi, I’m Sheng-Wen (Colin) Cheng, a system software engineer with the [Platform Security Controller (PSC)](https://docs.nvidia.com/jetson/archives/r34.1/DeveloperGuide/text/AR/BootArchitecture/JetsonAgxOrinBootFlow.html) team at NVIDIA, where I develop secure bootloader software to ensure system integrity during the boot process.',

'Outside of my role at NVIDIA, I specialize in robotics, embedded systems, real-time operating systems (RTOS), and hardware-software integration. I hold a master’s degree in Robotics from [National Yang Ming Chiao Tung University](https://www.nycu.edu.tw/nycu/en/index), where I conducted research in the [Networked Control Robotics Lab (NCRL)](https://en.ncrl.lab.nycu.edu.tw/) under the supervision of [Dr. Teng-Hu Cheng](https://me.nycu.edu.tw/en/people/teacher/Teng-Hu-Cheng-18641258). My work focused on developing a quadrotor flight control system using nonlinear control and sensor fusion algorithms. This system was later licensed to the [Taiwan Space Agency (TASA)](https://www.tasa.org.tw/en-US) for scientific research purposes.',

'I am also an active contributor to open-source projects and have presented my work at international conferences, including top-tier venues such as the [Embedded Open Source Summit (EOSS)](https://events.linuxfoundation.org/embedded-open-source-summit/). My technical experience includes the design and implementation of unmanned aerial vehicles (UAVs), RTOS, and virtual machines.',
  ],
  avatar: 'profile.png',
  professions: [
    'Software Engineer',
    'Robotics Engineer'
  ],
  tocMaxDepth: 2,
  excerptMaxLength: 500,
  birthday: 'Aug 12, 1997',
  location: 'Taiwan',
  email: 'shengwen.c@utexas.edu',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  /*disqusScript: process.env.DISQUS_SCRIPT
    || 'https://tc-imba.disqus.com/embed.js',*/
  pages: {
    home: '/',
    posts: 'posts',
    contact: 'contact',
    resume: 'resume',
    tags: 'tags',
    research: 'research',
  },
  social: [
    {
      url: '/resume.pdf',
      icon: ['ai', 'cv'],
    }, {
      url: 'https://github.com/shengwen-tw',
      icon: ['fab', 'github'],
    }, {
      url: 'https://www.linkedin.com/in/shengwen-tw/',
      icon: ['fab', 'linkedin'],
    }, {
      url: 'https://scholar.google.com.tw/citations?user=RCZ5dUgAAAAJ&hl=zh-TW',
      icon: ['fab', 'google-scholar'],
    }
  ],
  // facebook: 'https://www.facebook.com/rolwin.monteiro',
  // instagram: 'https://www.instagram.com/reevan100/',
  // rss: '/rss.xml',
  /*wakatime: {
    username: 'tcimba',
    activity: '7add4047-08f9-4da8-b649-aa114503678f',
    language: '460a84ab-722a-4b80-b896-cabaa13ad7eb',
    editor: 'd851639a-28d8-4884-949f-d338a858f7e9',
    os: 'caf7d0d1-8fd2-4595-a991-363c8583fea9',
  },*/
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT
    || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-ZK3P43DY6M',
  education: [
    /*{
      date: 'Aug 2025 - Present',
      icon: 'university',
      title: 'M.S. in Computer Science',
      location: 'The University of Texas at Austin, USA',*/
    /*}, {
      date: 'Sept 2022 - Mar 2024',
      icon: 'university',
      title: 'Ph.D. Student in Electrical Engineering',
      location: 'National Taiwan University, Taiwan',
    },*/ {
      date: 'Sep 2019 - Nov 2021',
      icon: 'university',
      title: 'M.S. in Robotics',
      location: 'National Yang Ming Chiao Tung University, Taiwan',
    }, {
      date: 'Sep 2015 - June 2019',
      icon: 'university',
      title: 'B.E. in Computer Science and Information Engineering',
      location: 'Providence University, Taiwan',
    }],
  interests: [
    {
      icon: ['fas', 'fa-code'],
      title: 'Robotics, Control, and Estimation',
    }, {
      icon: 'layer-group',
      title: 'Machine Learning',
    }, {
      icon: ['fas', 'fa-microchip'],
      title: 'Embedded/Real-time Systems',
    }, {
      icon: ['fab', 'linux'],
      title: 'Open Source Software',
    }],
    talks: [
        {
          title: 'International Conferences',
          data: [
            {
  	      title: 'EOSS 2024: Crafting a Vision-Aided Software Stack for UAV [[Video]](https://www.youtube.com/watch?v=xTfPdS7LA34) [[Slides]](https://drive.google.com/file/d/1aXPNn7SbN5oBkVzIqHo13JiRVv_63CJi/view?usp=sharing)',
  	      location: 'Seattle, Washington, USA',
	      date: 'Apr 16 2024',
            }
          ],
        }, {
        title: 'Domestic Conferences',
        data: [
          {
            title: 'MOPCON 2024 Keynote Speech: Trends in Machine Learning for Unmanned Aerial Vehicle Applications [[Slides]](https://drive.google.com/file/d/1UmSeU8Y63s4cASBFNWM_zi5ll2J9EIJx/view?usp=sharing)',
	    location: 'Kaohsiung, Taiwan',
	    date: 'Oct 26 2024',
          }, {
            title: 'COSCUP 2024: Creating a Linux-like Real-Time Operating System for Quadrotor Drones [[Video]](https://www.youtube.com/watch?v=Ft4jBW732nU) [[Slides]](https://drive.google.com/file/d/16S8ZRC-lhT15CXwWIy-RIIWXl5Ertqo5/view)',
	    location: 'Taipei, Taiwan',
	    date: 'Aug 3 2024',
          }, {
            title: 'COSCUP 2023: Tenok - Build a Real-Time Operating System for Robotics [[Video]](https://www.youtube.com/watch?v=w87l__ShgVw) [[Slides]](https://drive.google.com/file/d/1p8YJVPVwFAEknMXPbXzjj0y0p5qcqT2T/view)',
	    location: 'Taipei, Taiwan',
	    date: 'Jul 29 2023',
          },
        ],
      }, {
        title: 'Invited Talks',
          data: [
          {
            title: 'PEGATRON Corporation: Trends and Lessons Learned in Deep Learning and Generative AI Applications for UAV',
  	    location: 'Taipei, Taiwan',
	    date: 'Dec 19 2024',
          }
        ],
      },
    ],
    experience: [
      {
      title: 'Conference Papers',
      data: [
        {
	  title: 'S.-W. Cheng and T.-H. Cheng, “Data-Driven Estimation of Quadrotor Motor Efficiency via Residual Minimization,” manuscript in preparation.',
	  location: '',
	  date: '',
        }, {
          title: 'S.-W. Cheng and Y.-H. Huang, “A Computationally Efficient GNSS/INS Design of Multirotor based on Error-state Kalman Filter,” 2023 62nd Annual Conference of the Society of Instrument and Control Engineers of Japan (SICE), Tsu, Japan, 2023. [[URL]](https://ieeexplore.ieee.org/abstract/document/10354209)',
	  location: '',
	  date: '',
        }, {
          title: 'S.-W. Cheng and H.-A. Hung, “Robust State-Feedback H∞ Control of Quadrotor,” 2022 International Automatic Control Conference (CACS), Kaohsiung, Taiwan, 2022. [[URL]](https://ieeexplore.ieee.org/document/9969787)',
	  location: '',
	  date: '',
        }, {
          title: 'S.-W. Wang, S.-W. Cheng, and C.-C. Huang, “Puyuma: Linux-based RTOS Experimental Platform for Constructing Self-Driving Miniature Vehicles,” Science and Information Conference (SAI), London, United Kingdom, 2018. [[URL]](https://link.springer.com/chapter/10.1007/978-3-030-01174-1_75)',
	  location: '',
	  date: '',
        },
      ],
    },
  ],
  awards: [
    {
      date: 'Feb 2024 - Present',
      title: 'System Software Engineer at NVIDIA',
    }, {
      date: 'Sep 2023 - Feb 2024',
      title: 'Software Engineer at GallopWave',
    }, {
      date: 'Sep 2018 - Apr 2021',
      title: 'Embedded System Engineer at Avilon Intelligence',
    },
  ],
  tagColors: [
    'magenta', 'red', 'volcano', 'orange', 'gold',
    'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple',
  ],
  tags: [
    {
      id: 'javascript',
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    {
      id: 'rxjs',
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, for asynchronous operations.',
      color: '#eb428e',
    },
    {
      id: 'typescript',
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    {
      id: 'reactjs',
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    {
      id: 'gatsby',
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    {
      id: 'html',
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    {
      id: 'css',
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    {
      id: 'python',
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },
  ],
};
