'use client';
import { useState, useEffect } from 'react';
import Preloader from './Preloader';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientLayout({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        AOS.init({
            disable: false,
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate',
            useClassNames: false,
            disableMutationObserver: false,
            debounceDelay: 50,
            throttleDelay: 99,
            offset: 100,
            delay: 0,
            duration: 900,
            easing: 'ease',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <>
            <Preloader isLoading={isLoading} />
            {!isLoading && (
                <main id="site-wrapper">
                    {children}
                </main>
            )}
        </>
    );
}