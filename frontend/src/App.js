import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/main';
import Home from './components/main/Home';
import SignUp from './components/main/SignUp';
import Login from './components/main/Login';
import User from './components/user';
import BrowseSpace from './components/main/BrowseSpace';
import UserProvider from './context/UserProvider';
import UserAuth from './auth/UserAuth';
import { useState } from 'react';
import VendorAuth from './auth/VendorAuth';
import Vendor from './components/vendor';
import UserProfile from './components/user/UserProfile';
import ManageBookings from './components/user/ManageBookings';
import AddSpace from './components/vendor/AddSpace';
import ManageSpace from './components/vendor/ManageSpace';
import UpdateData from './components/vendor/UpdateData';
import SpaceDetails from './components/main/SpaceDetails';
import Booking from './components/user/Booking';
import VendorProvider from './context/VendorProvider';

function App() {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [currentVendor, setCurrentVendor] = useState(JSON.parse(sessionStorage.getItem("vendor")));

  return (
    <BrowserRouter>
      <UserProvider currentUser={currentUser}>
        <VendorProvider currentVendor={currentVendor}>
          {/* <VendorProvider> */}
          <Routes>

            <Route path="/" element={<Navigate to="/main/home" />} />

            <Route element={<Main />} path='main'>
              <Route element={<Home />} path='home' />
              <Route element={<SignUp />} path='signup' />
              <Route element={<Login />} path='login' />
              <Route element={<BrowseSpace />} path='browseSpace' />
              <Route element={<SpaceDetails />} path='spacedetails/:spaceid' />
            </Route>

            <Route element={<UserAuth><User /></UserAuth>} path='user'>
              <Route element={<UserProfile />} path='profile' />
              <Route element={<ManageBookings />} path='managebooking' />
              <Route element={<Booking />} path='book/:spaceid' />
            </Route>

            {/* <Route element={<Vendor />} path='vendor'> */}
            <Route element={<VendorAuth><Vendor /></VendorAuth>} path='vendor'>
              <Route element={<AddSpace />} path='add_space' />
              <Route element={<ManageSpace />} path='manage_space' />
              <Route element={<UpdateData />} path='updateData/:id' />
            </Route>

          </Routes>
        </VendorProvider>
      </UserProvider>

    </BrowserRouter >
  );
}

export default App;
