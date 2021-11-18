import { useState } from "react";

function History(props) {


    

    const removeCalculation = (id) => {
    
        props.deleteCalculations(id);
      }
    

    const loaded = () => {
        return props.calculations.map((calculation) => (
          <div key={calculation._id} className="calculation">
            <h1>{calculation.var1}</h1>
            <h3> {calculation.sign}  </h3>
            <h3>{calculation.var2}</h3>
            <h3>= {calculation.total}</h3>
            <button id="delete" onClick={() => removeCalculation(calculation.id)}>
        DELETE
      </button>
          </div>
        ));
      };
    
      const loading = () => {
        return <h1>Loading...</h1>;
      };

    return (
        <section>
            {props.calculations ? loaded() : loading()}
        </section>
    )
}

export default History;