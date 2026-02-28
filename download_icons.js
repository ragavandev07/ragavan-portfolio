import fs from 'fs';
import https from 'https';
import path from 'path';

const iconMap = {
    'React.js': 'react',
    'React Native': 'react',
    'TypeScript': 'typescript',
    'JavaScript (ES6+)': 'javascript',
    'HTML5 & CSS3': 'html5',
    'Ant Design': 'antdesign',
    'Material UI': 'materialui',
    'Redux/Context API': 'redux',
    'Node.js': 'nodejs',
    'Express.js': 'express',
    'MongoDB': 'mongodb',
    'Realm DB': 'realm',
    'GraphQL': 'graphql',
    'Socket.io': 'socketio',
    'AWS S3': 'amazonwebservices',
    'Firebase': 'firebase',
    'Git & GitHub': 'git',
    'Webpack/Vite': 'webpack',
    'Docker': 'docker',
    'Linux': 'linux',
    'Python': 'python',
    'Java': 'java',
    'C++': 'cplusplus',
    'Jenkins': 'jenkins',
    'Kubernetes': 'kubernetes',
    'Nginx': 'nginx',
    'PostgreSQL': 'postgresql',
    'Redis': 'redis',
    'Sass': 'sass',
    'Tailwind CSS': 'tailwindcss',
    'Vue.js': 'vuejs',
    'Angular': 'angular',
    'Next.js': 'nextjs',
};

const outputDir = './public/icons';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function downloadIcon(name, slug) {
    const url = slug === 'amazonwebservices'
        ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original-wordmark.svg`
        : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

    const filePath = path.join(outputDir, `${slug}.svg`);

    https.get(url, (res) => {
        if (res.statusCode !== 200) {
            console.error(`Failed to download ${name}: ${res.statusCode}`);
            return;
        }
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${name} to ${filePath}`);
        });
    }).on('error', (err) => {
        console.error(`Error downloading ${name}: ${err.message}`);
    });
}

const uniqueSlugs = [...new Set(Object.values(iconMap))];
uniqueSlugs.forEach(slug => {
    const entry = Object.entries(iconMap).find(([_, s]) => s === slug);
    downloadIcon(entry[0], slug);
});
