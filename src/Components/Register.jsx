import React from 'react'
import "./Register.css"
import { NavLink } from 'react-router-dom'
// import image from './Images/Homepageimage.png'
import { FaUserTie,FaPhoneAlt,FaRegEnvelope } from "react-icons/fa";
import { MdLock,MdHomeWork,MdHome,MdLocationOn } from "react-icons/md";
import NavBar from  '../Components/NavBar'

const Register = () => {
    return (
      <div>
        <NavBar />
      <form>
      <h5 className="col-sm-10 offset-sm-4">REGISTER NEW ACCOUNT</h5>
      <div className="row mb-4">
      <label for="inputName" className="col-sm-1 col-from-lavel"><FaUserTie/> FullName</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="inputName" placeholder="FullName" required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputEmail" className="col-sm-1 col-from-lavel"><FaPhoneAlt/> MobileNo</label>
      <div className="col-sm-9">
        <input type="Number" className="form-control" id="inputMobile" placeholder="Mobile NO"required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputEmail" className="col-sm-1 col-from-lavel"><FaRegEnvelope/> Email</label>
      <div className="col-sm-9">
        <input type="email" className="form-control" id="inputEmail" placeholder="Email"required /></div>
    </div>
    <div className="row mb-4">
      <label for="inputPassword" className="col-sm-1 col-from-lavel"><MdLock/> Password</label>
      <div className="col-sm-9">
        <input type="Password" className="form-control" id="inputPassword" placeholder="Password"  required/></div>
    </div>
    <div className="row mb-4">
      <label for="inputAddress" className="col-sm-1 col-from-lavel"><MdHome/> Address</label>
      <div className="col-sm-9">
        <input type="text" className="form-control" id="inputAddress" placeholder="Address" required /></div>
    </div>
    <div className="row mb-3">
      <label for="inputAddress" className="col-sm-1 col-from-lavel" ><MdHomeWork/> State</label>
       <div className="col-sm-3">
       <select className="form-control">
          <option selected>Choose Your State......</option>
          <option>Andaman and Nicobar (UT)</option>
          <option>Andhra Pradesh</option>
          <option>Arunachal Pradesh</option>
          <option>Assam</option>
          <option>Bihar</option>
          <option>Chandigarh</option>
          <option>Chhattisgarh</option>
          <option>Dadra and Nagar Haveli(UT)</option>
          <option>Daman and Diu(UT)</option>
          <option>Delhi</option>
          <option>Goa</option>
          <option>Gujarat</option>
          <option>Haryana</option>
          <option>Himachal Pradesh</option>
          <option>Jammu and Kashmir</option>
          <option>Jharkhand</option>
          <option>Karnataka</option>
          <option>Kerala</option>
          <option>Lakshadweep(UT)</option>
          <option>Madhya Pradesh</option>
          <option>Maharashtra</option>
          <option>Manipur</option>
          <option>Meghalaya</option>
          <option>Mizoram</option>
          <option>Nagaland</option>
          <option>Orissa</option>
          <option>Puducherry(UT)</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>Sikkim</option>
          <option>Tamil Nadu</option>
          <option>Tripura</option>
          <option>Uttar pradesh</option>
          <option>Uttarakhand</option>
          <option>West Bengal</option>
        </select>

        </div>
        <label for="inputAddress" className="col-sm-1 col-from-lavel"><MdHomeWork/> City</label>
        <div className="col-sm-2">
          <input type="text" className="form-control" id="inputAddress" placeholder="City" required /> 
        </div>
        <label for="inputAddress" className="col-sm-1 col-from-lavel"><MdLocationOn/> PinCode</label>
        <div className="col-sm-2">
          <input type="Number" className="form-control" id="inputAddress" placeholder="PinCode" required />
        </div>
    </div>
    <div className="row mb-3">
      <div className="col-sm-8 offset-sm-1">
        <div className="form-check">
         <input className="form-check-input" type="checkbox" id="checkRemenber"></input>
         <label className="form-check=label" for="checkRemember">Remember Me</label>
      </div>
      </div>
      </div>
      <div className="row">
        <div className="col-sm-10 offset-sm-1">
          <button type="submit" className="btn btn-primary">Register</button>
          <div className="col-sm-10 offset-sm-2">
          <button type="submit" className="btn btn-primary"> <NavLink className="col-sm-7 offset-sm-1" to="/Login">Login</NavLink></button>
          </div></div>
      </div>
    </form>
    </div>
  )
}
export default Register
