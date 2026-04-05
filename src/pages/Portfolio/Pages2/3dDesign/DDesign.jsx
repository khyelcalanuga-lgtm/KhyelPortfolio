import React, { useState } from 'react'
import '../globsPort.css'
import bodyScrub from '../../../../assets/ProductRendering/FinalRenderKhyels.png'
import buttOil1 from '../../../../assets/ProductRendering/1.png'
import buttOil2 from '../../../../assets/ProductRendering/2.png'
import buttOil3 from '../../../../assets/ProductRendering/3.png'
import wireframe from '../../../../assets/ProductRendering/wireframe.png'
import 

const DDesign = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const openModal = (imgSrc) => {
        setSelectedImg(imgSrc);
    };

    const closeModal = () => {
        setSelectedImg(null);
    };
    return (
        <div className="contentsGD">
            <div className="gallerFixer">
                <div className="galleryPoster2">
                    <p>Product Rendering</p>
                    <div className="posterGal2">
                        <img src={bodyScrub} alt="Burger 2" onClick={() => openModal(bodyScrub)} />
                        <img src={buttOil1} alt="Tempura Poster" onClick={() => openModal(buttOil1)} />
                        <img src={buttOil2} alt="Royal Poster" onClick={() => openModal(buttOil2)} />
                    </div>
                    <div className="posterGal3">
                        <img src={buttOil3} alt="Burger " onClick={() => openModal(buttOil3)} />
                        <img src={wireframe} alt="Tempura Poster" onClick={() => openModal(wireframe)} />
                    </div>
                </div>
                <div className="galleryPoster2">
                    <p>Food Poster</p>
                    <div className="posterGal2">
                        <img src={bodyScrub} alt="Burger 2" onClick={() => openModal(bodyScrub)} />
                        <img src={buttOil1} alt="Tempura Poster" onClick={() => openModal(buttOil1)} />
                        <img src={buttOil2} alt="Royal Poster" onClick={() => openModal(buttOil2)} />
                    </div>
                    <div className="posterGal3">
                        <img src={buttOil3} alt="Burger " onClick={() => openModal(buttOil3)} />
                        <img src={wireframe} alt="Tempura Poster" onClick={() => openModal(wireframe)} />
                    </div>
                </div>
            </div>

            {selectedImg && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={selectedImg} alt="Selected" />
                </div>
            )}
        </div>
    )
}

export default DDesign