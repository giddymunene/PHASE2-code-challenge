import React, {useState} from "react";
const Form = () => {
  const [formData, setFormData] = useState({
          date: "",
          description:"",
          category:"",
          amount:""
  })
  const [isSubmitted, SetIsSubmitted] = useState(false)

const handleChange = (e) =>{
  const {name,value} = e.target
  setFormData(init =>({
      ...init,
      [name]:value
  }))
}

const handleSubmit = (e) => {
  console.log(formData)
  SetIsSubmitted(true)
}

if(isSubmitted){
  return <div>TRANSACTION SUBMITTED SUCCESSFULLY!</div>
}

    return(
        <>
         <div className="container">  
            <h3>Transaction Form</h3>  
        <form className="row g-3" id="Transaction" action="" method="post" onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Date</label>
    <input type="date" class="form-control" id="inputDate" onChange={handleChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputDescription" class="form-label">Description</label>
    <input type="text" class="form-control" required id="inputText" onChange={handleChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputCategory" class="form-label">Category</label>
    <input type="text" class="form-control" required id="Category" onChange={handleChange}/>
  </div>
  <div class="col-md-6">
    <label for="inputAmount" class="form-label">Amount</label>
    <input type="number" class="form-control" required id="inputAmount" onChange={handleChange}/>
  </div>
  
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary"  required id="contact-submit" data-submit="...Sending">ADD TRANSACTION</button>
  </div>
</form>


</div>

        </>
    )
    
}

export default Form;
