import React, { useState, useEffect } from 'react'
import '../globsPort.css'
import StangerThings from '../../../../assets/StangerTHings.png'
import Burger2 from '../../../../assets/FoodPoster/Burger2.png'
import Tempura from '../../../../assets/FoodPoster/Tempura.png'
import Royal from '../../../../assets/FoodPoster/Royal.png'
import Burger from '../../../../assets/FoodPoster/Burger.png'
import Java from '../../../../assets/FoodPoster/PrafJavaChip.png'
import MilkShake from '../../../../assets/FoodPoster/StawBMilk.png'
import clairo from '../../../../assets/Illustration/clairo.png'
import rndm from '../../../../assets/Illustration/rndm.png'
import rrr from '../../../../assets/Illustration/rrrr.png'
import FightClub from '../../../../assets/FightClub.png'
import MoonKnight from '../../../../assets/MoonKnight.png'
import chokoCake from '../../../../assets/FoodPoster/Chococake.png'


const GraphicDesign = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    useEffect(() => {
        document.title = "Graphic Design | Portfolio";
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
                <div className="galleryPoster">
                    <p>Poster</p>
                    <div className="posterGal">
                        <img src={MoonKnight} alt="Stranger Things Poster" onClick={() => openModal(MoonKnight)} />
                        <img src={FightClub} alt="Stranger Things Poster" onClick={() => openModal(FightClub)} />
                        <img src={StangerThings} alt="Stranger Things Poster" onClick={() => openModal(StangerThings)} />

                    </div>
                </div>
                <div className="galleryPoster2">
                    <p>Food Poster</p>
                    <div className="posterGal2">
                        <img src={Burger2} alt="Burger 2" onClick={() => openModal(Burger2)} />
                        <img src={Tempura} alt="Tempura Poster" onClick={() => openModal(Tempura)} />
                        <img src={Royal} alt="Royal Poster" onClick={() => openModal(Royal)} />
                    </div>
                    <div className="posterGal3">
                        <img src={Burger} alt="Burger " onClick={() => openModal(Burger)} />
                        <img src={Java} alt="Tempura Poster" onClick={() => openModal(Java)} />
                        <img src={MilkShake} alt="Royal Poster" onClick={() => openModal(MilkShake)} />
                    </div>
                    <div className="posterGal4">
                        <img src={chokoCake} alt="Burger " onClick={() => openModal(chokoCake)} />
                        <img style={{ opacity: '0', cursor: 'default' }} src={Java} alt="Tempura Poster" onClick={() => openModal()} />
                        <img style={{ opacity: '0', cursor: 'default' }} src={MilkShake} alt="Royal Poster" onClick={() => openModal()} />
                    </div>
                </div>
                <div className="galleryPoster2">
                    <p>Illustration</p>
                    <div className="posterGal3">
                        <img src={clairo} alt="Burger 2" onClick={() => openModal(clairo)} />
                        <img src={rndm} alt="Tempura Poster" onClick={() => openModal(rndm)} />
                        <img src={rrr} alt="Royal Poster" onClick={() => openModal(rrr)} />
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

export default GraphicDesign