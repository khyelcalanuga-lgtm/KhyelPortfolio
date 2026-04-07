import React, { useEffect } from 'react'
import './Products.css'

const Products = () => {
    useEffect(() => {
        document.title = "Products | Khyel Calanuga";
    }, []);

    return (
        <div className="products">
            <p>Ginagawa pa wait</p>
        </div>
    )
}

export default Products
