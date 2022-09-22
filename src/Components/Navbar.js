import React from 'react'

function Navbar() {
  return (
    // <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
  
      <div class="d-flex align-items-center justify-content-between">  
          <span class="d-none d-lg-block text-primary "><h2>Students Admin</h2></span>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div>
  
      <div class="search-bar">
        <form class="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
          <button type="submit" title="Search"><i class="bi bi-search"></i></button>
        </form>
      </div>
  
  
    </header>
  )
}

export default Navbar