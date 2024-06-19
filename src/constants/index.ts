import { backend, binaryTrees, cp, docker, uber,Azure_Migration,CICD,superbowl, frontend,sf, kafka, object, linkedList, redis,Administrator,pd,iot,pydata } from '../assets';
import { python,cpp,c,salesforce, sql, django, css, git, html,azure,Ssms,PowerBi,jenkins,kubernetes,vuejs, javascript, mongodb, nodejs, reactjs, tailwind, typescript, } from '../assets';

export const resumeLink = "https://drive.google.com/file/d/1X-OYcOw_suhzjxOhxSub1Z5I2z4A7J47/preview";

export const aboutMe = `
I am Vyshnavi Basude, a dedicated Software Engineer with a Master’s in Computer Science from the University of New Haven. With professional experience at <strong>Accenture</strong>, I have honed my skills in both front-end and back-end development, particularly in <strong>React, Python, .Net</strong>, and <strong>SQL</strong>. My expertise extends to <strong>JavaScript, TypeScript</strong>, and cloud technologies like <strong>AWS</strong>, allowing me to build high-performance, scalable web applications.

In addition to my development skills, I have extensive experience with <strong>Salesforce</strong>, where I have utilized <strong>Apex, Visualforce</strong>, and <strong>Lightning Web Components</strong> to build customized solutions that enhance business processes. I have successfully implemented various Salesforce projects that required seamless integration between front-end and back-end systems, demonstrating my ability to manage complex requirements and deliver robust, efficient solutions. My passion for continuous learning has driven me to stay updated with the latest industry trends and technologies, which I actively incorporate into my projects.

I am a proactive problem solver and an avid learner, always eager to embrace new challenges. My collaborative spirit and excellent communication skills have consistently contributed to successful project outcomes. I take pride in my ability to translate complex requirements into functional, user-friendly solutions, and I am excited to bring my unique blend of skills and enthusiasm to impactful projects in the tech industry.
`;


export const skills = [
    {title: "Full Stack Developer ", icon: cp}, 
    {title: "FrontEnd Developer", icon: frontend}, 
    {title: "Backend Developer", icon: backend}, 
    {title: "Salesforce Developer", icon: sf}
];

export const frameworks = [
    {title: 'React', icon: reactjs, invert: false }, 
    {title: 'Node.js', icon: nodejs, invert: true }, 
    {title: 'Tailwind', icon: tailwind, invert: false }, 
    {title: 'vuejs', icon: vuejs, invert: false }, 
    {title: 'Django', icon: django, invert: true }, 
    {title: 'Git', icon: git, invert: false },
    {title: 'Docker', icon: docker, invert: false }, 
    {title: 'Kafka', icon: kafka, invert: true }, 
    {title: 'azure', icon: azure, invert: false }, 
    {title: 'Ssms', icon: Ssms, invert: false }, 
    {title: 'PowerBi', icon: PowerBi, invert: false }, 
    {title: 'jenkins', icon: jenkins, invert: false }, 
    {title: 'kubernetes', icon: kubernetes, invert: false }, 
    
]

export const languages = [
    {title: 'Python', icon: python, invert: false }, 
    {title: 'C++', icon: cpp, invert: false }, 
    {title: 'C', icon: c, invert: false }, 
    {title: 'Salesforce', icon: salesforce, invert: false }, 
    {title: 'HTML', icon: html, invert: false }, 
    {title: 'CSS', icon: css, invert: false }, 
    {title: 'Javascript', icon: javascript, invert: false }, 
    {title: 'TypeScript', icon: typescript, invert: false }, 
    {title: 'SQL', icon: sql, invert: true }, 
    {title: 'MongoDB', icon: mongodb, invert: false },
    {title: 'Redis', icon: redis, invert: false }
];

export const experience = [
    {
        title: 'Acccenture', 
        description: 'In my role, I designed and developed technologies and software products to meet business requirements, ensuring seamless deployment and addressing defects swiftly. I developed Apex web services, maintained sandboxes, and created an Ant-based deployment application. I integrated web services, utilized Data Loader, and designed comprehensive test plans. I led the development of Lightning Web Components, improving user experiences and system performance. Additionally, I developed over 50 self-service software products using React, JavaScript, HTML5, TypeScript, and other technologies, enhancing team productivity by 25% and reducing merge conflicts by 40% through CI/CD pipeline improvements.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb, salesforce],
        link: 'https://accenture.com',
        source: ""
    },
    {
        title: 'Capgemini', 
        description: 'I transformed a client investment management UI platform with React.js, resulting in a more engaging and efficient system. By redesigning the UI architecture using Redux and Flux, I significantly enhanced response times and user satisfaction. I also implemented continuous integration and deployment pipelines, which streamlined team workflows. Additionally, I optimized Git strategies to minimize merge conflicts and improve overall productivity.', 
        stack: [reactjs, tailwind, typescript, nodejs, mongodb],
        link: 'https://capgemini.com',
        source: ""
    },
    {
        title: 'University of New Haven', 
        description: 'I have extensive experience as a Graduate Teaching Assistant, where I specialized in front-end technologies and Unix. In this role, I provided comprehensive support to students by conducting interactive lab sessions, developing instructional materials, and offering one-on-one guidance. My responsibilities included teaching HTML, CSS, JavaScript, and Unix commands, helping students understand complex concepts, and assisting with their projects and assignments. This experience has honed my ability to communicate technical information effectively and fostered a deep understanding of front-end development and Unix systems.', 
        stack: [html, css, typescript],
        link: 'https://www.newhaven.edu/index.php',
        source: ""
    },
    {
        title: 'My Portfolio', 
        description: 'My Portfolio', 
        stack: [html,css,javascript,typescript],
        link: '',
        source: "https://github.com/VyshnaviBasude/My_portfolio"
    },
]

export const projects = [
    {
        title: "Super Bowl Winners ",
        description: "This project aims to design and develop a single-page web application (SPA) using modern web technologies. The stack includes Vue.js for the front end, Node.js for the back end, and MongoDB for the database. The application will provide a seamless user experience with dynamic content rendering and efficient data handling.",
        stack: [vuejs,nodejs,mongodb],
        link: 'https://superbowlwinners.netlify.app/',
        source: "https://github.com/VyshnaviBasude/Super_Bowl_Frontend",
        media: superbowl
    },
    {
        title: "Uber Data Analysis Using Machine Learning Algorithms",
        description: "I leveraged data analytics with NLP and machine learning to enhance Uber's services by identifying patterns in their data, significantly boosting operational efficiency. Among various models, ADA Boost stood out, achieving nearly 98% accuracy in predicting Uber and Lyft sales. Continuous validation ensured our models remained precise and effective.",
        stack: [python],
        source: "https://github.com/VyshnaviBasude/Team-TrailBlazers",
        media: uber
    },
    {
        title: "Object Detection using Deep Learning",
        description: "I developed a system for identifying and labeling objects within images, videos, and live footage, achieving 95% accuracy in image classification, 90% precision in segmentation, and 92% accuracy in object localization. By utilizing deep neural networks, I achieved the quickest and most accurate results for both single and multiple object detection, leveraging the automated learning capabilities of CNNs with minimal manual engineering.",
        stack: [javascript, html, css, git],
        source: "",
        media: object
    },
    {
        title: "Azure Migration",
        description: "The project implements an Azure Data Engineering pipeline using Azure Data Factory, Azure Synapse Analytics, Azure Databricks, and Power BI to migrate an on-premise SQL Server database to the cloud. It includes data transformation, loading, and visualization, emphasizing automation and security.",
        stack: [azure, Ssms, python, PowerBi],
        source: "",
        media: Azure_Migration
    },
    {
        title: "Building CI/CD Pipeline",
        description: "The project implements a CI/CD pipeline using Jenkins, Docker, Maven, SonarQube, and Kubernetes, with a focus on Argo CD for lifecycle management. It includes setting up and configuring each tool, building and analyzing a Java application, and automating deployment.",
        stack: [jenkins, docker, kubernetes, git],
        source: "",
        media: CICD
    },

]
export const achievements = [
    {title: "Certified Salesforce Administrator", icon: Administrator,link: "https://www.salesforce.com/trailblazer/profile"}, 
    {title: "Certified Salesforce Platform Developer I", icon: pd,link: "https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=IAFDfQsllwSM52m5MtdGwPChPZ5D+RKV0mwSiGuweKj9F3Ao5j5/jvj/SPUn3MkY"}, 
    {title: "Introduction to Internet of Things", icon: iot,link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS65S51470349191052891"}, 
    {title: "Data Structures in Python", icon: pydata,link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL20CS26S1PC933737"}
];