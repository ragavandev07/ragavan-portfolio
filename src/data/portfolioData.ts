import type { Skill, Experience, Project, ContactInfo } from '../types';

export const personalInfo = {
    name: 'Ragavan.S',
    role: 'Software Engineer',
    tagline: 'Specializing in high-performance full-stack development with React, React Native, and Node.js.',
    yearsOfExperience: '3+',
    bio: 'Full Stack Web and Mobile Developer with 3+ years of experience specializing in React.js, React Native, Node.js, and modern frontend architecture. Experienced in building scalable admin dashboards, real-time chat applications using WebSocket (Socket.io), and mobile applications with live location tracking. Strong in developing responsive user interfaces, efficient state management, and REST API development and integration using Node.js and Express.js. Skilled in building high-performance, scalable applications with clean, maintainable code and seamless frontend–backend communication.',
    linkedin: 'https://www.linkedin.com/in/ragavan-s-b88ab63b0/',
};

export const skills: Skill[] = [
    {
        category: 'Frontend',
        items: [
            'React.js',
            'React Native',
            'TypeScript',
            'JavaScript (ES6+)',
            'HTML5 & CSS3',
            'Sass',
            'Tailwind CSS',
            'Ant Design',
            'Material UI',
            'Responsive Design',
            'Redux/Context API',
        ],
    },
    {
        category: 'Backend & Database',
        items: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'Realm DB',
            'RESTful APIs',
        ],
    },
    {
        category: 'Real-time & Cloud',
        items: [
            'Socket.io',
            'WebSockets',
            'AWS S3',
            'Firebase',
            'Push Notifications',
            'Background Sync',
        ],
    },
    {
        category: 'Tools & Practices',
        items: [
            'Git & GitHub',
            'Webpack/Vite',
            'CI/CD',
        ],
    },
];

export const experiences: Experience[] = [
    {
        title: 'Software Engineer',
        company: 'Lamynaals Technologies Private Limited',
        duration: 'Jan 2023 - Mar 2026',
        description: [
            'Developed and maintained a real-time communication messaging application for mobile using React Native and Socket.io, supporting group messaging, voice notes, and offline sync',
            'Built an enterprise-grade employee management and live GPS tracking system across Web (React) and Mobile (React Native), covering attendance, shift scheduling, and leave management',
            'Developed a comprehensive insurance management platform (React + Node.js) with policy management, claims processing, and role-based access control',
            'Built a Trust Organization management platform (React) for donation tracking, donor/receiver management, and category-wise reporting via REST API integration',
            'Created a fully responsive car booking website with Google Places API integration, real-time distance calculation, and a dynamic fare estimation engine',
            'Developed 4 production-quality responsive websites using React and TypeScript with modern UI/UX, animations, and third-party API integrations',
        ],
        technologies: [],
    },
    {
        title: 'Self-Learning & Training',
        duration: 'Jan 2022 - Dec 2022',
        description: [
            'Completed an intensive 6-month course covering HTML, CSS, JavaScript, and React.js, building a strong foundation in modern web development',
            'Built multiple CRUD applications using React.js and Node.js to practice real-world development patterns',
            'Developed responsive websites from scratch, focusing on clean UI/UX, component-based architecture, and best practices',
            'Gained hands-on experience with REST APIs, state management, and database integration through personal projects',
        ],
        technologies: [],
    },
];

export const projects: Project[] = [
    {
        id: 'chat-app',
        title: 'Real-time Chat Application',
        description:
            'A comprehensive real-time communication messaging application built with React Native, featuring instant messaging, media sharing, and offline-first capabilities.',
        features: [
            'Real-time messaging with Socket.io integration',
            'Online/offline presence indicators',
            'Message delivery and read status tracking',
            'Voice message recording with waveform visualization',
            'Image and file sharing with AWS S3 integration',
            'Offline message queue with automatic sync',
            'Push notifications for new messages',
            'Group chat functionality',
        ],
        technologies: [
            'React Native',
            'TypeScript',
            'Socket.io',
            'Realm DB',
            'MongoDB',
            'Node.js',
            'AWS S3',
            'Redux',
            'Sass',
        ],
        highlights: [
            '1000+ active users',
            '99.9% message delivery rate',
            'Sub-second message latency',
            'Offline-first architecture',
        ],
        rolesAndResponsibilities: [
            'Led the mobile app architecture design and end-to-end implementation using React Native',
            'Developed the real-time messaging layer using Socket.io with custom event handling and reconnection strategies',
            'Built the offline-first mobile architecture with Realm DB, ensuring seamless data sync on reconnection',
            'Implemented voice messaging with custom waveform animations, audio recording, and playback controls in React Native',
            'Integrated AWS S3 for secure media upload/download with pre-signed URLs and progress tracking',
            'Optimized app performance—reduced initial load time by 40% and message delivery latency by 60%',
        ],
        issuesAndSolutions: [
            {
                issue: 'Severe performance lag and UI freezing during high-frequency message bursts in group chats.',
                solution: 'Optimized the rendering cycle using advanced FlatList configurations (windowSize, maxToRenderPerBatch) and implemented debouncing for incoming Socket.io events, batching state updates to prevent dropped frames.'
            },
            {
                issue: 'Accurately and efficiently tracking real-time online/offline status for thousands of concurrent users in a distributed system.',
                solution: 'Utilized Redis as a fast, in-memory data store to manage active WebSocket connection states globally, drastically optimizing presence tracking performance and reducing main database load.'
            }
        ],
        iconName: 'MessageOutlined',
    },
    {
        id: 'insurance-app',
        title: 'Insurance Management Application',
        description:
            'A comprehensive web-based insurance management platform built with React and Node.js, enabling policy management, claims processing, and customer handling with role-based access control and a highly optimized, modern UI.',
        features: [
            'Policy creation, renewal, and tracking',
            'Claims submission and approval workflow',
            'Role-based access control (Admin, Agent, Customer)',
            'Customer profile and document management',
            'Premium calculation and payment tracking',
            'Dashboard with analytics and reporting',
            'Bulk policy upload and export (Excel)',
            'Advanced search and filtering across policies',
        ],
        technologies: ['React', 'JavaScript', 'Node.js', 'Material UI', 'Redux', 'MongoDB', 'Express.js', 'Tailwind CSS'],
        highlights: ['Role-Based Access Control', 'Optimized Performance', 'Premium UI/UX Design'],
        rolesAndResponsibilities: [
            'Designed and developed the complete frontend using React with Material UI for a polished, responsive interface',
            'Implemented role-based access control (RBAC) with Admin, Agent, and Customer roles managing permissions across the platform',
            'Built state management architecture using Redux for predictable and efficient data flow',
            'Optimized application performance with code-splitting, lazy loading, and memoization techniques',
            'Developed the claims workflow with multi-step approval process and real-time status tracking',
            'Created reusable component library with Material UI themes ensuring consistent and premium design across all pages',
            'Built backend RESTful APIs with Node.js and Express.js for policy, claims, and user management',
        ],
        issuesAndSolutions: [
            {
                issue: 'Performance bottleneck and slow UI rendering when searching through massive amounts of insurance data records.',
                solution: 'Implemented data pagination and MongoDB database indexing on the Node.js backend. On the frontend, added a debounce method for search inputs, vastly improving user experience and drastically reducing unnecessary API calls.'
            },
            {
                issue: 'Handling large volumes of bulk policy uploads via Excel without crashing the Node.js server.',
                solution: 'Used streams to parse Excel files iteratively in Node.js and offloaded validation to a background queue for better concurrency and stability.'
            }
        ],
        iconName: 'SafetyOutlined',
    },
    {
        id: 'employee-management',
        title: 'Employee Management & Live Tracking System',
        description:
            'A large-scale, enterprise-grade employee management and real-time tracking platform built for both web and mobile. The system covers the full employee lifecycle — from clock-in/out attendance, shift scheduling, and leave management to live GPS tracking, real-time notifications, and comprehensive admin dashboards. Designed and developed end-to-end by me across frontend, backend, and cloud infrastructure.',
        features: [
            'Clock-in / Clock-out attendance with geo-fencing validation',
            'Shift scheduling and roster management',
            'Leave application and approval workflow',
            'Real-time live GPS tracking of field employees on Web Dashboard',
            'Background & killed-mode location tracking on mobile',
            'Role-based access control (Admin, Manager, Supervisor, Employee)',
            'Real-time notifications and alerts via Socket.io',
            'Employee profile, document, and payroll management',
            'Task assignment and progress tracking',
            'Comprehensive analytics dashboard with reports and exports',
            'Push notifications for schedule changes, approvals, and alerts',
        ],
        technologies: [
            'React',
            'React Native',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Socket.io',
            'AWS S3',
            'Redux',
            'Ant Design',
            'Maps API',
            'Tailwind CSS',
        ],
        highlights: [
            'Full-Stack Ownership',
            'Real-time Live Tracking',
            'Role-Based Access Control',
            'Optimized Performance',
            'Offline-First Mobile',
        ],
        rolesAndResponsibilities: [
            'Solely designed, developed, and maintained the entire frontend (React web + React Native mobile) and backend (Node.js + Express.js)',
            'Architected the real-time live tracking pipeline using Socket.io and Maps API with sub-second coordinate updates on the web dashboard',
            'Implemented background and killed-mode location services in React Native ensuring uninterrupted GPS tracking of field employees',
            'Built the clock-in/clock-out attendance system with geo-fencing validation to prevent fraudulent check-ins',
            'Developed shift scheduling, roster management, and leave approval workflows with multi-level approval chains',
            'Implemented role-based access control (RBAC) across Admin, Manager, Supervisor, and Employee roles with granular permission management',
            'Designed and built the real-time notification system using Socket.io for instant alerts on schedule changes, task assignments, and approvals',
            'Integrated AWS S3 for secure document storage, employee file uploads, and media management',
            'Optimized application performance with code-splitting, lazy loading, memoization, and efficient database indexing',
            'Built comprehensive analytics dashboards with real-time data visualization, report generation, and Excel/PDF export functionality',
            'Implemented offline-first mobile architecture ensuring seamless data sync when connectivity is restored',
        ],
        issuesAndSolutions: [
            {
                issue: 'Mobile battery drain and throttling while performing continuous GPS tracking in background or killed states.',
                solution: 'Utilized background geolocation native modules, caching coordinates and batching location updates locally before syncing them asynchronously to the server.'
            },
            {
                issue: 'Preventing attendance fraud with fake GPS applications and out-of-bounds check-ins.',
                solution: 'Implemented strict geo-fencing algorithms intersecting with dynamic worksite perimeters, integrating with tamper-evident location providers.'
            }
        ],
        iconName: 'TeamOutlined',
    },
    {
        id: 'trust-organization',
        title: 'Trust Organization Management Platform',
        description:
            'A React-based web application for managing a trust organization — enabling donor profile management, receiver case tracking, and category-wise donation management. Integrated with REST APIs for all data operations including donations, donor records, and report generation.',
        features: [
            'Donor registration and profile management',
            'Receiver case creation and status tracking',
            'Multiple donation categories: Child Welfare, Marriage Aid, Medical/Hospital, Education',
            'Admin dashboard for managing donors, receivers, and donation records',
            'Donation history and receipt generation',
            'Category-wise donation filtering and reports',
            'Role-based access control (Admin / Donor / Staff)',
            'Responsive UI optimized for all screen sizes',
        ],
        technologies: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'CSS3',
            'REST API Integration',
        ],
        highlights: [
            'Multi-category donation system',
            'Donor & receiver management',
            'Admin dashboard',
            'Tailwind CSS UI',
        ],
        rolesAndResponsibilities: [
            'Designed and developed the complete frontend from scratch using React and JavaScript',
            'Built the donation portal UI with category-wise donation flows for child welfare, marriage, hospital, and education',
            'Implemented donor registration, login, and profile management screens with role-based UI access control',
            'Created a comprehensive admin dashboard to manage donors, receivers, donation records, and category reports',
            'Integrated all features with backend REST APIs — handling donor, receiver, and donation data operations',
            'Styled the entire application with Tailwind CSS for a clean, modern, and fully responsive UI',
            'Implemented donation history views and receipt display by consuming backend-generated data via APIs',
        ],
        issuesAndSolutions: [
            {
                issue: 'Handling deeply nested API response structures for category-wise donation reports on the frontend.',
                solution: 'Built a client-side data transformation layer to normalize and flatten API responses before rendering, ensuring consistent UI regardless of backend changes.'
            },
            {
                issue: 'Managing complex role-based UI visibility (Admin / Donor / Staff) without a dedicated frontend auth framework.',
                solution: 'Implemented a React context-based permission system that conditionally renders components and routes based on the user role received from the API login response.'
            }
        ],
        iconName: 'HeartOutlined',
    },
    {
        id: 'car-booking',
        title: 'Car Booking & Ride Management Website',
        description:
            'A fully responsive car booking platform with Google Places API integration for location search, real-time distance and fare calculation, and a dedicated admin dashboard for managing bookings, drivers, and pricing.',
        features: [
            'Google Places Autocomplete for pickup and drop-off locations',
            'Real-time distance calculation using Google Distance Matrix API',
            'Dynamic fare estimation based on distance, vehicle type, and pricing rules',
            'Fully responsive design optimized for desktop, tablet, and mobile',
            'Booking history and trip tracking for customers',
            'Separate admin dashboard for managing bookings, drivers, and fare settings',
            'Vehicle category selection (Sedan, SUV, Luxury, etc.)',
            'Booking confirmation with trip summary and estimated fare',
        ],
        technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'CSS3', 'Sass'],
        highlights: ['Google Maps Integration', 'Responsive Design', 'Admin Dashboard', 'Dynamic Fare Calculation'],
        rolesAndResponsibilities: [
            'Designed and developed the complete responsive frontend with a modern, user-friendly booking interface',
            'Integrated Google Places Autocomplete API for seamless location search and selection',
            'Implemented Google Distance Matrix API to calculate real-time distance in kilometers between pickup and drop-off points',
            'Built the dynamic fare calculation engine based on distance, vehicle type, and configurable pricing rules',
            'Developed a separate admin dashboard for managing bookings, driver assignments, vehicle categories, and fare configurations',
            'Built the backend RESTful APIs with Node.js and Express.js for booking, user, and admin operations',
            'Ensured pixel-perfect responsive design across all devices using modern CSS techniques',
        ],
        issuesAndSolutions: [
            {
                issue: 'Accurately estimating dynamic fares taking multiple pricing bounds and live distance metrics into account.',
                solution: 'Leveraged the Google Distance Matrix API coupled with a custom configurable backend pricing engine to compute rates synchronously without blocking the UI.'
            },
            {
                issue: 'Handling high frequency updates and filtering in the driver matching dashboard.',
                solution: 'Built optimized real-time indexes in MongoDB combined with efficient React rendering approaches that effectively curbed UI stuttering.'
            }
        ],
        iconName: 'CarOutlined',
    },
    {
        id: 'responsive-websites',

        title: 'Responsive Websites',
        description:
            'Designed and developed 4 fully responsive, production-quality websites built entirely with React and TypeScript — no backend involved. Each site focuses on clean component architecture, pixel-perfect responsiveness across all screen sizes, and a polished, modern user experience.',
        features: [
            'Fully responsive layouts for mobile, tablet, and desktop',
            'Type-safe codebase with TypeScript throughout',
            'Reusable, composable component library',
            'Smooth animations and micro-interactions',
            'Accessible UI following WCAG guidelines',
            'Performance-optimized with lazy loading and code splitting',
            'SEO-friendly semantic HTML structure',
            'Dark mode support and theme customization',
            'Cross-browser compatibility',
            'Integrated with third-party APIs and static data sources',
        ],
        technologies: [
            'React',
            'TypeScript',
            'HTML5',
            'CSS3',
            'SCSS',
            'Tailwind CSS',
            'Framer Motion',
            'Vite',
            'React Router',
        ],
        highlights: [
            'Frontend Only',
            'Fully Responsive',
            'TypeScript Type-Safe',
            'Modern UI/UX',
            'Performance Optimized',
        ],
        rolesAndResponsibilities: [
            'Designed and built fully responsive multi-page websites from scratch using React and TypeScript',
            'Architected scalable component structures with strong TypeScript typing for maintainability and reliability',
            'Implemented responsive layouts using CSS Grid, Flexbox, and SCSS with mobile-first design principles',
            'Created smooth page transitions and micro-animations using Framer Motion to elevate the user experience',
            'Optimized performance via lazy loading, code splitting, and asset optimization, achieving high Lighthouse scores',
            'Ensured cross-browser compatibility and accessibility compliance (WCAG) across all websites',
            'Integrated third-party APIs and static data sources to power dynamic content without a dedicated backend',
            'Implemented dark mode and theme customization using React context and CSS custom properties',
        ],
        issuesAndSolutions: [
            {
                issue: 'Delivering highly interactive, physics-based micro animations without compromising page load speeds and SEO.',
                solution: 'Used progressive lazy-loading for heavy Framer Motion features to optimize the critical rendering path, consistently achieving 95+ Lighthouse scores.'
            },
            {
                issue: 'Scaling application logic and themes seamlessly without server support.',
                solution: 'Engineered a highly extensible generic data-fetching layer resolving typed data locally with Context API providing rapid pseudo-dynamic updates.'
            }
        ],
        iconName: 'DesktopOutlined',
        link: 'https://www.advantedgets.com/',
        linkLabel: 'Advantedgets',
    },
];

export const contactInfo: ContactInfo = {
    email: 'ragavandev07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ragavan-s-b88ab63b0/',
    github: 'https://github.com/ragavandev07',
    phone: '+919344262891',
};

export const architectureData = {
    messageLifecycle: [
        {
            step: 1,
            title: 'Message Sent',
            description: 'User composes and sends message',
            status: 'Client',
        },
        {
            step: 2,
            title: 'Socket Emission',
            description: 'Message emitted via Socket.io',
            status: 'Transport',
        },
        {
            step: 3,
            title: 'Server Processing',
            description: 'Server validates and stores in MongoDB',
            status: 'Server',
        },
        {
            step: 4,
            title: 'Delivered',
            description: 'Message delivered to recipient',
            status: 'Transport',
        },
        {
            step: 5,
            title: 'Read Receipt',
            description: 'Recipient opens and reads message',
            status: 'Client',
        },
    ],
    offlineSync: [
        'Messages stored locally in Realm DB',
        'Background sync service monitors connectivity',
        'Automatic retry with exponential backoff',
        'Conflict resolution for concurrent edits',
        'Delta sync for bandwidth optimization',
    ],
};
