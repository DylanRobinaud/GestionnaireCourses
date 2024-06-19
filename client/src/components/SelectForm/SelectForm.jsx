import { useEffect, useState } from "react";
import connexion from "../../services/connexion";
import "../FormComp/FormComp.css";

function SelectForm({ handleChange, title, name }) {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    const getSelection = async () => {
      try {
        const mySelection = await connexion.get(`/api/${title}`);
        setSelection(mySelection.data);
      } catch (error) {
        console.error(error);
      }
    };
    getSelection();
  }, [title]);
  return (
    <label className="formText" htmlFor={name}>
      {title} :
      <select
        className="formText formInput"
        name={name}
        onChange={handleChange}
        required
      >
        {selection.map((select) => (
          <option key={select.id} value={select.id}>
            {select.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default SelectForm;
