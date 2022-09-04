import React,{Component} from "react";
import {Link} from "react-router-dom";
class Header extends Component{
    
  render(){
    return(
       <nav className="navbar navbar-expand-lg navbar-light fixed-top border" style={{backgroundColor:"#F4F5F8"}}>
         <div className="container">
            <Link className="navbar-brand me-1 me-xl-4" to="/" >
                <img className="d-block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkfMBbBRC_XHSqdo0sbVipJDXushi94YM2okEawWv&s" width="80" height="36" style={{borderRadius:"10px"}} alt="Visual Crossing Corporation"/> 
            </Link>
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> 
                <span id="accountToolbar" className="ms-2 order-md-3" data-v-app="">
                    <div className=""><div className="text-nowrap">
                        <Link className="btn btn-sm text-primary px-2 d-inline-flex align-items-center" to="#signinModal" data-bs-toggle="modal" title="Sign in">
                            <i className="fs-5 bi bi-box-arrow-in-right me-lg-1"></i>
                            <span className="d-none d-lg-inline"> Sign in</span>
                            </Link>
                        <Link className="btn btn-sm btn-primary rounded-pill d-inline-flex align-items-center" to="/sign-up" title="Sign up for an account">
                            <i className="fs-5 bi bi-person me-lg-1"></i>
                             <span className="d-none d-lg-inline"> Sign up</span>
                        </Link>
                        </div>
                        </div>
                        </span>
                        <div className="collapse navbar-collapse order-md-2" id="navbarNav">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item"><Link className="nav-link text-nowrap" to="/weather-report">Weather Report</Link></li>
                                <li className="nav-item"><Link className="nav-link text-nowrap" to="/weather-api">Weather API</Link></li>
                                <li className="nav-item"><Link className="nav-link text-nowrap" to="/weather/weather-data-services">Query Builder</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/weather-data-editions">Pricing</Link></li>
                                <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">More</Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to="/resources/">Documentation</Link>
                                    </li>
                                    <div className="ps-2"><strong>Dashboards &amp; Tools</strong>
                                    <div></div>
                                    <li>
                                        <Link className="dropdown-item" to="/weather-history">History</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/weather-forecast">Forecast</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/average-weather">Average Weather</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/frost-dates">Frost Dates</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/weather/weather-data-services">Download Data</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/weather/weather-data-services">API Queries</Link>
                                    </li>
                                    <div className="ps-2 mt-3">
                                        <strong>Maps</strong>
                                    <div></div>
                                    <li>
                                        <Link className="dropdown-item" to="/microstrategy">MicroStrategy</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/about">About Us</Link>
                                    </li>
                                    </div>
                                    </div>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                        <form action="/resources/">
                                            <div className="input-group input-group-sm">
                                                <input className="form-control" type="search" name="s" placeholder="Search docs..." aria-label="Search" required=""/> 
                                                  <button className="btn btn-outline-primary" type="submit">Search</button>
                                            </div>
                                        </form>
                                    </li>
                                    </ul>
                            </div>
                            </div>
                        </nav>
            
    )
  }
}
export default Header;