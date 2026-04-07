import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './navBarfor.css'
import arrowIcon from '../../assets/arrow.svg'


const navItems = [
    { name: 'Graphic Design', path: '/portfolio/GraphicDesign' },
    { name: '3D Design', path: '/portfolio/3dDesign' },
    { name: 'Websites | UI/UX', path: '/portfolio/Websites' },
]

const NavBarForPortfolio = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef(null)

    // Derive activeIndex during render to avoid state-update lag
    const activeIndex = navItems.findIndex(item => location.pathname.includes(item.path))
    const currentItem = activeIndex === -1 ? navItems[0] : navItems[activeIndex]

    const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 })
    const [isInitial, setIsInitial] = useState(true)
    const itemRefs = useRef([])

    useEffect(() => {
        const timer = setTimeout(() => setIsInitial(false), 50)
        return () => clearTimeout(timer)
    }, [])
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false)
            }
        }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useLayoutEffect(() => {
        const updateIndicator = () => {
            const index = activeIndex === -1 ? 0 : activeIndex
            const activeItem = itemRefs.current[index]
            const container = activeItem?.parentElement

            if (!activeItem || !container || !isOpen) {
                return
            }

            const itemRect = activeItem.getBoundingClientRect()
            const containerRect = container.getBoundingClientRect()

            setIndicatorStyle({
                width: `${itemRect.width}px`,
                height: `${itemRect.height}px`,
                transform: `translate(${itemRect.left - containerRect.left}px, ${itemRect.top - containerRect.top}px)`,
                transition: isInitial ? 'none' : undefined,
                opacity: 1
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
    }, [activeIndex, isInitial, isOpen])

    return (
        <header className="header2">
            <nav className={`navbar2 ${isOpen ? 'is-open' : ''}`} ref={dropdownRef}>
                <button
                    className="dropdown-toggle2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                >
                    {currentItem.name}
                    <img src={arrowIcon} alt="" className="arrow-icon" />
                </button>
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
                                setIsOpen(false)
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
