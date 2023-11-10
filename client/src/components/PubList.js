import PubPreview from './PubPreview';
import { useContext } from 'react';
import context from "../context/context"


const PubList = () => {
    const pubs = useContext(context)
    console.log(pubs)


    return (
        <div className='PubsList mt-5'>
            {pubs.map((pub) => (
                <PubPreview pub={pub} />
            ))}
        </div>
    )
}

export default PubList