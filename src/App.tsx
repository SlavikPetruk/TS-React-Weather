// import axios from 'axios';
// import { useState } from 'react';
import { Switch,Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';
import { Home } from './pages/home/Home';
import { MonthStatistics } from './pages/monthStatistics/MonthStatistics';


const App =()=> {
  // const [weather, setWeather] = useState([])
  // const fetchWeather =()=> {
  //   const response  = axios.get('https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=366f3b80aaa467d8d0515f18bc018ed1')
  //   console.log(response)
  // }
  // fetchWeather()
  
  return (
    <div>
    <Popup />
    <div className="container">
      <Header/>
      <Switch>
        <Route path='/' component={Home}/>
        <Route path='/month-statistics' component={MonthStatistics}/>
      </Switch>
    </div>
    </div>
  );
}

export default App;
