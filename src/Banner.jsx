import React, { useState } from 'react'
import './Banner.css'
import {Button} from '@material-ui/core'
import Search from './Search'

function Banner() {
   
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={()=>setShowSearch(!showSearch)} className="banner__searchButton" varient='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and Stretch your imagination</h1>
                <h5>Plain a different kind of getway to uncover the location gems near you.</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
