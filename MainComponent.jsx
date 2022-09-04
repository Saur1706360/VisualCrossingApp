import React,{Component} from "react";
import Header from "./Header";
import WeatherReport from "./WeatherReport";
import Home from "./Home";
import styled from "styled-components";
import Footer from "./Footer";
import WeatherAPI from "./WeatherAPI";
import Pricing from "./Pricing";
import QueryBuilder from "./QueryBuilder";
import {Switch,Route,Redirect} from "react-router-dom";

const Container = styled.div`
  display:flex;
  flex-direction:column;
  height:100vh;
  width:100%;
  background: #f8f9fb;
`
const ShowContent = styled.div`
  display:flex;
  flex-direction:column;
  margin-top:30px;
`
class MainComponent extends Component{

    render()
    {
        return(
            <Container>
                <ShowContent><Header/></ShowContent><br/>
                <Switch>
                <Route
                     path="/weather/weather-data-services"
                     component={(props)=>(
                        <ShowContent><QueryBuilder {...props}/></ShowContent>
                     )}
                    />
                    <Route
                     path="/weather-report"
                     component={(props)=>(
                        <ShowContent><WeatherReport {...props}/></ShowContent>
                     )}
                    />
                    <Route
                     path="/weather-api"
                     component={(props)=>(
                        <ShowContent><WeatherAPI {...props}/></ShowContent>
                     )}
                    />
                    <Route
                     path="/weather-data-editions"
                     component={(props)=>(
                        <ShowContent><Pricing {...props}/></ShowContent>
                     )}
                    />
                    <Route
                     path="/home"
                     component={(props)=>(
                        <ShowContent><Home {...props}/></ShowContent>
                     )}
                    />
                    <Redirect from="/" to="/home"/>
                </Switch><br/>
                <ShowContent><Footer/></ShowContent>
            </Container>
        )
    }
};
export default MainComponent;