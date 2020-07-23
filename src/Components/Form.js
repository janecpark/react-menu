import React, {useState, useContext, useEffect} from "react";
import SnackOrBoozeApi from "../Api";


/** Form to add snacks or drinks  */

const Form = () =>{
    const initialState = {
        name:"",
        description:"",
        recipe: "",
        serve:"",
        type:"snack"
    }
    const [formData, setFormdata] = useState(initialState)
    const handleChange = (e) =>{
        const { name, value } =  e.target;
        setFormdata( data =>({
            ...data,
            [name]: value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        addItem(formData)
        setFormdata(initialState)
      
    }

    async function addItem (item){
        let items = await SnackOrBoozeApi.postItem(item)
        
    }

    return(
        <div className="form">
            <h1>What would you like to add?</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            />

            <label htmlFor="name">Description</label>
            <input 
            name="description"
            value={formData.description}
            onChange={handleChange}
            />

            <label htmlFor="name">Recipe</label>
            <input 
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            />
            
            <label htmlFor="name">Serve</label>
            <input 
            name="serve"
            value={formData.serve}
            onChange={handleChange}
            />

            <label htmlFor="type">Type</label>
            <select name="type" value={formData.type} onChange={handleChange}>
            <option value="snacks">Snack</option>
            <option value="drinks">Drink</option>
            </select>
            <br/>
            <button>Submit</button>
             </form>
        </div>
    )
}

export default Form