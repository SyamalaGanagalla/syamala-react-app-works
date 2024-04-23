import React,{ PureComponent } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Button } from 'react-bootstrap';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonitorIcon from '@mui/icons-material/Monitor';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import { Tooltip } from 'recharts';
import { CartesianGrid } from 'recharts';
import { LineChart } from 'recharts';
import { Line } from 'recharts';
import { Legend } from 'recharts';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataitem = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]
const dataITEMS = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800,
    "amt": 2500
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]

export default class About extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/area-chart-different-shapes-z94k6';

  render() {
  return (
    <div>
      <Row style={{marginTop:'50px'}}>
        <Col sm={6}>
        
          <Row>
            <Col sm={8}>
              <div style={{display:'inline-flex'}}>
           <RocketLaunchIcon  style={{fontSize:'40px',color:'white'}}/>
           <h4 style={{marginLeft:'20px',marginTop:'10px',color:'white'}}>BANDWIDTH REPORTS</h4></div>
            </Col>
            <Col sm={4}>
              <Button style={{backgroundColor:'#003060',border:'#003060'}}>Tab1</Button>
              <Button style={{backgroundColor:'#003060',border:'#003060',marginLeft:'20px'}}>Tab2</Button>
            </Col>
          </Row>
          <Row>
          <Col sm={6}><div>
            <div style={{display:'inline-flex'}}>
              <h3 style={{color:'white', marginTop:'60px'}}>63%</h3>
              <p style={{marginTop:'60px',marginLeft:'50px',color:'white'}}>Generated Leads</p>

            </div>
            <ProgressBar variant="success" now={63} />
            </div>
            </Col>
           
              <Col sm={6}>
              <div>
            <div style={{display:'inline-flex'}}>
              <h3 style={{color:'white',marginTop:'60px'}}>32%</h3>
              <p style={{marginTop:'60px',marginLeft:'50px',color:'white'}}>Submitted Tickets</p>

            </div>
            <ProgressBar variant="danger" now={32}  /></div>
            </Col>
          <Col sm={6}><div></div></Col>
          </Row>
          <Row>
          <Col sm={6}><div>
            <div style={{display:'inline-flex'}}>
              <h3 style={{color:'white',marginTop:'40px'}}>71%</h3>
              <p style={{marginTop:'40px',marginLeft:'50px',color:'white'}}>Server Allocation</p>

            </div>
            <ProgressBar variant="primary" now={71} />
            </div>
            </Col>
           
              <Col sm={6}>
              <div>
            <div style={{display:'inline-flex',color:'white'}}>
              <h3 style={{color:'white',marginTop:'40px'}}>41%</h3>
              <p style={{marginTop:'40px',marginLeft:'50px'}}>Generated Leads</p>

            </div>
            <ProgressBar variant="warning" now={41} /></div>
            </Col>
          <Col sm={6}><div></div></Col>
          </Row>
          <ResponsiveContainer width="100%" height="50%">
          <h5 style={{marginLeft:'150px',marginTop:'30px',color:'white'}}>175.5% increased server resources</h5>
        <AreaChart
       
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
         
        >
          
          <Area type="monotone" dataKey="uv" stroke="#FC2E20" fill="#FC2E20" />
        </AreaChart>
      </ResponsiveContainer>
        </Col>
        <Col sm={6}>
       
          <Row>
           
            <Col sm={6}>
            <div className='card5' >
             <Row>
              <div>
             <div style={{marginTop:'50px',marginLeft:'120px'}}><SettingsIcon style={{fontSize:'30px',backgroundColor:'white',borderRadius:'50%',height:'50px',width:'50px',color:'#36EEE0'}}/></div>
             <h1 style={{fontSize:'50px',marginLeft:'90px',color:'white'}}>87,4</h1>
             <p style={{marginLeft:'70px',color:'white'}}>Reports Generated</p>
             <div style={{display:'inline-flex',color:'white'}}><KeyboardArrowUpIcon style={{marginLeft:'90px'}}/><p>54.9%</p></div>
             </div>
             </Row>
            </div>
            </Col>
            <Col sm={6}>
            <div className='card6'>
             <Row>
             <div style={{marginTop:'50px',marginLeft:'120px'}}><MonitorIcon style={{fontSize:'30px',backgroundColor:'white',borderRadius:'10px',height:'50px',width:'50px',color:'#050A30'}}/></div>
             <h1 style={{fontSize:'50px',marginLeft:'90px',color:'white'}}>17.2k</h1>
             <p style={{marginLeft:'120px',color:'white'}}>Profiles</p>
             <div style={{display:'inline-flex',marginLeft:'120px',color:'white'}}><p>62,7%</p><ArrowBackIcon/></div>
             </Row>

            </div>
            </Col>
          </Row>
        
          <Row style={{marginTop:'50px'}}>
            <Col sm={6}>
            <div className='card7'>
             <Row>
             <div style={{marginTop:'50px',marginLeft:'120px'}}><SchoolIcon style={{fontSize:'30px',backgroundColor:'#3D5B59',borderRadius:'5px',height:'50px',width:'50px',color:'white'}}/></div>
             <h1 style={{fontSize:'50px',marginLeft:'90px',color:'white'}}>63.2k</h1>
             <p style={{marginLeft:'100px',color:'white'}}>Bugs Fixed</p>
             <div style={{display:'inline-flex',color:'white'}}><ArrowForwardIcon style={{marginLeft:'90px'}}/><p>72.1%</p></div>
             </Row>
            </div>
            </Col>
            <Col sm={6}>
            
            <div className='card8' >
             <Row>
             <div style={{marginTop:'50px',marginLeft:'120px'}}><SettingsIcon style={{fontSize:'30px',backgroundColor:'#868B8E',borderRadius:'10px',height:'50px',width:'50px',color:'white'}}/></div>
             <h1 style={{fontSize:'50px',marginLeft:'90px',color:'white'}}>45.8k</h1>
             <p style={{marginLeft:'120px',color:'white'}}>Total Views</p>
             <div style={{display:'inline-flex',color:'white'}}><KeyboardArrowUpIcon style={{marginLeft:'120px'}}/><p>175.5%</p></div>
             </Row>
             
            </div>
            </Col>
          </Row>
        </Col>
        
      </Row >
      <Row style={{marginTop:'70px'}}>
        <Col sm={6}>
          <div >
        <AreaChart width={500} height={400} data={dataitem} 
  margin={{ top: 40, right: 50, left: 20, bottom: 30 }} className='child1'>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#E57F84" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#E57F84" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#4297A0" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#2F5061" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</div>
        </Col>
        <Col sm={6}>
        <LineChart width={500} height={400} data={dataITEMS} className='child2'
  margin={{ top: 50, right: 50, left: 20, bottom: 30 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="pv" stroke="#FF4500" />
  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
</LineChart>
          </Col>
      </Row>
    </div>
  )
}
}

