import React, {useState} from "react";
import SnackOrBoozeApi from "../Api";


/** Form to add snacks or drinks  */

const Form = () =>{
    
    const initialState = {
        name:"",
        description:"",
        recipe: "",
        serve:"",
        type:"snacks"
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
        await SnackOrBoozeApi.postItem(item)
       
    }

    return(
        <div className="form">
            <h1>What would you like to add?</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            />

            <label htmlFor="description">Description</label>
            <input 
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            />

            <label htmlFor="recipe">Recipe</label>
            <input 
            name="recipe"
            id="recipe"
            value={formData.recipe}
            onChange={handleChange}
            />
            
            <label htmlFor="serve">Serve</label>
            <input 
            name="serve"
            id="serve"
            value={formData.serve}
            onChange={handleChange}
            />

            <label htmlFor="type">Type</label>
            <select name="type" id="type" value={formData.type} onChange={handleChange}>
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