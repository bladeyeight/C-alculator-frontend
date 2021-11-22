

function History(props) {


    

    const removeCalculation = (id) => {
    
        props.deleteCalculations(id);
      }
    

    const loaded = () => {
        return props.calculations.map((calculation) => (
          <div key={calculation._id} className="calculation">
            <h1>{calculation.var1}{calculation.sign}{calculation.var2}={calculation.total}</h1>
            <button className = "deleteHistory" id="delete" onClick={() => removeCalculation(calculation.id)}>
        DELETE
      </button>
          </div>
        ));
      };
    
      const loading = () => {
        return <h1>Loading...</h1>;
      };

    return (
        <section className = "historycontainer">
            {props.calculations ? loaded() : loading()}
        </section>
    )
}

export default History;