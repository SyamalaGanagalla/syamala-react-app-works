import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tooltip } from 'recharts';
import { AreaChart } from 'recharts';
import { Area } from 'recharts';
import  Container  from 'react-bootstrap/Container';
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import ScienceIcon from '@mui/icons-material/Science';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import img1 from './Images/do.png';
import { XAxis } from 'recharts';
 import { YAxis } from 'recharts';
 import { CartesianGrid } from 'recharts';
 import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 import { Button } from 'react-bootstrap';
import img3 from './Images/man.jpg'
 import img2 from './Images/man3.jpg'
const rangeData = [
    {
      "day": "05-01",
      "temperature": [
        -16,
        -8
      ]
    },
    {
      "day": "05-02",
      "temperature": [
        -16,
        0
      ]
    },
    {
      "day": "05-03",
      "temperature": [
        -16,
        0.9
      ]
    },
    {
      "day": "05-04",
      "temperature": [
        -16,
        1
      ]
    },
    {
      "day": "05-05",
      "temperature": [
        -16,
        -8
      ]
    },
    {
      "day": "05-06",
      "temperature": [
        -16,
        0
      ]
    },
    {
      "day": "05-07",
      "temperature": [
        -16,
        0.9
      ]
    },
    {
      "day": "05-08",
      "temperature": [
        -16,
        1
      ]
    },
    {
      "day": "05-09",
      "temperature": [
        -16,
        4
      ]
    }
]
const data = [
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
function System() {
    const [count,setcount]=useState(0);
    return (
    <div>
        <Container>
    <Row style={{marginTop:'30px'}}>
        <Col sm={3}>
            <div  >
                <Row style={{backgroundColor:'white'}} className='b'>
                    <Col sm={6}>
                        
                        <AreaChart
  width={180}
  height={130}
  data={rangeData}
  margin={{
    top: 20, right: 40, bottom: 5, left: 3,
  }}
>
  
 
  <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
  <Tooltip />
</AreaChart>

                       
                    </Col>
                    <Col sm={6}>
                        <div style={{marginTop:'40px',marginLeft:'10px'}}>
                            <h4 >$13,590.00</h4>
                            <p style={{marginLeft:'5px'}}>Stocking Sales</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col sm={3} >
        <div style={{marginLeft:'10px'}} className='b'>
                <Row style={{backgroundColor:'white'}}>
                    <Col sm={6}>
                        
                        <AreaChart
  width={180}
  height={130}
  data={rangeData}
  margin={{
    top: 20, right: 40, bottom: 5, left: 3,
  }}
>
  
 
  <Area dataKey="temperature" stroke="#FB6B90" fill="#FB6B90" fillOpacity={0.3} />
  <Tooltip />
</AreaChart>

                       
                    </Col>
                    <Col sm={6}>
                        <div style={{marginTop:'40px',marginLeft:'5px'}}>
                            <h4 >$2300.43</h4>
                            <p style={{marginLeft:'5px'}}>Morality Sales</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col sm={3}>
        <div style={{marginLeft:'10px'}}>
                <Row style={{backgroundColor:'white'}} className='b'>
                    <Col sm={6}>
                        
                        <AreaChart
  width={180}
  height={130}
  data={rangeData}
  margin={{
    top: 20, right: 40, bottom: 5, left: 3,
  }}
>
  
 
  <Area dataKey="temperature" stroke="#98D7C2" fill="#98D7C2" fillOpacity={0.3} />
  <Tooltip />
</AreaChart>

                       
                    </Col>
                    <Col sm={6}>
                        <div style={{marginTop:'40px',marginLeft:'5px'}} >
                            <h4 >$43,000</h4>
                            <p style={{marginLeft:'5px'}}>Molality Sales</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
        <Col sm={3} >
        <div style={{marginLeft:'10px'}} >
                <Row style={{backgroundColor:'white'}} className='b'>
                    <Col sm={6}>
                        
                        <AreaChart
  width={180}
  height={130}
  data={rangeData}
  margin={{
    top: 20, right: 40, bottom: 5, left: 3,
  }}
>
  
 
  <Area dataKey="temperature" stroke="#F8EA8C" fill="#F8EA8C" fillOpacity={0.3} />
  <Tooltip />
</AreaChart>

                       
                    </Col>
                    <Col sm={6}>
                        <div style={{marginTop:'40px',marginLeft:'5px'}} >
                            <h4 >$3543</h4>
                            <p style={{marginLeft:'5px'}}>Unique Wishes</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
    </Container>
   
        <Row>
    <Col sm={2}>
        <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='c'>
        <div style={{marginLeft:'30px',color:'#D3BBDD'}}><PersonIcon style={{fontSize:'45px'}}/> </div>
            <p style={{marginLeft:'33px'}}>User</p>
        </div>
    </Col>
    <Col sm={2}>
    <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='d'>
        <div style={{marginLeft:'30px',color:'#F8C0C8'}}  ><PlaceIcon style={{fontSize:'40px'}} /> </div>
            <p style={{marginLeft:'33px'}}>map</p>
        </div>
    </Col>
    <Col sm={2}>
    <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='e'>
        <div style={{marginLeft:'33px'}}><ScienceIcon style={{fontSize:'40px',color:'#71E7E0'}} className=''/> </div>
            <p style={{marginLeft:'38px'}}>Lab</p>
        </div>
    </Col>
    <Col sm={2}>
    <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='f'>
        <div style={{marginLeft:'38px'}}><RocketLaunchIcon style={{fontSize:'40px',color:'#FF8370'}}/> </div>
            <p style={{marginLeft:'30px'}}>Delivery</p>
        </div>
    </Col>
    <Col sm={2}>
    <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='g'>
        <div style={{marginLeft:'30px'}}><EqualizerIcon style={{fontSize:'40px',color:'#94C973'}}/> </div>
            <p style={{marginLeft:'33px'}}>Charts</p>
        </div>
    </Col>
    <Col sm={2}>
    <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'20px',width:'150px',height:'100px',padding:'20px'}} className='h'>
        <div style={{marginLeft:'38px'}}><ChatBubbleIcon style={{fontSize:'40px',color:'#FDB750'}}/> </div>
            <p style={{marginLeft:'33px'}}>Comments</p>
        </div>
    </Col>
        </Row>
  
      <Container>
    <Row>
        <Col sm={4}>
            <div style={{marginTop:'38px',marginLeft:'30px'}}>
                
            <Row  style={{backgroundColor:'white'}}>
            <h3 style={{color:'black'}}>Vistiors By Country</h3>
                <Col sm={8}>
                    <img src={img1} height={300} width={300} alt=''/>
                </Col>
                <Col sm={4}>
                    <div style={{marginTop:'100px'}}>
                        <div style={{height:'20px', width:'10px',backgroundColor:'#FBE7C6'}}><p style={{marginLeft:'20px'}}>Germany</p></div>
                        <div style={{height:'20px', width:'10px',backgroundColor:'#A0E7E5',marginTop:'10px'}}><p style={{marginLeft:'20px'}}>Brazil</p></div>
                        <div style={{height:'20px', width:'10px',backgroundColor:'#DF362D',marginTop:'10px'}}><p style={{marginLeft:'20px'}}>France</p></div>
                        <div style={{height:'20px', width:'10px',backgroundColor:'#5885AF',marginTop:'10px'}}><p style={{marginLeft:'20px'}}>Turkey</p></div>
                    </div>
                </Col>
            </Row>
            </div>
        </Col>
        <Col sm={8}>
         
            <div style={{backgroundColor:'white',marginTop:'37px'}}>
            <h3 style={{marginLeft:'10px'}}>Another Chart</h3>
        <AreaChart width={730} height={300} data={data}
  margin={{ top: 50, right: 30, left: 30, bottom: 0 }} >
  <defs>
   
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#FB8DA0" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#FB8DA0" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  
  <Area type="monotone" dataKey="pv" stroke="#FB8DA0" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</div>
        </Col>
    </Row>
    </Container>
    <Container>
        <Row>
            <Col sm={7}>
              
                    <Row style={{marginTop:'30px',height:'70px'}}>
                        <Col sm={8} style={{backgroundColor:'white',borderRadius:'6px'}}>
                            <h2 style={{marginTop:'12px'}}>Latest Orders</h2>
                        </Col>
                        <Col sm={4} style={{backgroundColor:'white'}}>
                        <div style={{height:'40px',backgroundColor:'#A0E7E5',marginTop:'12px',width:'65px',marginLeft:'90px',borderRadius:'6px',color:'white'}} className='Y'><ShoppingCartIcon style={{fontSize:'35px',marginLeft:'15px'}} />
                        <div style={{height:'10px',width:'10px',display:'inline-flex'}}><h6 style={{marginTop:'5px'}} className='Z'>{count}</h6></div>
                        </div>
                      
                        </Col>
                      
                    </Row>
                    <Row style={{marginTop:'30px'}}>
        <div style={{backgroundColor:'white',borderRadius:'7px'}}>
                    <Row  className='t' style={{height:'40px',marginTop:'20px'}}>
                        <Col sm={2} >
                            <h5 style={{marginTop:'12px'}}>Name</h5>
                        </Col>
                        <Col sm={2} >
                            <h5 style={{marginTop:'12px'}}>Order Id</h5>
                        </Col>
                        <Col sm={4} >
                            <h5 style={{marginTop:'12px'}}>Customer</h5>
                        </Col>
                        <Col sm={2} >
                            <h5 style={{marginTop:'12px'}}>Status</h5>
                        </Col>
                        <Col sm={2} >
                            <h5 style={{marginTop:'12px'}}>Cart</h5>
                        </Col>
                    </Row>
                    <hr/>
                    <Row style={{marginTop:'20px',height:'70px'}}  className='t'>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>Sofa</p>
                        </Col>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>#PHD001</p>
                        </Col>
                        <Col sm={4} >
                            <p style={{marginTop:'12px'}}>abc@gmail.com</p>
                        </Col>
                        <Col sm={2} >
                           <Button>In Stock</Button>
                        </Col>
                        <Col sm={2} >
                            <Button onClick={()=> setcount(count+1)}>Add</Button>
                        </Col>
                        
                    </Row>
                    <hr/>
                    <Row style={{marginTop:'20px',height:'70px'}}  className='t'>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>Coat</p>
                        </Col>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>#PHD002</p>
                        </Col>
                        <Col sm={4} >
                            <p style={{marginTop:'12px'}}>bcs@gmail.com</p>
                        </Col>
                        <Col sm={2} >
                           <Button >In Stock</Button>
                        </Col>
                        <Col sm={2} >
                            <Button onClick={()=> setcount(count+1)}>Add</Button>
                        </Col>
                        
                    </Row>
                    <hr/>
                    <Row style={{marginTop:'20px',height:'70px'}}  className='t'>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>Watch</p>
                        </Col>
                        <Col sm={2} >
                            <p style={{marginTop:'12px'}}>#PHD003</p>
                        </Col>
                        <Col sm={4} >
                            <p style={{marginTop:'12px'}}>efg@gmail.com</p>
                        </Col>
                        <Col sm={2} >
                           <Button>In Stock</Button>
                        </Col>
                        <Col sm={2} >
                            <Button onClick={()=> setcount(count+1)}>Add</Button>
                        </Col>
                        
                    </Row>
                    </div>
                    </Row>
            </Col>
            <Col sm={5}>
                <div>
                    <Container>
                    <Row>
                        <div style={{backgroundColor:'white',marginTop:'30px',marginLeft:'10px',borderRadius:'5px'}}>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={8}><h4>Users</h4></Col>
                                <Col sm={4}>Last Month</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>John Doe</Col>
                                <Col sm={3}>Clear</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img3} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>Mark Antony</Col>
                                <Col sm={3}>Clear</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>Nick Claris</Col>
                                <Col sm={3}>In Hold</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img3} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>Cummins</Col>
                                <Col sm={3}>Clear</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>Maxwell</Col>
                                <Col sm={3}>In Hold</Col>
                            </Row>
                            <Row style={{marginTop:'20px'}}>
                                <Col sm={3}>
                                    <div>
                                        <img src={img3} alt='' height={50} width={50} style={{borderRadius:'50%'}} />
                                    </div>
                                </Col>
                                <Col sm={6}>David Warner</Col>
                                <Col sm={3}>Clear</Col>
                            </Row>
                        </div>
                    </Row>
                    </Container>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default System
