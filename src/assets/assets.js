import my_pic from './my_pic.jpg';
import computer from './computer.svg';
import work_station from './work_station.svg';
import black_station from './black_stattion.svg';
import color_station from './color_station.svg';
import pic from './pic.webp';
import homepage from './homepage.png';
import portfolio_image from './portfolio_image.PNG';
import student_dashboard from './student_dashboard.PNG';


export const images = {
  my_pic,
  computer,
  work_station,
  black_station,
  color_station,
  pic,
  homepage,
  portfolio_image,
};

export const educationList = [
  {
    id: 1,
    year: '2005- 2010',
    school: 'University Of Portharcourt',
    degree: 'B.eng',
    course: 'Electrical/ Electronics Engineering',
  },
  {
    id: 2,
    year: '2023-2024',
    school: 'Obidient Tech Space',
    degree: 'Certificate of Completion',
    course: 'Frontend Development',
  },
];

export const experienceList = [
  {
    id: 1,
    year: '2024- Current',
    company: 'Freelance',
    location: 'Port Harcourt, Rivers State Nigeria',
    position: 'Frontend Developer',
    role: 'Utilized HTML, CSS, JavaScript and React to create visuially and responsive web pages.',
  },
  {
    id: 2,
    year: '2018-2022',
    company: 'Genesis Cinemas ',
    location: 'Port Harcourt, Rivers State Nigeria',
    position: 'IT Support/Lead Projectionist',
    role: 'Set up and maintained office PCs,network and mobile devices.Technical support for staff. ',
  },
  {
    id: 3,
    year: '2013-2017',
    company: 'Generalz Ent Services',
    location: 'Port Harcourt, Rivers State Nigeria',
    position: 'IT support',
    role: 'Set up and maintained office PCs,network and mobile devices.Technical support for staff ',
  },
];

export const menuList = [
  {
    id: 1,
    list: 'Experience',
  },
  {
    id: 2,
    list: 'Education',
  },
  {
    id: 3,
    list: 'Skill',
  },
  {
    id: 4,
    list: 'About Me',
  },
];

export const skillsList = [
  {
    id: 0,
    skill: 'HTML',
    icon: 'bx bxl-html5',
  },
  {
    id: 1,
    skill: 'CSS',
    icon: 'bx bxl-css3',
  },
  {
    id: 2,
    skill: 'JavaScript',
    icon: 'bx bxl-javascript',
  },
  {
    id: 3,
    skill: 'React Js',
    icon: 'bx bxl-react',
  },
  {
    id: 4,
    skill: 'Tailwind',
    icon: 'bx bxl-tailwind-css',
  },
  {
    id: 5,
    skill: 'Bootstrap',
    icon: 'bx bxl-bootstrap',
  },
];

export const aboutMeList = [
  {
    id: 0,
    name: 'Name',
    span: 'Stephen Otoni',
  },
  {
    id: 1,
    name: 'Gender',
    span: 'Male',
  },
  // {
  //   id: 2,
  //   name: 'Age',
  //   span: '38 years old',
  // },
  {
    id: 3,
    name: 'Status',
    span: 'Single',
  },
  {
    id: 4,
    name: 'City',
    span: 'Port Harcourt',
  },
  {
    id: 5,
    name: 'Nationality',
    span: 'Nigerian',
  },
  {
    id: 6,
    name: 'Experience',
    span: '1 Year',
  },
  {
    id: 7,
    name: 'Full Time',
    span: 'Available',
  },
  {
    id: 8,
    name: 'Freelance',
    span: 'Available',
  },
  {
    id: 9,
    name: 'Phone',
    span: '+234 808 590 9201',
  },
  {
    id: 10,
    name: 'Email',
    span: 'otonistephendev@gmail.com',
  },
];

export const portfolioList = [
  {
    id: 1,
    name: 'Guidelily',
    type: 'Frontend Project',
    desc: 'Guidelily is a platform that provides current trend on Artificial Intelligence and Blockchain',
    tech: 'React, CSS3, JavaScript',
    live: 'Live Project',
    git: 'GitHub Repository',
    live_url:'https://project-lara.netlify.app/',
    git_url:'https://github.com/otonistephen/project-lara.git',
    icon_arrow: 'bx bx-arrow-back',
    icon_git: 'bx bxl-github',
    port_img: homepage,
  },
  {
    id: 2,
    name: 'Portfolio Website',
    type: 'Frontend Project',
    desc: 'My portfolio website show relevant skills , education, experience and projects etc  ',
    tech: 'React, CSS3, JavaScript',
    live: 'Live Project',
    git: 'GitHub Repository',
    live_url:'https://stephenotoni-portfolio.netlify.app/',
    git_url:'https://github.com/otonistephen/portfolio-website.git',
    icon_arrow: 'bx bx-arrow-back',
    icon_git: 'bx bxl-github',
    port_img: portfolio_image,
  },
];

export const contactList = [
  {
    id: 0,
    contact_name: 'Phone',
    contact_icon: 'bx bxs-phone',
    contact_value: '234 808 590 9201',
  },
  {
    id: 1,
    contact_name: 'Email',
    contact_icon: 'bx bxs-envelope',
    contact_value: 'otonistephendev@gmail.com',
  },
  {
    id: 2,
    contact_name: 'Address',
    contact_icon: 'bx bxs-map',
    contact_value: '32 First Avenu Egbelu PH',
  },
];

export const icons = [
  {
    menu_icon: 'bx bx-menu',
    close_icon: 'bx bx-x',
  },
];
