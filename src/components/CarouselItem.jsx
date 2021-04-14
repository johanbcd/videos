import React from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setFavorite, deleteFavorite} from '../acctions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/images/play-icon.png'
import plusIcon from '../assets/images/plus-icon.png'
import removeIcon from '../assets/images/remove-icon.png'
import { Link } from 'react-router-dom';

const CarouselItem=(props) =>{
    const {id, cover, title, duration, year, isList}=props;
    const handleSetFavorite =()=>{
        props.setFavorite({id, cover, title, duration, year})
    }
    const handleDeleteFavorite =(itemId)=>{
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                <Link to={`/player/${id}`}>
                    <img
                    className="carousel-item__details--img"
                    src={playIcon}
                    alt="Play Icon"
                    />
                </Link>
                {isList ?
                    <img className="carousel-item__details--img" onClick={()=>handleDeleteFavorite(id)} src={removeIcon} alt="remove Icon"/>
                    :
                    <img className="carousel-item__details--img" onClick={handleSetFavorite} src={plusIcon} alt="Plus Icon"/>
                }
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">
                    {`${duration} ${year}`}
                </p>
            </div>
        </div>
    )
}
CarouselItem.propTypes={
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}
const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
}
export default connect(null, mapDispatchToProps)(CarouselItem);