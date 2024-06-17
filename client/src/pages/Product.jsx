import { useLoaderData, Link } from "react-router-dom";
import ProductComp from "../components/ProductComp/ProductComp";

function Product() {
  const courses = useLoaderData();
  return (
    <main className="productMain">
      <h1 className="productH1">Mon Produit :</h1>
      <ProductComp course={courses} />
      <Link to="/" className="productBack">
        Retour
      </Link>
    </main>
  );
}

export default Product;
