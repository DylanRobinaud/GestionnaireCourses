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
          <select>
            <option value="1">1 {course.unit}</option>
            <option value="2">2 {course.unit}</option>
            <option value="3">3 {course.unit}</option>
            <option value="4">4 {course.unit}</option>
            <option value="5">5 {course.unit}</option>
          </select>
        </label>
        <p>{course.status_description}</p>
      </ul>
    </div>
  );
}

export default ProductComp;
