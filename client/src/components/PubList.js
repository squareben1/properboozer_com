import { Link } from 'react-router-dom';
import PubPreview from './PubPreview';
// import PubData from '../data/pubData'
import { useState, useEffect } from 'react';

const PubList = () => {
    // const [pubs, setPubs] = useState([])
    const [data, setData] = useState([])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const resData = await res.json()
        console.log(resData[0])
        setData(resData)
    }

    useEffect(() => {
        console.log("useEffect ran")
        getData()
    })

    return (
        <div className='PubsList'>
            <Link>
                <PubPreview />
            </Link>
            <ul>
                {data.map((post) => (
                    <div className="PubsList col-8 mb-5 ps-3 mx-auto corder rounded">
                        <h1 className='display-5'>{post.title}</h1>
                        <p className='lead'>{post.body}</p>
                    </div>
                ))}
            </ul>

        </div>
    )
}

export default PubList