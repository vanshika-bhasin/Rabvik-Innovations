import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    var stylesForLinks = {textDecoration : 'none', color : 'white'} ;
    return (
        <nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link to='/' className="navbar-brand" style={stylesForLinks}>home</Link>
      <Link to='/dashboard' className="navbar-brand" style={stylesForLinks}>dashboard</Link>
    </div>

    <div className="collapse navbar" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><Link style={stylesForLinks} to='login'>login</Link></li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Header
