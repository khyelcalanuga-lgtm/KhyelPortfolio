import React, { useState, useEffect } from 'react'
import '../Products.css'
import tempura from '../../../assets/FoodPoster/Tempura.png'
import arrow from '../../../assets/arrow.svg'
import burger from '../../../assets/FoodPoster/Burger.png'
import burger2 from '../../../assets/FoodPoster/Burger2.png'
import prafJava from '../../../assets/FoodPoster/PrafJavaChip.png'
import royal from '../../../assets/FoodPoster/Royal.png'
import StarawB from '../../../assets/FoodPoster/StawBMilk.png'

const Templates = () => {
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
        <div className="TemplatesContainer">
            <div className="firstRowTemplate">
                <div className="Item1">
                    <img src={tempura} alt="Stranger Things Poster" onClick={() => openModal(tempura)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p >Tempura Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Item1">
                    <img src={burger} alt="Stranger Things Poster" onClick={() => openModal(burger)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Combo Burger Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Item1">
                    <img src={burger2} alt="Stranger Things Poster" onClick={() => openModal(burger2)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Burger Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Item1">
                    <img src={prafJava} alt="Stranger Things Poster" onClick={() => openModal(prafJava)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Java Chip Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="firstRowTemplate">
                <div className="Item1">
                    <img src={royal} alt="Stranger Things Poster" onClick={() => openModal(royal)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p >Royal Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Item1">
                    <img src={StarawB} alt="Stranger Things Poster" onClick={() => openModal(StarawB)} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Strawberry Milkshake Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ opacity: '0' }} className="Item1">
                    <img src={burger2} alt="Stranger Things Poster" onClick={() => openModal()} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Burger Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ opacity: '0' }} className="Item1">
                    <img src={prafJava} alt="Stranger Things Poster" onClick={() => openModal()} />
                    <div className="itemOptions">
                        <div className="itemTitle">
                            <p>Java Chip Poster</p>
                            <p style={{ color: '#ffffff', fontSize: '16px', fontWeight: '100' }}>.PSD</p>
                        </div>
                        <div className="button">
                            <div className="ArrowBut">
                                <img src={arrow} alt="" />
                            </div>
                        </div>
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

export default Templates
