import { Component } from 'react';
import './AddRestaurantForm.css';

class AddRestaurantForm extends Component {
   state = {
        restaurants: [{ 
            name: "", 
            registrationDate: "",
            cuisineType: "",
        }],
    };

    addRestaurant = async () => {
        try {
        let fetchResponse = await fetch("/api/restaurantRoutes/AddRestaurantForm", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({restaurants: this.state.restaurants}) // <-- send this object to server
            }) 
        let serverResponse = await fetchResponse.json() // <-- decode fetch response
        console.log("Success:", serverResponse)   // <-- log server response

        // if the order was sent over without errors, set state to empty
        this.setState({restaurants: []})
        } catch (err) {
        console.error("Error:", err) // <-- log if error 
        }
  }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <main className="AddRestaurantForm">
                <h1>Add Restaurant Form</h1>
                {this.state.restaurants.map(r => (
                    <article key={r.restaurants}>
                        <div>{r.name}</div> 
                        <div>{r.registrationDate}</div>
                        <div>{r.cuisineType}</div>
                    </article>
                ))}
                <form>
                    <label>
                        <p>Restaurant Name</p>
                        <input name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Incorporation Date</p>
                        <input type="date" name="registrationDate" value={this.state.registrationDate} onChange={this.handleChange} />
                    </label>
                    <label>
                        <p>Cuisine</p>
                        <select name="cuisineType" value={this.state.cuisineType} onChange={this.handleChange}>
                            <option value="Japanese">Japanese</option>
                            <option value="Korean">Korean</option>
                            <option value="Chinese">Chinese</option>
                            <option value="American">American</option>
                            <option value="Indian">Indian</option>
                            <option value="Italian">Italian</option>
                            <option value="Middle Eastern">Middle Eastern</option>        
                            <option value="Others">Others</option>        
                        </select>    
                    </label>
                    <br></br><br></br>
                    <button onSubmit={this.addRestaurant}>Add Restaurant</button>
                </form>
            </main>
        )
    }
}

export default AddRestaurantForm;



