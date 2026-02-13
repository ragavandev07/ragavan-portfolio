import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    CodeOutlined,
    MobileOutlined,
    DatabaseOutlined,
    ApiOutlined,
    CloudOutlined,
    RocketOutlined
} from '@ant-design/icons';
import { Skill, Experience, Project, ContactInfo } from '../types';

export const personalInfo = {
    name: 'Ragavan S',
    role: 'Frontend Engineer | React & React Native',
    tagline: 'Building scalable, real-time applications with modern web and mobile technologies',
    yearsOfExperience: '3+',
    bio: 'Passionate Frontend Engineer with 3+ years of experience specializing in React and React Native development. Expert in building production-grade real-time chat systems, implementing complex UI/UX designs, and architecting scalable solutions. Strong focus on performance optimization, offline-first architecture, and delivering exceptional user experiences.',
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
            'GraphQL',
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
            'PM2',
            'Webpack/Vite',
            'Agile/Scrum',
            'CI/CD',
            'Performance Optimization',
        ],
    },
];

export const experiences: Experience[] = [
    {
        title: 'Frontend Engineer',
        company: 'Tech Company',
        duration: '2021 - Present',
        description: [
            'Architected and developed a production-ready real-time chat application serving 10,000+ active users across web and mobile platforms',
            'Implemented comprehensive real-time features including online/offline presence, typing indicators, message delivery status, and read receipts using Socket.io',
            'Built offline-first mobile architecture using Realm DB, ensuring seamless message synchronization and data persistence',
            'Developed voice messaging feature with custom waveform animations and audio playback controls',
            'Optimized application performance, reducing initial load time by 40% and improving message delivery latency by 60%',
            'Collaborated with backend team to design and implement scalable WebSocket architecture handling 1000+ concurrent connections',
        ],
        technologies: [
            'React',
            'React Native',
            'TypeScript',
            'Socket.io',
            'Realm DB',
            'MongoDB',
            'AWS S3',
            'Node.js',
        ],
    },
    {
        title: 'UI/UX Developer',
        company: 'Previous Company',
        duration: '2020 - 2021',
        description: [
            'Designed and developed responsive admin dashboards using Ant Design and Material UI',
            'Implemented complex data visualization components for analytics and reporting',
            'Created reusable component library reducing development time by 30%',
            'Worked closely with design team to ensure pixel-perfect implementation',
        ],
        technologies: ['React', 'JavaScript', 'Ant Design', 'Material UI', 'Chart.js'],
    },
];

export const projects: Project[] = [
    {
        id: 'chat-app',
        title: 'Real-time Chat Application (Web & Mobile)',
        description:
            'A comprehensive WhatsApp-like chat application built for both web and mobile platforms, featuring real-time messaging, media sharing, and offline capabilities.',
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
            'React',
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
    },
    {
        id: 'live-tracking-system',
        title: 'Live Tracking User Management',
        description:
            'Advanced real-time user tracking system providing precise location monitoring and status updates on a live web dashboard. Engineered to handle complex background states and "killed mode" scenarios ensuring continuous reliability and superior user experience.',
        features: [
            'Real-time location visualization on Web Dashboard',
            'Robust background & killed mode execution support',
            'Live socket-based coordinate updates',
            'Battery-optimized tracking algorithms',
            'User status monitoring (Online/Offline/Idle)',
            'Historical route playback',
        ],
        technologies: ['React', 'TypeScript', 'Socket.io', 'Node.js', 'MongoDB', 'Maps API'],
        highlights: ['99.9% Tracking Reliability', 'Seamless Killed Mode Handling', 'Sub-second Latency'],
    },
    {
        id: 'admin-dashboard',
        title: 'Analytics & Admin Dashboard',
        description:
            'Comprehensive admin dashboard with real-time analytics, user management, and reporting capabilities.',
        features: [
            'Real-time data visualization',
            'User management and permissions',
            'Advanced filtering and search',
            'Export functionality (PDF, Excel)',
            'Customizable widgets',
            'Dark mode support',
        ],
        technologies: ['React', 'TypeScript', 'Ant Design', 'Chart.js', 'Node.js'],
        highlights: ['50+ custom widgets', 'Real-time updates', 'Mobile responsive'],
    },
    {
        id: 'media-handler',
        title: 'Voice Message & Media Handler',
        description:
            'Advanced media handling system for voice messages, images, and files with compression and optimization.',
        features: [
            'Voice recording with waveform animation',
            'Audio playback with seek controls',
            'Image compression and optimization',
            'File upload with progress tracking',
            'Media preview and download',
            'Cloud storage integration',
        ],
        technologies: ['React Native', 'TypeScript', 'AWS S3', 'FFmpeg', 'Realm DB'],
        highlights: ['70% bandwidth reduction', 'Seamless offline support', 'Fast upload/download'],
    },
];

export const contactInfo: ContactInfo = {
    email: 'your.email@example.com',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    phone: '+1 (555) 123-4567',
};

export const socialLinks = [
    {
        platform: 'GitHub',
        url: contactInfo.github,
        icon: <GithubOutlined />,
    },
    {
        platform: 'LinkedIn',
        url: contactInfo.linkedin,
        icon: <LinkedinOutlined />,
    },
    {
        platform: 'Email',
        url: `mailto:${contactInfo.email}`,
        icon: <MailOutlined />,
    },
];

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

export const techIcons = {
    frontend: <CodeOutlined />,
    mobile: <MobileOutlined />,
    database: <DatabaseOutlined />,
    api: <ApiOutlined />,
    cloud: <CloudOutlined />,
    performance: <RocketOutlined />,
};
