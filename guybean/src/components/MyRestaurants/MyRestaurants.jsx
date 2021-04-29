import { Component } from 'react';
import './MyRestaurants.css';

class MyRestaurants extends Component {
    state = {
        restaurantList: [],
    };
    async componentDidMount() {
        try {
            let jwt = localStorage.getItem('token')
            let fetchRestaurantsResponse = await fetch('/api/restaurantRoutes/myrestaurants', {
                method: "GET",
                headers: {"Content-Type": "application/json",'Authorization': 'Bearer ' + jwt},
              }) 
              let restaurant = await fetchRestaurantsResponse.json();   
              console.log(restaurant)      
              this.setState({ restaurantList: restaurant})
            console.log("putting restaurant in state")
        } catch (err) {
            console.error('ERROR:', err) // <-- log if error
        }
      }

    render(){
        return(
            <main className="MyRestaurants">
                <nav className="MyRestaurantsNav">
                </nav>
                <div>
                    {this.state.restaurantList.map(
                        r => r.name,
                    )}
                    <br></br>
                   {this.state.restaurantList.map(
                        r => r.address,
                    )}          
                    <br></br>
                   {this.state.restaurantList.map(
                        r => r.contactNumber,
                    )}       
                    <br></br>
                   {this.state.restaurantList.map(
                        r => r.pictureURL,
                    )}                                      
                </div>
            </main>
        )
    }
}

export default MyRestaurants;