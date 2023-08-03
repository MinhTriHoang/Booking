/*import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Booking from './Booking';
import Destination from './Destination';
import UserProfile from './UserProfile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/booking" component={Booking} />
            <Route path="/destination" component={Destination} />
            <Route path="/user-profile" component={UserProfile} />
            {/* Add other routes as needed }
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookingForm from './pages/BookingForm';
import PastBookings from './pages/PastBookings';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/booking-form" element={<BookingForm />} />
      <Route path="/past-bookings" element={<PastBookings />} />
    </Routes>
  </Router>
);

export default App;
