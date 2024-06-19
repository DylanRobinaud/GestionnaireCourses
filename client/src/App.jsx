import { useLoaderData } from "react-router-dom";
import ProductComp from "./components/ProductComp/ProductComp";
import FormComp from "./components/FormComp/FormComp";

import "./App.css";

function App() {
  const courses = useLoaderData();
  return (
    <main className="productMain">
      <header>
        <h1 className="productH1">Gestionaire de courses :</h1>
      </header>
      <section>
        <FormComp />
        {courses.map((course, index) => (
          <ProductComp key={course.id} course={course} index={index} />
        ))}
      </section>
    </main>
  );
}

export default App;
