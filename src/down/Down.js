import React from 'react';
import './Down.css';
import Slider from "react-slick"
const Down = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return(
        <header>
            <div className="containerOne">

                <h1 className="text">Онлайн-курсы от республиканского центра<br /> "Юные якутяне"</h1>

                <h3 className="text">Платформа с курсами открыта для всех</h3>

              <div className="con">

                <div className="but" ><input className="butcenter" type="button" value="Смотреть"/> </div>
                
                <div className="butwo"></div>
                
                </div>
            </div>
        </header>
    )
}

export default Down