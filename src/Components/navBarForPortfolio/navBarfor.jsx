import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './navBarfor.css'


const navItems = [
    { name: 'Graphic Design', path: '/portfolio/GraphicDesign' },
    { name: '3D Design', path: '/portfolio/3dDesign' },
    { name: 'UI/UX Design', path: '/portfolio/UI-UX' },
    { name: 'Websites', path: '/portfolio/Websites' },
]

const NavBarForPortfolio = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Derive activeIndex during render to avoid state-update lag
    const activeIndex = navItems.findIndex(item => location.pathname.includes(item.path))
    
    const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 })
    const [isInitial, setIsInitial] = useState(true)
    const itemRefs = useRef([])

    useEffect(() => {
        const timer = setTimeout(() => setIsInitial(false), 50)
        return () => clearTimeout(timer)
    }, [])

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const index = activeIndex === -1 ? 0 : activeIndex
            const activeItem = itemRefs.current[index]

            if (!activeItem) return

            setIndicatorStyle({
                width: `${activeItem.offsetWidth}px`,
                height: `${activeItem.offsetHeight}px`,
                transform: `translate(${activeItem.offsetLeft}px, ${activeItem.offsetTop}px)`,
                transition: isInitial ? 'none' : undefined,
                opacity: activeIndex === -1 ? 0 : 1
            })
        }

        updateIndicator()
        window.addEventListener('resize', updateIndicator)
        return () => window.removeEventListener('resize', updateIndicator)
    }, [activeIndex, isInitial])

    return (
        <header className="header2">
            <nav className="navbar2">
                <div className="nav-links2">
                    <span className="nav-selection2" aria-hidden="true" style={indicatorStyle} />
                    {navItems.map((item, index) => (
                        <button
                            key={item.name}
                            ref={(element) => {
                                itemRefs.current[index] = element
                            }}
                            type="button"
                            className={activeIndex === index ? 'is-active' : ''}
                            aria-current={activeIndex === index ? 'page' : undefined}
                            onClick={() => {
                                navigate(item.path)
                            }}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default NavBarForPortfolio
