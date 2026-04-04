import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBarForPortfolio from "../../Components/navBarForPortfolio/navBarfor"
import GraphicDesign from "./Pages2/GraphicDesign/GraphicDesign"
import DDesign from "./Pages2/3dDesign/DDesign"
import Figma from "./Pages2/UI UX/Figma"
import Websites from "./Pages2/Websites/Websites"

const Portfolio = () => {
    return (
        <div style={{ paddingTop: '100px' }}>
            <NavBarForPortfolio />
            <Routes>
                <Route path="/" element={<Navigate to="GraphicDesign" replace />} />
                <Route path="GraphicDesign" element={<GraphicDesign />} />
                <Route path="3dDesign" element={<DDesign />} />
                <Route path="UI-UX" element={<Figma />} />
                <Route path="Websites" element={<Websites />} />
            </Routes>
        </div>
    )
}

export default Portfolio
