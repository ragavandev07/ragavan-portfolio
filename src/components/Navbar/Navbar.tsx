import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './Navbar.scss';

const { Header } = Layout;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <Header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
                    <span className="brand-text">Portfolio</span>
                </div>

                <nav className="navbar-menu">
                    <a onClick={() => scrollToSection('about')} className="nav-link">
                        About
                    </a>
                    <a onClick={() => scrollToSection('skills')} className="nav-link">
                        Skills
                    </a>
                    <a onClick={() => scrollToSection('experience')} className="nav-link">
                        Experience
                    </a>
                    <a onClick={() => scrollToSection('projects')} className="nav-link">
                        Projects
                    </a>
                    <a onClick={() => scrollToSection('contact')} className="nav-link">
                        Contact
                    </a>
                </nav>
            </div>
        </Header>
    );
};

export default Navbar;
