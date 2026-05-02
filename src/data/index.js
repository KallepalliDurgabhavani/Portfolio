// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to customise your portfolio content
// ─────────────────────────────────────────────────────────────

export const personal = {
  name:       'Kallepalli Durga Bhavani',
  shortName:  'Bhavani Kallepalli',
  initials:   'KDB',
  role:       'Software Developer & Java Developer & AWS Cloud Engineer',
  tagline:    'Software Developer · Open to Opportunities',
  location:   'Andhra Pradesh, India',
  email:      'bhavanikallepalli93@gmail.com',          // ← replace
  github:     'https://github.com/KallepalliDurgabhavani', // ← replace
  linkedin:   'https://linkedin.com/in/durga-bhavani-kallepalli-26ba3a25b/', // ← replace
  resumeUrl:  'https://adityagroup-my.sharepoint.com/:b:/g/personal/22mh1a05h9_acoe_edu_in/IQC4IsPi6BeHTq6S_ZIc7jvvAUiQnOaH2cnkEfb40jYRqAw?e=8WcsfY',                     // place resume.pdf in /public
  bio: [
    "I'm a frontend developer with a strong foundation in React, Next.js, and modern CSS. My work sits at the intersection of engineering precision and visual storytelling — I care deeply about how an interface looks, but equally about how it performs and how it feels to every user.",
    "Currently completing my B.Tech in Computer Science, I've been building production-ready projects that tackle real-world problems: dashboards, interactive data tools, and responsive design systems. I'm fluent in Tailwind CSS, Framer Motion, and GSAP for animation, and I follow accessibility best practices in everything I ship.",
    "I'm actively looking for opportunities to contribute to a team that values quality engineering and thoughtful design. If that sounds like you, I'd love to connect.",
  ],
  stats: [
    { num: '3+',  label: 'Projects' },
    { num: '8+',  label: 'Technologies' },
    { num: '5+',  label: 'Certifications' },
    { num: '2026',label: 'Graduate' },
  ],
  education: [
    'B.Tech Computer Science',
    'Expected 2026',
    'Andhra Pradesh, IN',
  ],
  interests: ['Motion Design', 'Component Systems', 'Accessibility'],
}

export const skills = [
  { name: 'HTML5',          icon: 'H',  pct: 95, cat: 'frontend'  },
  { name: 'CSS3',           icon: 'C',  pct: 92, cat: 'frontend'  },
  { name: 'JavaScript',     icon: 'JS', pct: 88, cat: 'frontend'  },
  { name:'Java',            icon: 'J',  pct: 80, cat: 'Programming'},
  {name:'c++',             icon: 'C++',pct: 78, cat: 'Programming'},
  {name:'C',              icon: 'C',  pct: 75, cat: 'Programming'},
  {name:'OOPS',           icon: 'OOP',pct: 80, cat: 'Core Concepts'},
  {name:'Data Structures', icon: 'DS', pct: 78, cat: 'Core Concepts'},
  {name:'Algorithms',      icon: 'Algo',pct: 70, cat: 'Core Concepts'},
  {name:'DBMS',            icon: 'DB', pct: 65, cat: 'Database'  },
  {name:'SQL',             icon: 'SQL',pct: 68, cat: 'Database'  },
  {name:'MongoDB',          icon: 'M',  pct: 60, cat: 'Database'  },
  {name:'software development lifecycle', icon: 'SDLC', pct: 75, cat: 'Core Concepts'},
  {name:'Aws Cloud',         icon: '☁',  pct: 70, cat: 'Cloud'     },
  {name:'postman',            icon: 'P',  pct: 68, cat: 'tooling'   },
  {name:'spring boot',          icon: 'SB',  pct: 65, cat: 'Framework' },
  {name:'Linux Basics',          icon: 'L',  pct: 60, cat: 'tooling'   },
  { name: 'Git & GitHub',   icon: 'G',  pct: 85, cat: 'tooling'   },
  { name: 'Vercel',         icon: '▼',  pct: 78, cat: 'tooling'   },
  { name: 'Netlify',        icon: 'N',  pct: 74, cat: 'tooling'   },
  
 
]

export const skillCategories = ['all', 'frontend', 'framework', 'tooling','Programming','Core Concepts','Database','Cloud']

export const projects = [
  {
    num:   '01',
    title: 'Personal Portfolio Website',
    sub:   'Frontend · Animation · Deployment',
    desc:  'Fully responsive animated portfolio built with React and Framer Motion. Includes parallax scrolling, on-scroll reveals, and a Lighthouse score of 90+ across all categories.',
    tags:  ['React', 'Framer Motion', 'Tailwind CSS', 'Vite', 'Vercel'],
    github: 'https://github.com/', // ← replace with real repo
    demo:   '',
  },
  {
    num:   '02',
    title: 'HEART',
    sub:   'Health Alert And Realtime Tracking System',
    desc:  'A real-time health monitoring web application that tracks user vitals like heart rate, steps, and sleep using wearable APIs and provides intelligent health recommendations.',
    tags:  ['Next.js', 'TypeScript', 'CSS Modules', 'REST API','JavaScript'],
    github: 'https://github.com/KallepalliDurgabhavani/Heart_project', // ← replace
    demo:   '',
  },
  {
    num:   '03',
    title: 'Bus Ticket Booking System',
    sub:   'Data Visualisation · API Integration',
    desc:  'An online bus ticket booking system that allows users to search routes, select seats, and book tickets with a user-friendly interface.',
    tags:  ['Java', 'Spring Boot', 'MySQL', 'Thymeleaf'],
    github: 'https://github.com/KallepalliDurgabhavani/Bus_Ticket_Booking', // ← replace
    demo:   '',
  },
]

export const certifications = [
  { icon: '☁', title: 'AWS Developer Associate',       org: 'Amazon Web Services',                    year: '2025' },
  { icon: '', title: 'Redhat certified system administrator',                      org: 'Redhat',                         year: '2024' },
  { icon: '', title: 'IT specialist Certification in HTML and CSS',    org: 'PearsonVue',                         year: '2024' },
  { icon: '', title: 'IT specialist Certification in Python',               org: 'PearsonVue',                  year: '2025' },
  { icon: '',  title: 'IT specialist Certification in JAVA',       org: 'PearsonVue',     year: '2025' },
  
]
