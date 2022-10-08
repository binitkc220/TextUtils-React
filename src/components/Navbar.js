import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handleTheme = (event)=> {
    props.toggleTheme(event.target.value);
  }
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${(props.mode==='light'?props.theme:'dark')}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><b>{props.title}</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            
            <div>
              <button type="button" className="btn btn-primary btn-circle m-2" value="primary" onClick={handleTheme}></button>
              <button type="button" className="btn btn-success btn-circle m-2" value="success" onClick={handleTheme}></button>
              <button type="button" className="btn btn-danger btn-circle m-2" value="danger" onClick={handleTheme}></button>
              <button type="button" className="btn btn-warning btn-circle m-2" value="warning" onClick={handleTheme}></button>
            </div>
            <div className="form-check form-switch mx-3">
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label text-${(props.mode==='light'?'dark':'light')}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-info" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired}
Navbar.defaultProps = {title: "Set title here", aboutText: "About"}