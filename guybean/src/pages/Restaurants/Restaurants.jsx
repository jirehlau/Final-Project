import './Restaurants.css';
import React from 'react';
import AddRestaurant from '../../components/AddRestaurant/AddRestaurant';
import MyRestaurants from '../../components/MyRestaurants/MyRestaurants';
import { Link } from 'react-router-dom';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

 class Restaurants extends React.Component {
  state = {
    name: "",
    registrationDate: "",
    cuisineType: "",
    address: "",
    contactNumber: "", 
    paymentOptions: "",
    restaurantInfo: "",
    pictureURL: "",
} 

async componentDidMount() {
  try {
      let jwt = localStorage.getItem('token')
      let fetchRestaurantsResponse = await fetch('/api/restaurantRoutes/MyRestaurants', {
        method: "GET",
        headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
      }) 
      console.log("fetching something from my restuarants")
      let restaurants = await fetchRestaurantsResponse.json();
      console.log("fetching restaurants response")
      this.setState({restaurantList: restaurants})
      console.log("putting restaurant in state")
  } catch (err) {
      console.error('ERROR:', err) // <-- log if error
  }
}

  render() {
    return (
      <main className="Restaurants">
        <nav>
            <h1>Restaurants</h1>
            <UserLogOut />
        </nav>
        <div>
          <MyRestaurants restaurantList={this.state.restaurantlist} />
        </div>
      </main>
    )
  }
}

export default Restaurants;