import { Link } from "react-router-dom";
import "./ProductComp.css";
import rightArrow from "../../assets/images/right-arrow.png";

function ProductComp({ course }) {
  return (
    <div className="productContainer">
      <ul key={course.id} className="productUl">
        <Link to={`/produit/${course.id}`}>
          <img
            className="productImg"
            src={rightArrow}
            alt="flèche avec un lien"
          />
        </Link>
        <h2>{course.name}</h2>
        <p>{course.category_name}</p>
        <label>
          Quantity :
          <select className="productInput">
            <p>{course.quantity}</p>
            <option value="1">{course.quantity}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <p>{course.status_description}</p>
      </ul>
    </div>
  );
}

export default ProductComp;
