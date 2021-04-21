import React from 'react'
import './SearchResult.css'

const SearchResult = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) => {
    return (
        <div class="searchResult ">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResut__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                           <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult__Price">
                        <h1>{price}</h1>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
