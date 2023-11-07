import { Link } from "react-router-dom";
import PubPreview from './PubPreview';
import { useState, useEffect, useContext } from 'react';
import context from "../context/context"


const PubList = () => {
    // // const [pubs, setPubs] = useState([])
    // const [pubs, setPubs] = useState([])

    // const getpubs = async () => {
    //     const res = await fetch('http://localhost:8000/pubs')
    //     const resPubs = await res.json()
    //     console.log(resPubs[0])
    //     setPubs(resPubs)
    // }

    // useEffect(() => {
    //     console.log("useEffect ran")
    //     getpubs()
    // }, [])
    const pubs = useContext(context)

    return (
        <div className='PubsList'>
            {pubs.map((pub) => (
                // <Link key={pub.id} to={`/pubs/${pub.id}`}>
                <PubPreview pub={pub} />
                // </Link>
            ))}
        </div>
    )
}

export default PubList