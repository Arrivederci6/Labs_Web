import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GoodDetail.css'
import { CartContext } from '../../../../store/CartContext';
import PrimaryButton from '../../../../components/PrimaryButton';

const GoodDetails = () => {
    const { id } = useParams();
    const [good, setGood] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchGood = async () => {
            const response = await axios.get(`http://localhost:5500/goods/${id}`);
            setGood(response.data);
        };

        fetchGood();
    }, [id]);

    if (!good) {
        return <div>Loading...</div>;
    }

    return (
        <div className="good-details">
            <h1 className="good-details__title">{good.title}</h1>
            <img src={good.image} alt={good.title} className="good-details__image" />
            <p className="good-details__price">Price: ${good.price}</p>
            <p className="good-details__smoking">Has Smoking: {good.hasSmoking ? 'Yes' : 'No'}</p>
            <Link to="/catalog" className="button" style={{margin: '50px'}}>Back to catalog</Link>
            <button className='button' onClick={() => addToCart(good)}>Add to Cart</button>
</div>
    );
}

export default GoodDetails;
