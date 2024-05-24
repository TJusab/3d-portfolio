import {
    mobile,
    backend,
    creator,
    fithub,
    assetplus,
    questbit,
    matrix,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    java,
    python,
    bell,
    ericsson,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "AI/ML Developer",
      icon: backend,
    },
    {
      title: "3D artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Bell Media - Sports Data Team",
      icon: bell,
      iconBg: "#ECCFD1",
      date: "May 2023 - August 2023",
      points: [
        "Architected and crafted a scheduling tool using Java Spring Boot seamlessly integrating SQL databases to store and retrieve user information and scheduling data.",
        "Collaborated closely with a senior engineer on the development of microservices in TypeScript, introducing a modern approach to decouple the existing monolithic stack. These microservices deployed as AWS Lambda functions, revolutionized the processing of game and player data by showcasing adaptability and innovation, resulting in enhanced performance and stability.",
        "Automated unit testing using Jest and Vitest significantly improving the software’s reliability and minimizing errors.",
        "Integrated essential third-party tools such as SonarQube into the CI/CD pipelines, contributing to elevated code quality and maintainability across multiple projects.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Ericsson - POC Innovation Team",
      icon: ericsson,
      iconBg: "#ECCFD1",
      date: "May 2024 - August 2024",
      points: [

      ]
    }
  ];
  
  const projects = [
    {
      name: "FitHub",
      description:
      "Full-stack application with fully functional backend and database that allows customers, instructors and owners of a sport center to register for courses, manage employees (and more!) according to their specific accounts permissions.",
      tags: [
        {
          name: "vue",
          color: "green-text",
        },
        {
          name: "springboot",
          color: "blue-text",
        },
        {
          name: "postgresql",
          color: "orange-text",
        }
      ],
      image: fithub,
      source_code_link: "https://github.com/McGill-ECSE321-Winter2024/FitHub",
    },
    {
      name: "AssetPlus",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "java",
          color: "blue-text",
        },
        {
          name: "java-fx",
          color: "pink-text",
        },
      ],
      image: assetplus,
      source_code_link: "https://github.com/F2023-ECSE223/ecse223-group-project-p12",
    },
    {
      name: "Matrix Calculator",
      description:
        "Java applet that allows users to find the solution of 2x2 and 3x3 matrices as well as eigenvalues. The application " +
        "also displays a graphical solution of the entered inputs.",
      tags: [
        {
          name: "java",
          color: "blue-text",
        },
        {
          name: "java-fx",
          color: "pink-text",
        },
      ],
      image: matrix,
      source_code_link: "https://github.com/sarah-steir/IP_2022",
    },
    {
      name: "QuestBit (in progress)",
      description:
        "This is a mobile app (IOS / Android) that helps people living or working in the same space to assign common tasks and chores to each other.",
      tags: [
        {
          name: "java",
          color: "blue-text",
        },
        {
          name: "react-native",
          color: "purple-text",
        },
        {
          name: "firebase",
          color: "orange-text",
        }
      ],
      image: questbit,
      source_code_link: "https://github.com/TJusab/QuestBit",
    },
  ];
  
  export { services, technologies, experiences, projects };