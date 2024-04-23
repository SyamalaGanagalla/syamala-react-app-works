import React,{PureComponent} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PieChart } from 'recharts';
import { Pie } from 'recharts';
import { ColorPicker } from 'react-color-palette'
import { Cell } from 'recharts';
import { Form } from 'react-router-dom';
import {  ResponsiveContainer } from 'recharts'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import img1 from './Images/pen.jpg';
import img2 from './Images/shirt.jpg';
import img3 from './Images/shoe.jpg';
import img4 from './Images/watch.jpg';
import Container from 'react-bootstrap/Container';
import img5 from './Images/email.jpg'
import Button from 'react-bootstrap/Button'
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];
export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/pie-chart-of-straight-angle-oz0th';
  
    render() {
    
    const data01 = [
    {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 300
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ];
      const data02 = [
        {
          "name": "Group A",
          "value": 2400
        },
        {
          "name": "Group B",
          "value": 4567
        },
        {
          "name": "Group C",
          "value": 1398
        },
        {
          "name": "Group D",
          "value": 9800
        },
        {
          "name": "Group E",
          "value": 3908
        },
        {
          "name": "Group F",
          "value": 4800
        }
      ];
          
      const data = [
        {
          "name": "Group A",
          "value": 400
        },
        {
          "name": "Group B",
          "value": 300
        },
        {
          "name": "Group C",
          "value": 500
        },
        {
          "name": "Group D",
          "value": 200
        },
        {
          "name": "Group E",
          "value": 278
        },
        {
          "name": "Group F",
          "value": 189
        }
      ]
    
  return (
    <div>
    <Row style={{marginTop:'30px'}}>
        <Col sm={4}>
       
        <PieChart width={300} height={250} className='parent1'>
  <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
        </Col>
        <Col sm={4}>
        <PieChart width={300} height={250} className='parent2'>
  <Pie data={data} cx="50%" cy="50%" outerRadius={80} label>
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
  </Pie>
</PieChart>

        </Col>
        <Col sm={4}>
        <ResponsiveContainer width="80%" height="100%" className='parent3'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#EC9EC0"
            label
          />
        </PieChart>
      </ResponsiveContainer>
        </Col>
    </Row>
    <Container>
    <Row style={{marginTop:'70px'}}>
        <Col sm={4}>
          <div  style={{backgroundColor:'white',width:'400px', height:'800px'}}>
            <div style={{marginTop:'40px',marginLeft:'20px',marginBottom:'30px'}}>
                <Row >
                    <Col sm={10}><p style={{marginTop:'20px'}}>Stoke Details</p></Col>
                    <Col sm={2}>
                     <MoreHorizIcon style={{marginTop:'20px'}}/>
                    </Col>
                </Row>
                <Row><hr/></Row>
                <div>
                <Container>
                    <Row >
                   
                      <div style={{display:'inline-flex'}}> 
                    <Col sm={8}><p style={{marginTop:'10px',}}>Product name</p></Col>
                    <Col sm={4}>
                     <p style={{marginTop:'10PX'}}>Market Price</p>
                    </Col>
                    </div>
                   
                    </Row>
                    </Container>
                    <Row><hr/></Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img1} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 1</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 2</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row >
                    <Row>
                        <Col sm={4}>
                      <img src={img4} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 3</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 4</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img3} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 5</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                      <img src={img4} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 6</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img1} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 7</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row>
                        <Col sm={4}>
                      <img src={img2} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 8</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img3} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 9</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    <Row >
                        <Col sm={4}>
                      <img src={img4} alt='' height={50} width={50} style={{borderRadius:'50%',marginTop:'15px'}}/>
                        </Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}> Product 10</p></Col>
                        <Col sm={4}><p style={{marginTop:'20px'}}>$564</p></Col>
                    </Row>
                    </div>
                </div>
            </div>
        </Col>
        <Col sm={4}>
            <div style={{marginTop:'40px',marginLeft:'30px',backgroundColor:'white',height:'800px'}}>
                <Row >
                    <Col sm={10}><h5 style={{marginTop:'30px',marginLeft:'10px',justifyContent:'center'}}>Recent Activity</h5></Col>
                    <Col sm={2}><MoreHorizIcon style={{marginTop:'30px'}}/></Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                    <Col sm={2}>
                        <div style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                    <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <div style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                    <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <div style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                    <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <div style={{backgroundColor:'green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                    <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <div  className='dot'style={{border:'1px solid green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                    <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <div  className='dot'style={{border:'1px solid green',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'10px',marginTop:'5px'}}></div>
                    </Col>
                  
                  <Col sm={10}><p style={{justifyContent:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></Col>
                </Row>
            </div>
        </Col>
        <Col sm={4}>
          <div style={{backgroundColor:'white',marginTop:'40px',height:'800px'}} >
          <Row><h3 style={{marginTop:'20px',marginLeft:'40px'}}>Member request to mail</h3></Row>
          <div><img src={img5} alt='' height={300}  width={300} style={{marginLeft:'40px',borderRadius:'10px',marginTop:'20px'}}/></div>
          
            <input type='text'  placeholder='First name'  style={{marginTop:'20px',marginLeft:'40px', width:'300px',height:'50px',borderRadius:'10px'}}/><br/><br/>
            <input type='text'  placeholder='Last name'  style={{marginTop:'20px',marginLeft:'40px', width:'300px',height:'50px',borderRadius:'10px'}}/><br/><br/>
            <input type='email'  placeholder='Email'  style={{marginTop:'20px',marginLeft:'40px', width:'300px',height:'50px',borderRadius:'10px'}}/><br/><br/>
            <Button style={{marginLeft:'90px' ,marginTop:'20px'}}>send the invitation link</Button>
          </div>
        </Col>
    </Row>
    </Container>
    </div>
  )
}
}
        
