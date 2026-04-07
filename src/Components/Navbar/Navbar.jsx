import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './Navbar.css'
import phoneIcon from '../../assets/phone-svgrepo-com.svg'

const Bar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Products', path: '/products' }
    ]

    // Derive activeIndex during render to avoid state-update lag
    const activeIndex = navItems.findIndex(item => {
        if (item.path === '/') return location.pathname === '/'
        return location.pathname.startsWith(item.path)
    })

    const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 })
    const [isInitial, setIsInitial] = useState(true)
    const itemRefs = useRef([])

    // Disable initial transition on mount
    useEffect(() => {
        const timer = setTimeout(() => setIsInitial(false), 50)
        return () => clearTimeout(timer)
    }, [])

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const index = activeIndex === -1 ? 0 : activeIndex
            const activeItem = itemRefs.current[index]
            const container = activeItem?.parentElement

            if (!activeItem || !container) {
                return
            }

            const itemRect = activeItem.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()

            setIndicatorStyle({
                width: `${itemRect.width}px`,
                height: `${itemRect.height}px`,
                transform: `translate(${itemRect.left - containerRect.left}px, ${itemRect.top - containerRect.top}px)`,
                transition: isInitial ? 'none' : undefined,
                opacity: activeIndex === -1 ? 0 : 1
            })
        }

        updateIndicator()
        window.addEventListener('resize', updateIndicator)

        if (document.fonts) {
            document.fonts.ready.then(updateIndicator)
        }

        return () => {
            window.removeEventListener('resize', updateIndicator)
        }
    }, [activeIndex, isInitial])

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    <div className="nav-links">
                        <span className="nav-selection" aria-hidden="true" style={indicatorStyle} />
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
            <div className="contact-floating">
                <Link to="/contact" className="contactLogo" aria-label="Call">
                    <img src={phoneIcon} alt="Phone" />
                </Link>
            </div>
        </>
    )
}

export default Bar
