
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Components/Body/Home';
import About from './Components/Body/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Components/Header';
import Charts from './Components/Body/Charts';
import Status from './Components/Body/Status';
import Report from './Components/Body/Report';
import System from './Components/Body/System';
import DashboardIcon from '@mui/icons-material/Dashboard';
function App() {
  return (
   <div>
    <Router>
      <Row>
        <Col sm={2} className='one'>
          
          <Row className='three'> 
        <div className='four'>
          <DashboardIcon/><h5 style={{marginLeft:'7px'}}>Dashboard</h5>
          </div>
          <Header/>
          </Row>
          </Col>
        <Col sm={10} style={{backgroundColor:'black'}}>
          <Routes>
          <Route path='/' exact Component={Home}/>
        <Route path='/Graph Integration' exact Component={About} />
        <Route path='/charts' exact Component={Charts} />
        <Route path='/status' exact Component={Status} />
        <Route path='/report' exact Component={Report} />
        <Route path='/system' exact Component={System} />
        </Routes>
        </Col>
      </Row>
      </Router>
      </div>
  )
}

export default App;