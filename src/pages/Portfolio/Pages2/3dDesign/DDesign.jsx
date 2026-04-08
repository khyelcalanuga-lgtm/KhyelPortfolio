import React, { useState, useEffect } from 'react'
import '../globsPort.css'
import bodyScrub from '../../../../assets/ProductRendering/FinalRenderKhyels.png'
import bodyScrub2 from '../../../../assets/ProductRendering/FinalRenderKhyels(SOlid).png'
import buttOil1 from '../../../../assets/ProductRendering/1.png'
import buttOil2 from '../../../../assets/ProductRendering/2.png'
import buttOil3 from '../../../../assets/ProductRendering/3.png'
import wireframe from '../../../../assets/ProductRendering/wireframe.png'
import cup from '../../../../assets/3D-projects/cup.png'
import Apple from '../../../../assets/3D-projects/apple.png'
import Lykan from '../../../../assets/3D-projects/LykanHyperSport.png'
import Lykan2 from '../../../../assets/3D-projects/LykanHyperSport2.png'
import Wine from '../../../../assets/3D-projects/Wine.png'
import Untitled2 from '../../../../assets/3D-projects/Untitled2.png'

const DDesign = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        document.title = "3D Design | Portfolio";
    }, []);

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
                        <img src={bodyScrub2} alt="Tempura Poster" onClick={() => openModal(bodyScrub2)} />
                        <img src={wireframe} alt="Tempura Poster" onClick={() => openModal(wireframe)} />
                    </div>
                </div>
                <div className="galleryPoster2">
                    <p>Projects</p>
                    <div className="posterGal2">
                        <img src={cup} alt="Burger 2" onClick={() => openModal(cup)} />
                        <img src={Apple} alt="Tempura Poster" onClick={() => openModal(Apple)} />
                        <img src={Lykan} alt="Royal Poster" onClick={() => openModal(Lykan)} />
                    </div>
                    <div className="posterGal3">
                        <img src={Lykan2} alt="Burger " onClick={() => openModal(Lykan2)} />
                        <img src={Wine} alt="Tempura Poster" onClick={() => openModal(Wine)} />
                        <img src={Untitled2} alt="Tempura Poster" onClick={() => openModal(Untitled2)} />
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