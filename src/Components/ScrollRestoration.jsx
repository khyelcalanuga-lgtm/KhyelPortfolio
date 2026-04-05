import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
    const { pathname } = useLocation();
    const scrollPositions = useRef({});
    const currentPath = useRef(pathname);

    // Update currentPath ref whenever location changes
    useEffect(() => {
        currentPath.current = pathname;
    }, [pathname]);

    // Capture the scroll position for the current pathname as the user scrolls
    useEffect(() => {
        const handleScroll = () => {
            scrollPositions.current[currentPath.current] = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Restore the saved scroll position when the pathname changes
    useEffect(() => {
        const savedPosition = scrollPositions.current[pathname] || 0;
        
        // Small timeout to ensure the DOM is ready for scrolling
        const timeoutId = setTimeout(() => {
            window.scrollTo(0, savedPosition);
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null;
};

export default ScrollRestoration;
