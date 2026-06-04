import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [

    {
        id: 2,
        name: 'EduMentor - GenAI Based Education Platform',
        description: "Collaborated within a 4-member research team to architect a comprehensive educational platform driven by an AI Studybuddy agent, Adaptive Reinforcement Engine, Multi-Explanation Generator, and an AI Avatar Mentor. Engineered a custom Retrieval-Augmented Generation (RAG) pipeline to ingest and algorithmically chunk text into 900-character blocks with 200-character overlaps for optimized vector embeddings. Architected background sentiment analysis engines to continuously track student mood and motivation. Deployed locally hosted Ollama models exclusively across all AI functional components to ensure system security and data privacy, actively eliminating any reliance on external API keys.",
        tools: ['React', 'Node JS', 'Python', 'Ollama', 'RAG', 'Vector Embeddings', 'Hugging Face', 'TensorFlow', 'Google Colab'],
        role: 'Full-Stack AI Developer / Researcher',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 3,
        name: 'HireSphere - Enterprise Job Portal',
        description: "Architected a highly scalable, enterprise-level microservices-based job platform designed to bridge world-class talent with next-gen opportunities. Implemented a strict Database-per-Service architectural pattern across four primary decoupled services: API Gateway, Auth Service, Job Service, and Interview Service. Automated the complete application deployment lifecycle by constructing robust CI/CD pipelines utilizing GitHub Actions, pushing containerized service images directly to Docker Hub, and orchestrating the multi-container environment via Docker Compose on the Microsoft Azure cloud platform. Integrated Firebase and automated security scanning methodologies utilizing Snyk.",
        tools: ['Node JS', 'React', 'Docker', 'Azure', 'Firebase', 'Snyk', 'GitHub Actions'],
        role: 'Backend Architect / Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 4,
        name: 'Smart Presentation Management System',
        description: "Developed a MERN-based system to schedule university presentations efficiently using a smart suggestion feature that avoids conflicts with lectures, venues, and examiner availability.[cite: 1] Included role-based access, real-time validation, and a responsive Tailwind CSS UI.[cite: 1]",
        tools: ['MongoDB', 'Express', 'React', 'Node JS', 'Tailwind CSS', 'JavaScript'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 5,
        name: 'Culinary Skill Sharing Platform',
        description: "Designed and developed a full-stack cooking skill-sharing platform with features like recipe uploads, video sharing, article browsing, user authentication, and modern UI/UX.[cite: 1] Users can easily upload comprehensive cooking tutorials, photos, and dynamic media to share their specific skills.",
        tools: ['React', 'Tailwind CSS', 'Spring Boot', 'Hibernate', 'MySQL'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 6,
        name: 'Cloud-Native Food Ordering System',
        description: "Built a microservices-based food delivery app using Docker and Kubernetes.[cite: 1] Implemented real-time order tracking with Socket.IO, integrated Stripe for payments, Google Maps API for live location tracking, and Twilio for SMS notifications.[cite: 1]",
        tools: ['MERN Stack', 'Docker', 'Kubernetes', 'Socket.IO', 'Stripe', 'Google Maps API', 'Twilio'],
        role: 'Full-Stack Cloud Developer',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 7,
        name: 'Executive Appointment Management System',
        description: "Built a MERN-based appointment scheduling system with conflict resolution logic to manage employee bookings.[cite: 1] Specifically tailored for the CEO to facilitate precise, non-overlapping timeslot bookings for external clients and internal stakeholders. Included real-time validations, dynamic slot management, and a responsive Tailwind CSS interface tailored for executive-level use.[cite: 1]",
        tools: ['MongoDB', 'Express', 'React', 'Node JS', 'Tailwind CSS', 'JavaScript'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin, // Replace with your actual image variable
    },
    {
        id: 8,
        name: 'Gym Management System',
        description: "Developed a comprehensive Gym Management System designed to streamline gym operations. The system allows gym administrators to manage memberships, track attendance, schedule classes, and handle billing. Utilizing React JS for the dynamic and responsive frontend, Node JS and Express JS for the robust backend, and MongoDB for scalable data storage. Integrated Bootstrap to ensure a mobile-friendly interface and used Postman for thorough API testing.",
        tools: ['Express', 'MongoDB', 'Node JS', 'React JS', 'Boostrap'],
        role: 'FullStack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 9,
        name: 'Hotel Reservation Management System',
        description: "Developed a comprehensive hotel reservation management system for Lavendish Leisure Hotels and Resorts (Pvt) Ltd hotel chain, designed exclusively for internal use by hotel staff and administrators. The system features centralized room booking management, real-time room availability tracking, an intuitive interface for managing multiple hotels, and a real-time chat feature powered by Socket.IO to facilitate seamless communication between hotels and administrators. Built using JavaScript, React, Tailwind CSS, MongoDB, Express, Node.js, and Socket.IO, the platform streamlines operations, prevents overbooking, and simplifies data retrieval and analytics across the chain.",
        tools: ['JavaScript', 'Tailwind CSS', 'React', 'MongoDB', 'Express', 'Node.js', 'Socket.io'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 10,
        name: ' EduCode : An Adaptive, Multi-Language Platform for Beginner Programming Education',
        description: "Developed a responsive, web-based platform designed to teach beginner programming concepts across multiple languages, including C, C++, Java, and Python. The platform includes a user-friendly interface, CRUD operations for course management, and supports interactive course content. Leveraged the MERN stack (MongoDB, Express, React, Node.js) for the project, with Tailwind CSS for professional styling. Implemented features such as a dynamic course catalog, user authentication, and admin functionality for managing course content. Designed the platform to offer a seamless learning experience with support for multiple programming languages.",
        tools: ['JavaScript', 'Tailwind CSS', 'React', 'MongoDB', 'Express', 'Node.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 11,
        name: 'Hospital Management System',
        description: "Developed a Hospital Management System to streamline patient care and administrative processes. The system, built with JavaScript, MongoDB, and React JS enables hospital staff to manage patient records, schedule appointments, and generate reports. Integrated Tailwind CSS for a user-friendly interface, with features such as patient registration, billing, and prescription management. The system aims to enhance operational efficiency and improve patient care by providing a centralized platform for managing hospital activities.",
        tools: ['JavaScript', 'Tailwind CSS', 'React', 'MongoDB', 'Express', 'Node.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 12,
        name: 'AI-Powered Chatbot for Hotel Management System',
        description: "Designed and deployed an AI-powered chatbot for Lavendish Leisure Hotels and Resorts (Pvt) Ltd, seamlessly integrated into the hotel management system. Built using Botpress, the chatbot provides customers with an intuitive platform to easily book their stay, check room availability, and receive quick responses to inquiries. The chatbot enhances customer engagement and streamlines the booking process by offering a 24/7 automated assistant. The solution is deployed and fully operational, leveraging advanced natural language processing (NLP) capabilities for accurate and efficient interactions.",
        tools: ['Botpress', 'CSS', 'HTML', 'WhatsApp API', 'Meta API'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 13,
        name: 'Online Event Management System',
        description: "Developed an Online Event Management System to facilitate seamless event planning and coordination. This web-based application, created using Java, HTML, CSS, JSP Servlet, and SQL, allows organizers to schedule events, manage attendee registrations, and provide real-time updates. The system includes features such as automated email notifications, event calendars, and participant management, hosted on an Apache Tomcat server.",
        tools: ['HTML', 'CSS', 'JSP Servelet', 'MySql', 'Java'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 14,
        name: 'Automated Vehicle Parking System',
        description: "Engineered an Automated Vehicle Parking System designed to optimize parking space usage and enhance user convenience. The system, built with HTML, CSS, JavaScript, PHP, and MySQL, automates parking spot allocation, tracks real-time occupancy, and handles payment processing. Features include user account management, booking history, and dynamic parking availability display, aimed at reducing parking-related hassles and improving user experience.",
        tools: ['HTML', 'CSS', 'PHP', 'MySql', 'JavaScript'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 15,
        name: 'Simple Mobile Game',
        description: 'Designed and implemented a Simple Mobile Game using Kotlin and Android Studio. The game focuses on engaging users with interactive gameplay, incorporating scoring mechanisms, progressive difficulty levels, and vibrant graphics. The project emphasized user engagement and experience, providing an entertaining platform for users to test their skills and compete for high scores.',
        tools: ['Kotlin', 'Tailwind CSS', 'Android Studio', 'SQLite'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel 
    },
    {
        id: 16,
        name: 'Solar System Selling App',
        description: "Developed a Solar System Selling App to facilitate the purchase and installation of solar systems. The app, built with React Native, Express, and Node.js, allows users to browse available solar systems, request quotes, and schedule installations. Integrated Tailwind CSS for a modern and responsive UI, with user authentication and admin functionalities for managing products and orders. The app aims to promote renewable energy solutions and simplify the process of adopting solar power",
        tools: ['React-Native', 'Tailwind CSS', 'Appwrite', 'Express', 'Node.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    },
    {
        id: 17,
        name: 'Task App',
        description: 'Created a Task Management Mobile Application aimed at enhancing productivity for users. The app, built with Kotlin and Android Studio, features a clean and intuitive interface for adding, updating, deleting, and categorizing tasks. It includes notifications and deadline reminders to ensure users stay on top of their to-do lists. Data is stored locally using SQLite, providing quick access and offline functionality.',
        tools: ['Kotlin', 'Tailwind CSS', 'Android Studio', 'SQLite'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel  
    },
    
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },