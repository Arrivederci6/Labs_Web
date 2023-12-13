import { useParams } from 'react-router-dom';
import { goodsData } from '../Goods/Goods'
import { Link } from 'react-router-dom';
import './GoodDetail.css'

const GoodDetails = ({ goodsData }) => {
    const { id } = useParams();
    const good = goodsData.find(good => good.id === Number(id));

    return (
        <div className="good-details">
            <h1 className="good-details__title">{good.title}</h1>
            <img src={good.image} alt={good.title} className="good-details__image" />
            <p className="good-details__price">Price: ${good.price}</p>
            <p className="good-details__smoking">Has Smoking: {good.hasSmoking ? 'Yes' : 'No'}</p>
            <Link to="/catalog" className="button">Back to catalog</Link>
        </div>
        
    );
}

export default GoodDetails;
