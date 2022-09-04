import React,{Component} from "react";
class Footer extends Component{

    render()
    {
        return(
              <footer class="text-center text-light border"style={{backgroundColor:"#1F1B2D"}}>
                <div class="container p-4">
                    <section class="mb-4">
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"></i
                    ></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"></i></a>
                    </section>
                    <section class="">
                    <form action="">
                        <div class="row d-flex justify-content-center">
                        <div class="col-auto">
                            <p class="pt-2">
                            <strong>Sign up for Weather Information</strong>
                            </p>
                        </div>
                        <div class="col-md-5 col-12">
                            <div class="form-outline form-white mb-4">
                            <input type="email" id="form5Example21" class="form-control" />
                            <label class="form-label" for="form5Example21">Email address</label>
                            </div>
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-light mb-4">
                            Subscribe
                            </button>
                        </div>
                        </div>
                    </form>
                    </section>
                    <section class="mb-4">
                    <p>
                    Visual Crossing is a leading provider of weather data and enterprise analysis tools to data scientists, business analysts, professionals, and academics.
                    </p>
                    </section>
                    <section class="">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Weather</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-light">Weather Data</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">Weather API</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">Excel</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Abouts</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-light">About US</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">Support</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">Docs</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Profile</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-light">Sign Up</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">My Account</a>
                            </li>
                        </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Weather Report</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                            <a href="#!" class="text-light">View Report</a>
                            </li>
                            <li>
                            <a href="#!" class="text-light">Download</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>
                </div>
                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright:
                    <a class="text-light" href="https://mdbootstrap.com/">. Visual Crossing Corporation</a>
                </div>
              </footer>
        )
    }
};
export default Footer;