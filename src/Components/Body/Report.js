import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { CartesianGrid, Legend } from 'recharts';
import { Bar } from 'recharts';
import { BarChart } from 'recharts';
import { XAxis } from 'recharts';
import { YAxis } from 'recharts';
import  img1 from './Images/pcircle.png'
import { Tooltip } from 'recharts';
import img2 from './Images/p2.png';
import img3 from './Images/glow.gif'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import img4 from './Images/stock1.png';
import img5 from './Images/pro.png';
import img6 from './Images/gif.png';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import img7 from './Images/weather.gif'
const data = [
  {
    "name": "Page A",
    "uv": 4000,
    "pv": 2400
  },
  {
    "name": "Page B",
    "uv": 3000,
    "pv": 1398
  },
  {
    "name": "Page C",
    "uv": 2000,
    "pv": 9800
  },
  {
    "name": "Page D",
    "uv": 2780,
    "pv": 3908
  },
  {
    "name": "Page E",
    "uv": 1890,
    "pv": 4800
  },
  {
    "name": "Page F",
    "uv": 2390,
    "pv": 3800
  },
  {
    "name": "Page G",
    "uv": 3490,
    "pv": 4300
  }
]

 function Report() {
    
  return (
    <div>
    <Row style={{backgroundColor:'#4C5270',height:'60px'}} className='at'>

    </Row>
    <Row>
        <Col sm={8} >
            <div style={{marginLeft:'20px',width:'800px'}} className='no'>
                <Row style={{backgroundColor:'white'}}>
                    <Col sm={6} >
                        <p style={{marginTop:'20px',marginLeft:'10px'}}>Revenue</p>
                    </Col>
                    <Col sm={2}>
                        <Button style={{marginTop:'20px'}}>This Week</Button>
                       
                       
                    </Col>
                    <Col sm={2}>
                    <Button style={{marginTop:'20px'}}>Last Week</Button>
                    </Col>
                    <Col sm={2}>
                    <Button style={{marginTop:'20px'}}>Last Month</Button>
                    </Col>
                </Row>
                <Row>
                  <div style={{backgroundColor:'white'}}>
                  <BarChart width={730} height={400} data={data} className='bar'>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
                  </div>
                </Row>
                    
                   
            </div>
        </Col>
        <Col sm={4}>
       
   <div style={{backgroundColor:'white',padding:'20px',marginLeft:'60px', width:'300px'}} className='no'>
    <Row>
      <Col sm={8}>Total Sales Unit</Col>
      <Col sm={4}><MoreHorizIcon/></Col>
    </Row>
    <img src={img1} alt='' width={300} style={{marginRight:'150px'}} className='A'/></div>
 <div style={{marginTop:'250px',marginLeft:'60px',backgroundColor:'white',width:'300px'}}><img src={img2} alt='' width={200} style={{marginTop:'15px',marginLeft:'50px'}} className='A'/></div> 
        </Col>
    </Row>
    <Row>
      <Col sm={8}>
        <div style={{marginLeft:'30px',marginTop:'40px',width:'100%'}}>
          <Row style={{backgroundColor:'white'}} >
            <Col sm={8}>
              <div style={{padding:'40px'}}><h3>Create Your Earnings Report</h3>
              <p>
            There are many variations of passages
              </p></div>
            </Col>
            <Col sm={4}>
              <Button style={{marginTop:'50px'}}>Import Report</Button>
            </Col>
           
          </Row>
         <Row>
         <Col sm={4}>
          <div style={{backgroundColor:'white',marginTop:'30px',height:'400px'}}>
            <h4 style={{marginLeft:'10px'}}>Weather update</h4>
           <img src={img7} alt='' height={360} width={245}/>
          </div>
         </Col>
         <Col sm={8}>
          <div>
            <Row style={{marginTop:'30px'}}>
              <Col sm={6}>
                <div style={{backgroundColor:'white'}}>
                 
                  <p  style={{marginLeft:'20px'}}> <br/>Basic Progess Bar</p>
                  <img src={img5} height={200} alt='' />
                </div>
              </Col>
              <Col sm={6}>
                <div style={{backgroundColor:'white', height:'260px'}}>
                  <img src={img6} height={200} width={200}  alt='' style={{marginLeft:'20px',marginTop:'20px'}}  className='A'/>
                </div>
              </Col>
            </Row>
            <Row style={{marginTop:'30px'}}>
              <div style={{backgroundColor:'white',marginLeft:'10px'}}>
                <h1>Customs Report</h1>
            <div style={{display:'inline-flex'}}><AspectRatioIcon/><p style={{marginLeft:'10px'}}>Customs managed by viewers</p></div>
               
              </div>
            </Row>
          </div>
         </Col>
         </Row>
          
        </div>
      </Col>
      <Col sm={4}>
       <Row><div style={{backgroundColor:'white',padding:'10px',height:'300px',width:'300px',marginLeft:'70px',marginTop:'60px'}}><img src={img3} alt='' height={250} width={250} style={{marginLeft:'15px',marginTop:'15px'}} /></div></Row>
     
      <Row>
        <div style={{backgroundColor:'white',height:'200px',width:'300px',marginLeft:'70px',marginTop:'50px'}}>
          <div style={{marginLeft:'30px'}}>
            <p style={{marginTop:'10px'}}>
              This Month Review
            
           <h2>$57k</h2></p>
           
           <p>
            Monthly Grow
           14.5%</p>
           </div>
            <img src={img4} alt='' height={60} width={300} />
        </div>
      </Row>
      </Col>
    </Row>
    </div>
  )
}
export default Report
