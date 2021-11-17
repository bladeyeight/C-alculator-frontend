import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
  const [ calculations, setCalculations ] = useState(null);

  const URL = "https://cscalculatorapi.herokuapp.com/calculator/";

  const getCalculations = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setCalculations(data);
  };

  const createCalculations = async (calculation) => {
    // make post request to create calcuations
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(calculation),
    });
    // update list of calcuations
    getCalculations();
  };

  useEffect(() => getCalculations(), []);

  return (
    <main>
        <Routes>
        <Route exact path="/" element={
          <Index calculations={calculations} createCalculations={createCalculations}/>} />
        <Route
          path="/calculations/:id"
          render={(rp) => (
            <Show
              {...rp}
            />
          )}
        />
      </Routes>
    </main>
  );
}

export default Main;