import "./ShopCard.scss"
import { Link } from 'react-router-dom'

import productImage from "../../assets/images/artist-3.jpeg"

function ShopCard() {
  return (
    <section className="shop-card">
        <div className="shop-card__text-wrapper">
        <h2 className="shop-card__title">Our Products</h2>
        <div>
            <p className="shop-card__intro">Pottery crafted to be cherished.</p>
            <p className="shop-card__intro">Just as nature intended.</p>
            <Link to="/products">
            <p className="shop-card__button">Shop Now</p>
            </Link>
            </div>
        </div>
        <div>
            <Link to="/products">
            <img src={productImage} alt="Holding a pottery cup with a natural background" className="shop-card__image" />
            </Link>
        </div>
            
    </section>
  )
}

export default ShopCard
