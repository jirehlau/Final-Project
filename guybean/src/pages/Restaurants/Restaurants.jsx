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
      let fetchOrdersResponse = await fetch('/api/orders', {headers: {'Authorization': 'Bearer ' + jwt}})
      let orders = await fetchOrdersResponse.json(); // <------- convert fetch response into a js object

      // put into sate
      this.setState({ orderHistory: orders})
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  }

  render() {
    return (
      <main className="Restaurants">
        <nav>
            <h1>Restaurants</h1>
        </nav>
        <div>
          <AddRestaurant />
          <MyRestaurants />
        </div>
      </main>
    )
  }
}

export default Restaurants;