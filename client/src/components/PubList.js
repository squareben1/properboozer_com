import { Link } from "react-router-dom";
import PubPreview from './PubPreview';
import { useState, useEffect, useContext } from 'react';
import context from "../context/context"


const PubList = () => {
    const pubs = useContext(context)

    return (
        <div className='PubsList'>
            {pubs.map((pub) => (
                <PubPreview pub={pub} />
            ))}
        </div>
    )
}

export default PubList