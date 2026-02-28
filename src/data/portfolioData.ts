import type { Skill, Experience, Project, ContactInfo } from '../types';

export const personalInfo = {
    name: 'Ragavan.S',
    role: 'Software Engineer',
    tagline: 'Specializing in high-performance full-stack development with React, React Native, and Node.js.',
    yearsOfExperience: '3+',
    bio: 'Passionate Full stack Developer with 3+ years of experience specializing in React, React Native, and Node.js. Expert in building production-grade real-time systems, enterprise-scale management platforms, and high-performance mobile applications. Strong focus on scalable architectures, offline-first engineering, and delivering exceptional cross-platform user experiences.',
    linkedin: 'https://www.linkedin.com/in/ragavan-s-262409360/',
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
        title: 'Frontend Engineer',
        company: 'Lamynaals Technologies Private Limited',
        duration: 'Jan 2023 - Feb 2026',
        description: [
            'Architected and developed a production-ready real-time chat application serving 10,000+ active users on mobile using React Native and Socket.io',
            'Built an enterprise-grade employee management & live tracking system (Web & Mobile) covering attendance, shift scheduling, leave management, and real-time GPS tracking',
            'Developed a comprehensive insurance management platform with policy management, claims processing, role-based access control, and premium UI/UX',
            'Created a fully responsive car booking website with Google Places API integration, real-time distance calculation, and dynamic fare estimation',
            'Engineered offline-first mobile architecture using Realm DB, ensuring seamless data synchronization and persistence across devices',
            'Optimized application performance, reducing initial load time by 40% and improving real-time message delivery latency by 60%',
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
        title: 'Real-time Chat Application (Mobile)',
        description:
            'A comprehensive WhatsApp-like mobile chat application built with React Native, featuring real-time messaging, media sharing, and offline-first capabilities.',
        features: [
            'Real-time messaging with Socket.io integration',
            'Online/offline presence indicators',
            'Message delivery and read status tracking',
            'Voice message recording with waveform visualization',
            'Image and file sharing with AWS S3 integration',
            'Offline message queue with automatic sync',
            'Push notifications for new messages',
            'Group chat functionality',
            'Message search and filtering',
            'End-to-end message encryption',
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
        ],
        highlights: [
            '10,000+ active users',
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
    },
    {
        id: 'insurance-app',
        title: 'Insurance Management Application (Web)',
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
        technologies: ['React', 'JavaScript', 'Node.js', 'Material UI', 'Redux', 'MongoDB', 'Express.js'],
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
    },
    {
        id: 'employee-management',
        title: 'Employee Management & Live Tracking System (Web & Mobile)',
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
            'Offline-first mobile support with data sync on reconnection',
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
        technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Google Maps API', 'CSS3'],
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
    },
];

export const contactInfo: ContactInfo = {
    email: 'ragavandev07@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ragavan-s-262409360/',
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
