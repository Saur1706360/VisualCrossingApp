import React,{Component} from "react";
class Home extends Component{

    render()
    {
        return(
            <div className="container">
                    <div className="row">
                        <div className="col-1 border" style={{backgroundColor:"#606060"}}>

                        </div>
                        <div className="col-3 border text-center">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0JJP-PzaUK5CJFAK9ems0hf3gEQBrqRJ_X8Bxs0xGsOs9Mxq8gVYlTpQs71dNjXNMDx8&usqp=CAU" alt="Visual Crossing Corporation"/>
                        </div>
                        <div className="col-8">
                            <span className="fw-bold">About Visual Crossing : </span><br/>
                            <span>
                                Visual Crossing is a leading provider of weather data and enterprise analysis tools to data scientists, business analysts, professionals, and academics. Founded in 2003, 
                                our mission has always been to empower data consumers and analysts to make better decisions based on high-quality, easy-to-access data. For nearly 20 years Visual Crossing 
                                has been providing enterprise-class solutions to some of the largest businesses in the world.
                                Our weather data API leads the industry by providing the lowest-cost access to all types of weather data for apps, code, and web pages worldwide. 
                                Whether you need historical weather data, weather forecasts, climate summaries, historical weather forecasts, or specialty weather measures such as solar radiation, degree days, and weather alerts, Visual Crossing provides the data that you need for any weather project.
                            </span>
                       </div><br/>
                    </div>
            </div>
        )
    }
};
export default Home;