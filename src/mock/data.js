import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Mohamud Mussa', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Mohamud Mussa Portfolio Website', // e.g: Welcome to my website
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
  paragraphOne: `Hi, my name's Mohamud and I'm a full-stack developer who's passionate about design!. I've just finished an intensive 3+ months programming course and I'm now looking for my first dev role. In those three months, I created various real work projects using Java, MERN Stack and many more`,
  paragraphTwo: `I'm a developer, because I'm inspired by the idea of being a better me today than I was yesterday. Put simply, I love to learn and this project is a great example of that! I picked up Gatsby and GraphQl so I could implement a Contentful CMS and I  also worked in some snazzy GSAP animations`,
  paragraphThree: `When I'm not busy building apps, you can find me going on long walks while listening to my favorite podcasts, playing basketball or trying to design side projects `,
  resume: `https://drive.google.com/file/d/0Bxyq39w9wGk2U2pyOGxXaV8yczVNUUhsMzVTQ0psbkdiN293/view?usp=sharing`, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jar.PNG',
    title: 'Inventory Management System',
    info: 'For this project I created an Inventory management system written in Java. Using GCP to host a MySQL database, this project aimed at creating a system that can manipulate data on the cloud by allowing users to create, update, request the information or delete it. Planning process was thorough and included Agile methodology and the utilisation of JIRA boards. The development included a Java code to run the processes with Junit and Mockito as unit tests. The project included a completed project management board, including user stories, acceptance criteria which were estimations via story points, and prioritisation via MoSCoW methodology. This produced a working inventory-management system capable of tracking & manipulating customer’s information, orders details and item data. I then presented the project and explained the project process in detail.',
    info2: 'Tech Used: Java, GCP, MySQL, Junit',
    url: 'https://github.com/MohamudMussa/ims-demo',
    repo: 'https://github.com/MohamudMussa/ims-demo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo.jpg',
    title: 'Full Stack (Java Spring Boot) ToDo List',
    info: 'For this project I created a full-stack web application which allows users to Create, Update and Delete their Tasks from their To-Do List. The structure of this project followed a three-tier architecture: the front end was built using visual studio code and written in JavaScript, HTML and CSS. The backend was built using Spring and written in Java and finally the locally hosted database was built using SQL. The application was then fully tested with Unit, Automated and Integration testing. Finally, it was linked to SonarQube to allow static analysis and improvement of the code.',
    info2: 'Tech Used: Java Spring Boot, JavaScript, HTML, CSS',
    url: 'https://github.com/MohamudMussa/ToDoList-Project',
    repo: 'https://github.com/MohamudMussa/ToDoList-Project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projectThree.jpg',
    title: 'MERN - Cinema Project ',
    info: 'I was part of a team that was tasked to create a full-stack web application using the MERN stack. The data layer was created using MongoDB with the back end being built using Node for the database and Express to construct an API. I tasked with setting up the initial backend using mongoDB and then worked heavily on the frontend which was built using React. I also lead the design aspect of the website, designing our custom images on Photoshop and ensuring that the interface works seamlessly. This web application was developed and implemented with the goal of providing an informative and visually appealing webpage for users to interact with. his project was a great experience for us to successfully incorporate an agile methodology and understand its benefits for application development.',
    info2: 'Tech Used - React, MongoDB, Javascript, Node',
    url: 'https://github.com/MohamudMussa/QACinemasProject',
    repo: 'https://github.com/MohamudMussa/QACinemasProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'coonect.JPG',
    title: 'Connect Communities',
    info: 'I took part in a Hackathon that was aimed at building solutions to tackle homelessness with Crisis. My team came up with an idea that would Connect Communities around the country with a few simple steps. Connect Communitys mission is to connect people with the right community regardless of language barrier or location.The frontend was built using React, TailwindCSS and the backend was deployed with Firebase.We then develop a short and concise presentation to present back to the Crisis team',
    info2: 'Tech Used - React, Firebase, TailwindCSS',
    url: 'https://github.com/deendevelopers/team-10-community-app',
    repo: 'https://github.com/deendevelopers/team-10-community-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'FireBase.JPG',
    title: 'Hosted ToDoList',
    info: `I created a ToDoList webb-app using React for the frontend and Firebase for the backend to host the database. I then styled the components using Material UI to make it look minimalistic. After completing the project, I deployed it using Firebase and it is currently LIVE!`,
    info2: 'Tech Used - React, Firebase, Material UI',
    url: `https://todolist-f6938.web.app/`,
    repo: `https://github.com/MohamudMussa/Hosted-ToDo`, // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mmussa92@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'twitter.com/moremussa',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://www.linkedin.com/in/mohamud-mussa-76272083/',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
