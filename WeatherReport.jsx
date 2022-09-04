import React, {Component} from "react";
import http from "./httpService";
class WeatherReport extends Component{

    state = {
      Form:{Location:""},
      weatherInfoData : {},
      show:-1,
    };

    handleChange = (e)=>{
        let s1 = {...this.state};
        let {currentTarget : input} = e;
        s1.Form[input.name] = input.value;
        this.setState(s1);
    };
     getWeatherInformation = async ()=>{
        let s1 = {...this.state};
        let response = await http.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${s1.Form.Location}?unitGroup=metric&include=current&key=DHQ8X23YQARDENJ3M6V89PQRJ&contentType=json`);
        console.log(response);
        let {data} = response;
        s1.weatherInfoData = data;
        this.setState(s1);
    };
    handleShowDataFormat = (showNo)=>{
     let s1 = {...this.state};
     s1.show = showNo;
     this.setState(s1);
    };
    render()
    {
        let {Form,weatherInfoData,show} = this.state;
        let {Location} = Form;
        console.log(weatherInfoData);
        let {days=[],address=""} = weatherInfoData;
        
        return(
            <div className="container">
                <div className="text-center">
                   <h3>Weather Report</h3>
                </div>
                <form>
                    <div className="row">
                        <div className="col-11">
                          <div class="mb-3">
                            <input 
                              type="text" 
                              className="form-control" 
                              name="Location"
                              onChange={(e)=>this.handleChange(e)}
                              value={Location}
                              placeholder="Enter City..."
                              />
                          </div>
                        </div>
                        <div className="col-1">
                           <button type="button" className="btn btn-primary" onClick={()=>this.getWeatherInformation()}>Search</button>
                        </div>
                    </div>
                </form><br/>
            {days.length > 0 ?<div>
               <div className="bg-primary text-white text-center" style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}>
                 <div className="row">
                    <div className="col">
                       <span style={{fontSize:"30px"}}>{address}</span><br/>
                       <span>Address,partial addresses at lat,lon</span>
                    </div>
                    <div className="col">
                       <span style={{fontSize:"30px"}}>Next 15 days</span><br/>
                       <span>History or forcast data</span>
                    </div>
                    <div className="col">
                    <span style={{fontSize:"30px"}}>US(<sup>o</sup>F,miles)</span><br/>
                       <span>Data Units</span>
                    </div>
                 </div>
               </div>
               <div style={{borderBottomLeftRadius:"10px",borderBottomRightRadius:"10px",backgroundColor:"#F5F4F8",color:"blue",cursor:"pointer"}}>
                 <span>Query Options</span><br/>
                 <span>Data Sections</span>
                 <span style={{marginLeft:"20px"}}>Weather Elements</span>
                 <span style={{marginLeft:"20px"}}>Degree Days</span>
                 <span style={{marginLeft:"20px"}}>Wind & Solar</span>
                 <span style={{marginLeft:"20px"}}>Agriculture</span>
                 <span style={{marginLeft:"20px"}}>Weather Stations</span>
               </div><br/>
               <div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-6" style={{alignItems:"center"}}>
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-api-tab" data-bs-toggle="pill" data-bs-target="#pills-api" type="button" role="tab" aria-controls="pills-api" aria-selected="true" onClick={()=>this.handleShowDataFormat(1)}>API</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-grid-tab" data-bs-toggle="pill" data-bs-target="#pills-grid" type="button" role="tab" aria-controls="pills-grid" aria-selected="false" onClick={()=>this.handleShowDataFormat(2)}>Grid</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-charts-tab" data-bs-toggle="pill" data-bs-target="#pills-charts" type="button" role="tab" aria-controls="pills-charts" aria-selected="false" onClick={()=>this.handleShowDataFormat(3)}>Charts</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-json-tab" data-bs-toggle="pill" data-bs-target="#pills-json" type="button" role="tab" aria-controls="pills-json" aria-selected="false" onClick={()=>this.handleShowDataFormat(4)}>JSON</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-csv-tab" data-bs-toggle="pill" data-bs-target="#pills-csv" type="button" role="tab" aria-controls="pills-csv" aria-selected="false" onClick={()=>this.handleShowDataFormat(5)}>CSV</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2"></div>
                  </div>
               </div>
                { show === -1 || show === 2 ? <div className="table-responsive text-nowrap text-center">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                                <tr>
                                <th scope="col">datetime</th>
                                <th scope="col">tempmax</th>
                                <th scope="col">tempmin</th>
                                <th scope="col">temp</th>
                                <th scope="col">feelslikemax</th>
                                <th scope="col">feelslikemin</th>
                                <th scope="col">feelslike</th>
                                <th scope="col">dew</th>
                                <th scope="col">humidity</th>
                                <th scope="col">precip</th>
                                <th scope="col">precipprob</th>
                                <th scope="col">precipcover</th>
                                <th scope="col">preciptype</th>
                                <th scope="col">snow</th>
                                <th scope="col">snowdepth</th>
                                <th scope="col">windgust</th>
                                <th scope="col">windspeed</th>
                                <th scope="col">winddir</th>
                                <th scope="col">pressure</th>
                                <th scope="col">cloudcover</th>
                                <th scope="col">visibility</th>
                                <th scope="col">solarradiation</th>
                                <th scope="col">solarenergy</th>
                                <th scope="col">uvindex</th>
                                <th scope="col">severerisk</th>
                                <th scope="col">sunrise</th>
                                <th scope="col">sunset</th>
                                <th scope="col">moonphase</th>
                                <th scope="col">conditions</th>
                                <th scope="col">description</th>
                                <th scope="col">icon</th>
                                <th scope="col">stations</th>
                                <th scope="col">source</th>
                                <th scope="col">name</th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                days.map((ele,index1)=>(
                                        <tr key={{index1}}>
                                            <td>{ele.datetime}</td>
                                            <td>{ele.tempmax}</td>
                                            <td>{ele.tempmin}</td>
                                            <td>{ele.temp}</td>
                                            <td>{ele.feelslikemax}</td>
                                            <td>{ele.feelslikemin}</td>
                                            <td>{ele.feelslike}</td>
                                            <td>{ele.dew}</td>
                                            <td>{ele.humidity}</td>
                                            <td>{ele.precip}</td>
                                            <td>{ele.precipprob}</td>
                                            <td>{ele.precipcover}</td>
                                            <td>{ele.preciptype}</td>
                                            <td>{ele.snow}</td>
                                            <td>{ele.snowdepth}</td>
                                            <td>{ele.windgust}</td>
                                            <td>{ele.windspeed}</td>
                                            <td>{ele.winddir}</td>
                                            <td>{ele.pressure}</td>
                                            <td>{ele.cloudcover}</td>
                                            <td>{ele.visibility}</td>
                                            <td>{ele.solarradiation}</td>
                                            <td>{ele.solarenergy}</td>
                                            <td>{ele.uvindex}</td>
                                            <td>{ele.severerisk}</td>
                                            <td>{ele.sunrise}</td>
                                            <td>{ele.sunset}</td>
                                            <td>{ele.moonphase}</td>
                                            <td>{ele.conditions}</td>
                                            <td>{ele.description}</td>
                                            <td>{ele.icon}</td>
                                            <td>{ele.stations}</td>
                                            <td>{ele.source}</td>
                                            <td>{ele.name}</td>
                                        </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                :
                show === 1 ? 
                <div className="text-center" style={{height:"100px",width:"100%",overflowX:"auto",border:"1px solid black",padding:"20px"}}>
                   {`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Location}?unitGroup=metric&include=current&key=DHQ8X23YQARDENJ3M6V89PQRJ&contentType=json`}
                </div> : show === 3 ? <div className="text-center" style={{height:"100px",width:"100%",overflowX:"auto",border:"1px solid black",padding:"20px"}}>
                   Chart Is Not Found
                </div> : show === 4 ? <div className="text-center" style={{height:"500px",width:"100%",overflowX:"auto",border:"1px solid black",padding:"20px"}}>
                   {JSON.stringify(weatherInfoData)}
                </div> : <div className="text-center" style={{height:"100px",width:"100%",overflowX:"auto",border:"1px solid black",padding:"20px"}}>
                   CSV Is Not Found
                </div>
                }
            </div>
            :""}
        </div>
        )
    }
};
export default WeatherReport;