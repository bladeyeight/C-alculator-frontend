import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
  // state to hold formData
  const [ newForm, setNewForm ] = useState({
    var1: "",
    sign: "",
    var2: "",
    total: "",
  });

  // handleChange function for form
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createCalcuations(newForm);
    setNewForm({
      var1: "",
    sign: "",
    var2: "",
    total: "",
    });
  };

  // loaded function
  const loaded = () => {
    return props.calculations.map((calculation) => (
      <div key={calculation._id} className="calculation">
        <Link to={`/calculations/${calculation._id}`}><h1>{calculation.var1}</h1>
        <h3> {calculation.sign}  </h3>
        <h3>{calculation.var2}</h3>
        <h3>{calculation.total}</h3>
        </Link>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="float"
          value={newForm.var1}
          name="var1"
          placeholder="1st Variable"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.sign}
          name="sign"
          placeholder="Sign"
          onChange={handleChange}
        />
        <input
          type="float"
          value={newForm.var2}
          name="var2"
          placeholder="2nd Variable"
          onChange={handleChange}
        />
        <input
          type="float"
          value={newForm.total}
          name="total"
          placeholder="Total"
          onChange={handleChange}
        />
        <input type="submit" value="Create Calculation" />
      </form>
      {props.calculations ? loaded() : loading()}
    </section>
  );
}

export default Index;