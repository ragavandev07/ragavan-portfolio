"use client";

import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import './page.scss';

export default function Home() {
    return (
        <>
            <div className="app">
                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                </main>
                <Footer />
            </div>
            <Analytics />
        </>
    );
}
