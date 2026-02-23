import "./ProductCard.css";

function ProductCard({
  title,
  image,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
}) {
  return (
    <div className="amazon-card">
      <img src={image} alt={title} className="amazon-image" />

      <div className="amazon-content">
        <h3 className="amazon-title">{title}</h3>

        <div className="amazon-rating">
          <span className="stars">
            {"⭐".repeat(Math.floor(rating))}
          </span>
          <span className="reviews">({reviews})</span>
        </div>

        <div className="amazon-price">
          <span className="current-price">₹{price}</span>
          <span className="original-price">₹{originalPrice}</span>
          <span className="discount">({discount}% off)</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
