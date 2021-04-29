import { Component } from 'react';
import './AddRestaurantForm.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';


class AddRestaurantForm extends Component {

   state = {
        name: "", 
        registrationDate: "",
        cuisineType: "",
        address: "",
        contactNumber:"",
        paymentOptions: "",
        restaurantInfo: "",
        // selectedFile: null
    };

    addRestaurant = async (e) => {
        e.preventDefault();
        console.log("before try")
        try {
            console.log("before fetch")
        let fetchResponse = await fetch("/api/restaurantRoutes/addrestaurantform", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                // restaurants: this.state.restaurants,
                name: this.state.name,
                registrationDate: this.state.registrationDate,
                cuisineType: this.state.cuisineType,
                address: this.state.address,
                contactNumber: this.state.contactNumber,
                paymentOptions: this.state.paymentOptions,
                restaurantInfo: this.state.restaurantInfo,
                pictureURL: this.state.pictureURL,
                }) // <-- send this object to server
            }) 
            console.log("fetching response")
        let serverResponse = await fetchResponse.json() // <-- decode fetch response
        console.log("Success, this is jireh:", serverResponse)   // <-- log server response
        // if the order was sent over without errors, set state to empty
        } catch (err) {
        console.error("Error:", err) // <-- log if error 
        }
  }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    // fileSelectedHandler = event => {
    //     this.setState({
    //         selectedFile: event.target.files[0]
    //     })
    // }
    // fileUploadHandler =() => {
    //     const fd = new FormData();
    //     fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    //     axios.post('', fd)
    //         .then(res => {
    //             console.log(res);
    //     });
    // }

    render(){
        return(
            <main className="AddRestaurantForm">
                <nav className="AddRestaurantFormNav">
                    <h1>Add Restaurant Form</h1>
                    <Link to ='../MyRestaurants/MyRestaurants.jsx'>Restaurants</Link>
                </nav>
                <form onSubmit={this.addRestaurant}>
                    <label>
                        <p>Restaurant Name</p>
                        <input name="name"  placeholder="Lau's Cuisine" value={this.state.name} onChange={this.handleChange} />
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
                    <label>
                    <p>Address</p>
                        <input type="text" name="address" placeholder="123 Eats Way" value={this.state.address} onChange={this.handleChange} />                  
                    </label>
                    <label>
                    <p>Contact Number</p>
                        <input type="text" name="contactNumber" placeholder="(416) 225-1234" value={this.state.contactNumber} onChange={this.handleChange} />                  
                    </label>
                    <label>
                    <p>Payment Options</p>
                        <input type="text" name="paymentOptions" placeholder="Cash, Credit card, etc" value={this.state.paymentOptions} onChange={this.handleChange} />                  
                    </label>
                    <label>
                    <p>Additional Information</p>
                        <input type="text" name="restaurantInfo" placeholder="Cash only, indoors and patio, etc" value={this.state.restaurantInfo} onChange={this.handleChange} />                  
                    </label> 
                    <label>
                    <p>Insert Picture with URL</p>
                        <input type="text" name="pictureURL" placeholder="Cash only, indoors and patio, etc" value={this.state.pictureURL} onChange={this.handleChange} />                  
                    </label> 
                    <br></br><br></br>

                    <button onClick={this.addRestaurant}>Add Restaurant</button>
                </form>
            </main>
        )
    }
}

export default AddRestaurantForm;



