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
    props.createCalculations(newForm);
    setNewForm({
      var1: "",
    sign: "",
    var2: "",
    total: "",
    });
  };

  return (
    <section className = "formcontainer">
      <div class = "hero glitch layers" data-text="#"><span>#</span></div>
      <form onSubmit={handleSubmit}>
        <input className= "Var1"
          type="float"
          value={newForm.var1}
          name="var1"
          placeholder="1st Variable"
          onChange={handleChange}
        />
        <input className= "Sign"
          type="text"
          value={newForm.sign}
          name="sign"
          placeholder="Sign"
          onChange={handleChange}
        />
        <input className = "Var2"
          type="float"
          value={newForm.var2}
          name="var2"
          placeholder="2nd Variable"
          onChange={handleChange}
        />
        <input className = "Total"
          type="float"
          value={newForm.total}
          name="total"
          placeholder="Total"
          onChange={handleChange}
        />
        <input className = "Calculate" type="submit" value="CALCULATE!" />
      </form>
    </section>
  );
}

export default Index;