import React, { useState } from "react";

const Navbar = () => {

  const[show,setShow] =useState(false);
  return <>
  <section className="navbar-bg">
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div className="container">
  <a class="navbar-brand" href="#">oollabb</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>


    <span class="navbar-toggler-icon"></span>
  </button>

  <div class={`collapse navbar-collapse ${show ? "show" : " "}`} id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Companies <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Students</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">College/University</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sign in</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
   
    
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Register</button>
    </form>
    </div>

  </div>
</nav>
</section>
</>;
};

export default Navbar;