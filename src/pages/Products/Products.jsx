import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBarForProducts from "../../Components/navBarForProducts/navBarforProducts"
import Templates from "./Templates/Templates"
import DdModels from "./3dModels/3dModels"

const Products = () => {
    useEffect(() => {
        document.title = "Products | Khyel Calanuga";
    }, []);

    return (
        <div style={{ paddingTop: '100px' }}>
            <NavBarForProducts />
            <Routes>
                <Route path="/" element={<Navigate to="templates" replace />} />
                <Route path="templates" element={<Templates />} />
                <Route path="3dmodels" element={<DdModels />} />
            </Routes>
        </div>
    )
}

export default Products
