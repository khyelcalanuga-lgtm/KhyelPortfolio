import React, { useEffect } from 'react'
import '../globsPort.css'

const Websites = () => {
    useEffect(() => {
        document.title = "Websites | Portfolio";
    }, []);

    return (
        <div className="contentsGD">
            <p>Websites</p>
        </div>
    )
}

export default Websites
