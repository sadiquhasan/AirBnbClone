import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import {DateRangePicker} from 'react-date-range'
import {Button} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

//DATE PICKER COMPONENT
const Search = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };  

    function handleSelect(ranges){
        setStartDate(ranges.selectionRange.startDate);
        setEndDate(ranges.selectionRange.endDate);
    }

    return (
        <div className="search">
           <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <h2>
               Number of Guests <PeopleIcon /> 
               <input min={0} defaultValue={2} type="number" />
               <Button>Search Airbnb</Button>
            </h2>

        </div>
    )
}

export default Search
