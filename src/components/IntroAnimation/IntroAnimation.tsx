import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './IntroAnimation.scss';

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
    const [phase, setPhase] = useState<'border' | 'letter' | 'reveal' | 'exit'>('border');

    useEffect(() => {
        const letterTimer = setTimeout(() => setPhase('letter'), 1200);
        const revealTimer = setTimeout(() => setPhase('reveal'), 1600);
        const exitTimer = setTimeout(() => setPhase('exit'), 2700);
        const completeTimer = setTimeout(() => onComplete(), 3200);

        return () => {
            clearTimeout(letterTimer);
            clearTimeout(revealTimer);
            clearTimeout(exitTimer);
            clearTimeout(completeTimer);
        };
    }, [onComplete]);

    const hexPath = "M 70,2 L 136,37 L 136,107 L 70,142 L 4,107 L 4,37 Z";

    return (
        <AnimatePresence>
            {phase !== 'exit' ? (
                <motion.div
                    className="intro-animation"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="intro-content"
                        animate={{ x: phase === 'reveal' ? -50 : 0 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                        <div className="intro-left-side">
                            <svg className="intro-hexagon-svg" viewBox="-5 -5 150 155" width="110" height="113">
                                <path
                                    className={`hexagon-border ${phase !== 'border' ? 'drawn' : ''}`}
                                    d={hexPath}
                                    fill="none"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {(phase === 'letter' || phase === 'reveal') && (
                                <motion.span
                                    className="intro-letter"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    R
                                </motion.span>
                            )}
                        </div>

                        {phase === 'reveal' && (
                            <motion.div
                                className="intro-right-side"
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: 'auto', opacity: 1 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                            >
                                <motion.h1
                                    className="intro-name"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.12, duration: 0.4, ease: 'easeOut' }}
                                >
                                    Ragavan
                                </motion.h1>
                                <motion.p
                                    className="intro-role"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
                                >
                                    Software Engineer
                                </motion.p>
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

export default IntroAnimation;
