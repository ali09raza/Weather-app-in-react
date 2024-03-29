import React, { useState } from "react";
import InputField from "../InputField";
import SearchButton from "../SearchButton";
import HeadingTag from "../HeadingTag";
import Listitems from "../ListItems";
import Sdata from "../Sdata";
import CardListing from "../CardsListing";

import { ReactComponent as Humidity } from '../../assets/icons/humidity-icon.svg';
import { ReactComponent as Wind } from '../../assets/icons/wind-icon.svg';
import CloudImage from '../../assets/images/cloud.png';
import RainingImage from '../../assets/images/raining.png';
import SunImage from '../../assets/images/sun.png';
import './MainDiv.scss';
import axios from 'axios';

const MainDiv = () => {
    const [data, setData] = useState({
        celcius: 10,
        name: 'Lahore',
        humidity: 10,
        speed: 2,
        
        image: SunImage
    });

    const [name, setName] = useState('');

    const handleInputValueChange = (event) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        if (name !== '') {
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=21dd50f3e4449375457c0621c15be4b3&&units=metric`;
            axios.get(apiUrl)
                .then(res =>  {
                    let imagePath = '';
                    if (res.data.weather[0].main === "Clouds") {
                        imagePath = CloudImage;
                    } else if (res.data.weather[0].main === "Rain") {
                        imagePath = RainingImage;
                    } else {
                        imagePath = SunImage;
                    }
                    console.log(res);

                    setData({
                        ...data,
                        celcius: res.data.main.temp,
                        name: res.data.name,
                        humidity: res.data.main.humidity,
                        speed: res.data.wind.speed,
                        
                        image: imagePath
                    });
                })
                .catch(err => console.log(err));
        }
    };
    const handleClickNew = (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21dd50f3e4449375457c0621c15be4b3&&units=metric`;
        axios.get(apiUrl)
            .then(res =>  {
                let imagePath = '';
                if (res.data.weather[0].main === "Clouds") {
                    imagePath = CloudImage;
                } else if (res.data.weather[0].main === "Rain") {
                    imagePath = RainingImage;
                } else {
                    imagePath = SunImage;
                }

                setData({
                    ...data,
                    celcius: res.data.main.temp,
                    name: res.data.name,
                    humidity: res.data.main.humidity,
                    speed: res.data.wind.speed,
                    image: imagePath
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="container">
            <HeadingTag/>
          
            <div className="weather">
                <div className="search">
                    <InputField
                        value={name}
                        onChange={handleInputValueChange}
                    />
                    <SearchButton
                        onClick={handleClick}
                    />
                </div>
                <div className="weatherinfo">
                    <img src={data.image} alt="weather" className="photo" />
                    <div className="head">
                        <h1>{Math.round(data.celcius)}°c</h1>
                    <h2>{data.name}</h2>

                    </div>

                    <div className="details">
                        <div className="col">
                            <Humidity />
                            <Listitems value={data.humidity} name ={"Humidity"}/>
                            <Wind />
                            <Listitems value={data.speed} name ={"Wind"}/>
                            
                        </div>

                    </div>
                </div>
            </div>
            <CardListing cities={Sdata} onClick={handleClickNew}/>
        </div>
        
    );
};

export default MainDiv;