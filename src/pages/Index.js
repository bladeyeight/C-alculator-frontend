import { useEffect, useState } from "react";
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
    handleCalculation(newForm)
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
    console.log(newForm);
    
    
  };
  
  
  const handleCalculation = (newForm) => {
    if (newForm.sign === "+"){
      newForm.total = parseInt(newForm.var1) + parseInt(newForm.var2)
    }else if (newForm.sign === "-"){
      newForm.total = parseInt(newForm.var1) - parseInt(newForm.var2)
    }else if (newForm.sign === "/"){
      newForm.total = parseInt(newForm.var1) / parseInt(newForm.var2)
    }else if (newForm.sign === "*"){
      newForm.total = parseInt(newForm.var1) * parseInt(newForm.var2)
    }
  }


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

  const loaded = () => {
    handleCalculation(newForm);
    return (
    <input className = "Total"
    type="float"
    value={newForm.total}
    name="total"
    placeholder="Total"
  />
    )};

  const loading = () => {
    return <h1 className ="totalLoad">Fill in all fields</h1>;
  };


  return (
    <section >
      <div class = "hero glitch layers" data-text="#"><span>#</span></div>
      <form className = "formcontainer" onSubmit={handleSubmit}>
        <input className= "Var1"
          type="float"
          value={newForm.var1}
          name="var1"
          placeholder="1st Variable"
          onChange={handleChange}
        />
        <select className = "Sign" name="sign" onChange={handleChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option selected value={newForm.sign}>{newForm.sign}</option>
                    <option value="/">/</option>
                    <option value="*">*</option>
            </select>
        <input className = "Var2"
          type="float"
          value={newForm.var2}
          name="var2"
          placeholder="2nd Variable"
          onChange={handleChange}
        />
        {newForm.var1 && newForm.var2 && newForm.sign ? loaded() : loading()}
        
        <input className = "Calculate" type="submit" value="Save" />
      </form>
    </section>
  );
  
}

export default Index;