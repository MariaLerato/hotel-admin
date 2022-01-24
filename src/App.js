// import logo from './logo.svg';
// import React,{useState} from 'react';

// import Styles from './HotelAdmin/Styles.css'
// import {Link,Route,Routes} from 'react-router-dom'
// import Restaurant from './Restaurants/restaurants';
// import LogIn from './Restaurants/login';
// import RestaurantsList from './Restaurants/restaurant-list';
// import AddReview from './Restaurants/addreview';
// import "bootstrap/dist/css/bootstrap.min.css"

// function App() {
//   const [user,setUser] = useState(null)

//   async function login(user = null){
//     setUser(user);
//   }
//   async function logout(){
//     setUser(null)
//   }
//   return (
//     <div className="App">
//     <nav className='navbar navbar-expand navbar-dark bg-dark'>
//       <a href='/restaurants' className='navbar-brand'>
//         Restaurant Reviews
//       </a>
//       <div className='navbar-nav mr-auto'>
//         <li className='nav-item'>
//           <Link to = {"/restaurants"} className="nav-link">
//             Restaurants
//             </Link>
//         </li>
//         <li className='nav-item'>
//           {user ? (
//             <a onClick={logout} className='nav-link' >
//               Logout {user.name}
//             </a>
//           ):(
//             <Link to={"/login"} className='nav-link'>
//               Login
//             </Link>
//           )}
//         </li>
//       </div>
//     </nav>
//     <div className='menu'>
//       <Routes>
//         <Route exact path ={["/","/restaurants"]} component={RestaurantsList}/>
//         <Route path="/restaurants/:id/review"
//         render={(props)=>(
//           <AddReview {...props} user={user}/>
//         )}
//         />
//         <Route path="restaurant/:id"
//         render={(props)=>(
//           <Restaurant {...props} user={user}/>

//         )}
//         />
//          <Route path="login"
//         render={(props)=>(
//           <LogIn {...props} login={login}/>

//         )}
//         />

//       </Routes>
//     </div>
//     </div>
    
//   );
// }

// export default App;
