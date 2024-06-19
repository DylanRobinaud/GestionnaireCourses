import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../../services/connexion";
import "./FormComp.css";
import SelectForm from "../SelectForm/SelectForm";

const initProduct = {
  name: "",
  category_id: "1",
  quantity: "1",
  status_id: "1",
};

function FormComp() {
  const [formData, setFormData] = useState(initProduct);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await connexion.post("/api/courses", formData);
    } catch (error) {
      console.error(error);
    }
    navigate("/");
  };

  return (
    <section>
      <h1 className="productH1">Formulaire</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
        <label className="formText" htmlFor="name">
          Produit :
        </label>
        <input
          className="formText formInput"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <SelectForm
          handleChange={handleChange}
          name="category_id"
          title="categorie"
        />
        {/* <label className="formText" htmlFor="category_id">
          Catégorie :
          </label>
          <select
          className="formText formInput"
          id="category_id"
          name="category_id"
          value={formData.category_id}
          onChange={handleChange}
          required
          >
          <option value="1">Fruits</option>
          <option value="2">Légumes</option>
          <option value="3">Produits Laitiers</option>
          <option value="4">Viandes</option>
          </select> */}
        <label className="formText" htmlFor="quantity">
          Quantité :
        </label>
        <select
          className="formText formInput"
          id="quantity"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <SelectForm
          handleChange={handleChange}
          name="status_id"
          title="status"
        />
        {/* <label className="formText" htmlFor="status_id">
          Statut :
          </label>
          <select
          className="formText formInput"
          id="status_id"
          name="status_id"
          value={formData.status_id}
          onChange={handleChange}
          required
        >
          <option value="1">A acheter</option>
          <option value="2">Acheté</option>
          <option value="3">Annulé</option>
        </select> */}
        <button className="formText formButton" type="submit">
          Ajouter
        </button>
      </form>
    </section>
  );
}

export default FormComp;
