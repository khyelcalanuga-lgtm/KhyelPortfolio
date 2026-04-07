import React, { useEffect } from 'react'
import '../globsPort.css'

const Figma = () => {
    useEffect(() => {
        document.title = "UI/UX Design | Portfolio";
    }, []);

    return (
        <div className="contentsGD">
            <p>UI/UX</p>
        </div>
    )
}

export default Figma