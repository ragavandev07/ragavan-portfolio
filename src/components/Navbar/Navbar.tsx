import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import './Navbar.scss';

const { Header } = Layout;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            <Header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    <div className="navbar-brand" onClick={() => scrollToSection('hero')}>
                        <div className="brand-hexagon">
                            <svg viewBox="0 0 40 42" width="40" height="42">
                                <polygon
                                    points="20,1 38,11 38,31 20,41 2,31 2,11"
                                    fill="none"
                                    stroke="#818cf8"
                                    strokeWidth="2"
                                />
                            </svg>
                            <span className="brand-letter">R</span>
                        </div>
                    </div>

                    <nav className="navbar-menu desktop-menu">
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

                    <button
                        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                    </button>
                </div>
            </Header>

            <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-menu">
                    <a onClick={() => scrollToSection('about')} className="mobile-nav-link">
                        About
                    </a>
                    <a onClick={() => scrollToSection('skills')} className="mobile-nav-link">
                        Skills
                    </a>
                    <a onClick={() => scrollToSection('experience')} className="mobile-nav-link">
                        Experience
                    </a>
                    <a onClick={() => scrollToSection('projects')} className="mobile-nav-link">
                        Projects
                    </a>
                    <a onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                        Contact
                    </a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
