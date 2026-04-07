import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import './navBarforProducts.css'


const navItems = [
    { name: 'Templates', path: '/products/templates' },
    { name: '3D Model', path: '/products/3dmodels' },
]

const NavBarForProducts = () => {
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

export default NavBarForProducts
