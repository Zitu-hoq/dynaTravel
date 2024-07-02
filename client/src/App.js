import React from 'react';
import { Route, Routes } from "react-router-dom";

import CustmerDetails from './Rider/CustomerDetails';
import About from "./routes/About";
import Admin from './routes/Admin';
import AdminLogin from './routes/AdminLogin';
import AllTrips from './routes/AllTrips';
import BuyTicket from "./routes/BuyTicket";
import Contact from './routes/Contact';
import Failure from "./routes/Failure";
import Home from "./routes/Home";
import HotelList from './routes/HotelList';
import { default as HotelSearch } from './routes/HotelSearch';
import Login from "./routes/Login";
import Payment from './routes/Payment';
import Profile from './routes/Profile';
import Rider from './routes/Rider';
import RiderSelection from './routes/RiderSelection';
import Service from './routes/Services';
import ShowBus from './routes/ShowBus';
import SignUp from './routes/SignUp';
import Success from "./routes/Success";
import TripDetails from './routes/TripDetails';

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/rider" element={<Rider/>}/>
      <Route path="/RiderSelection" element={<RiderSelection/>}/>
      <Route path="/customer-details" element={<CustmerDetails/>}/>
      <Route path="/buy-ticket" element={<BuyTicket/>}/>
      <Route path="/show-buses" element={<ShowBus/>}/>
      <Route path="/hotellist" element={<HotelList/>}/>
      <Route path="/hotelsearch" element={<HotelSearch/>}/>
      <Route path="/adminlogin" element={<AdminLogin/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/success" element={<Success/>}/>
      <Route path="/failure" element={<Failure/>}/>
      <Route path="/trip-details" element={<TripDetails/>}/>
      <Route path="/all-trips" element={<AllTrips/>}/>
      <Route path="/profile" element={<Profile/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
