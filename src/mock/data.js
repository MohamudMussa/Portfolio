import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'newlogo.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jar.PNG',
    title: 'Inventory Management System',
    info: 'For this project I created an Inventory management system written in Java. Using GCP to host a MySQL database, this project aimed at creating a system that can manipulate data on the cloud by allowing users to create, update, request the information or delete it. Planning process was thorough and included Agile methodology and the utilisation of JIRA boards. The development included a Java code to run the processes with Junit and Mockito as unit tests. The project included a completed project management board, including user stories, acceptance criteria which were estimations via story points, and prioritisation via MoSCoW methodology. This produced a working inventory-management system capable of tracking & manipulating customer’s information, orders details and item data. I then presented the project and explained the project process in detail.',
    info2: 'Tech Used: Java, GCP, MySQL',
    repo: 'https://github.com/MohamudMussa/ims-demo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Full Stack ToDo List',
    info: 'For this project I created a full-stack web application which allows users to Create, Update and Delete their Tasks from their To-Do List. The structure of this project followed a three-tier architecture: the front end was built using visual studio code and written in JavaScript, HTML and CSS. The backend was built using Spring and written in Java and finally the locally hosted database was built using SQL. The application was then fully tested with Unit, Automated and Integration testing. Finally, it was linked to SonarQube to allow static analysis and improvement of the code.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectThree.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mohamud-mussa-76272083/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MohamudMussa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
