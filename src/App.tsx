import { Switch,Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Popup } from './components/Popup/Popup';
import { Home } from './pages/home/Home';
import { MonthStatistics } from './pages/monthStatistics/MonthStatistics';


const App =()=> {
  
  return (
    <div className='body__wrapper'>
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
