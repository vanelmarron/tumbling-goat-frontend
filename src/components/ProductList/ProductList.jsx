import "./ProductList.scss";
import { useState } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

import AddedToCart from "../../modals/AddedToCart/AddedToCart";
import ProductListCard from "../ProductListCard/ProductListCard";

function ProductList({ products, baseURL }) {
  const [modalProduct, setModalProduct] = useState(null);

  const handleAddToCart = (product) => {
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  return (
    <section className="product-list">
      <h2 className="product-list__title">Our Products</h2>
      <ul className="product-list__list">
        {products.map((product) => (
          <ProductListCard
            key={product.id}
            product={product}
            baseURL={baseURL}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ul>
      <ReactModal
        isOpen={!!modalProduct}
        onRequestClose={closeModal}
        className="modal"
      >
        {modalProduct && (
          <AddedToCart
            product={modalProduct}
            onClose={closeModal}
          />
        )}
      </ReactModal>
    </section>
  );
}

export default ProductList;
