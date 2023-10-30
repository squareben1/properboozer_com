import { Link } from 'react-router-dom';
import PubPreview from './PubPreview';

const PubList = () => {
    return (
        <div className='PubsList'>
            <Link>
                <PubPreview />
            </Link>
        </div>
    )
}

export default PubList