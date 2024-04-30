import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import DehazeIcon from '@mui/icons-material/Dehaze';
import img1 from './Images/circle.png';
import img2 from './Images/ui.gif';
import { Button } from 'react-bootstrap';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import Container from 'react-bootstrap/Container';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';
import VerifiedIcon from '@mui/icons-material/Verified';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';
function Home() {
  
  return (
    <div >
    <Row className='two'>
      <Col sm={10}>
     <DehazeIcon style={{fontSize:'30px'}}/>
    </Col>
    <Col sm={2} style={{width:'70%'}}>
      <div className='five'>
    <MarkEmailUnreadIcon style={{fontSize:'30px'}}/>
     <Brightness1Icon style={{fontSize:'30px',marginLeft:'10px'}}/>
    <SettingsIcon style={{fontSize:'30px',marginLeft:'10px'}}/>
  
    <NotificationsIcon style={{fontSize:'30px',marginLeft:'10px'}}/>
    </div>
    </Col>
    </Row>
    <Row className='seven'>
      <Col sm={8}>
        <div style={{backgroundColor:' #4C5270',color:'white',padding:'30px'}}><Row>
          <Col sm={4}><h6 style={{marginTop:'20px',marginLeft:'20px'}}>Dashborad</h6>
          <p style={{marginLeft:'20px'}}>overview of last month</p>
          <h1 className='to' style={{marginLeft:'20px'}}>$6458.89</h1>
          <p style={{marginLeft:'20px'}}>Current Month Earnings</p>
          <h1 className='to' style={{marginLeft:'20px'}}>82</h1>
          <p style={{marginLeft:'20px'}}>Current Month Sales</p>
          <Link to='/system'><Button className='on' style={{marginLeft:'20px'}}>Last Month Salary</Button></Link>
          </Col>
          <Col sm={8}> <img src={img2} alt=''  style={{marginLeft:'50px',height:'250px',marginTop:'50px'}}/></Col></Row>
          <Container>
          <Row style={{marginTop:'50px',padding:'10px',marginRight:'10px'}}>
            <Col sm={3}>
              <Row >
                <Col sm={4}><div className='of'><FolderSharedIcon className='so'/></div></Col>
                <Col sm={8}>
                  <p className='in'>Work Experience</p>
                  <p style={{textAlign:'initial'}}>$3567.80</p>
                </Col>
              </Row>
            </Col>
            <Col sm={3}>
              <Row style={{marginLeft:'10px'}}>
              <Col sm={4}><div className='of'><FolderSharedIcon className='so'/></div></Col>
                <Col sm={8}>
                  <p className='in'>Retail Earnings</p>
                  <p style={{marginRight:'20px'}}>$1568.90</p>
                  </Col>
              </Row>
            </Col>
            <Col sm={3}>
            <Row style={{marginLeft:'10px'}}>
              <Col sm={4}><div className='of'><FolderSharedIcon className='so'/></div></Col>
                <Col sm={8}>
                  <p className='in'>Essence Sales</p>
                  <p style={{marginRight:'20px'}}>$2167.89</p>
                  </Col>
              </Row>
            </Col>
            <Col sm={3}>
            <Row style={{marginLeft:'10px'}}>
              <Col sm={4}><div className='of'><FolderSharedIcon className='so'/></div></Col>
                <Col sm={8}>
                  <p className='in'>Earnings</p>
                  <p style={{marginRight:'20px'}}>$53,567.56</p>
                  </Col>
              </Row>
        
            </Col>
          </Row>
          </Container>
          </div>
      </Col>
      <Col sm={4} ><div  style={{backgroundColor:' #4C5270',height:'520px'}}>
        <img src={img1} alt='' height={380} className='z' />
        <div style={{display:'inline-flex',flexWrap:'wrap',marginLeft:'30px'}}><div style={{backgroundColor:'#81B622',borderRadius:'50%',height:'20px',width:'20px',marginLeft:'10px'}}><p style={{marginLeft:'20px',color:'white'}}>Gadgets</p></div>
        <div style={{backgroundColor:'#FEDE00',height:'20px',width:'20px',marginLeft:'70px',borderRadius:'50%'}}><p style={{marginLeft:'20px',color:'white'}}>Mobiles</p></div>
        <div style={{backgroundColor:'#A16AE8',height:'20px',width:'20px',marginLeft:'70px',borderRadius:'50%'}}><p style={{marginLeft:'20px',color:'white'}}>Laptops</p></div>
       </div>
        <div style={{display:'flex', marginTop:'30px'}}>
        <div style={{backgroundColor:'#8FDDE7',height:'20px',width:'20px',borderRadius:'50%',marginLeft:'100px'}}><p style={{marginLeft:'20px',color:'white'}}>Tabs</p></div>
        <div style={{backgroundColor:'#FB6090',height:'20px',width:'20px',borderRadius:'50%',float:'right',marginLeft:'50px'}}><p style={{marginLeft:'20px',color:'white'}}>Moniters</p></div>
        </div>
        </div></Col>
    </Row>
    <Container>
    <Row>
      <Col sm={3}><div className='card1'>
        <Row>
        <Col sm={6}><p className='if'>Recharge Stock</p>
        <StackedLineChartIcon style={{marginLeft:'20px',color:'white',fontSize:'50px'}}/><br/>
        <StackedLineChartIcon style={{marginLeft:'20px',color:'white',fontSize:'50px'}}/>
        </Col>
        <Col sm={6}>
          <h1 style={{marginTop:'70px'}}>$432</h1>
          <p>jan 01-jan 10</p>
        </Col>
        </Row>
        </div></Col>
      <Col sm={3}><Row><div className='card2'>
        <p style={{marginTop:'20px'}}>Page View</p>
      <h1>$432</h1>
      </div></Row></Col>
      <Col sm={3}><div className='card3'>
        <Row>
          <Col sm={6}>
            <p style={{marginTop:'20px',marginLeft:'20px'}}>Restore Stock</p>
            <h1 style={{marginLeft:'20px'}}>$432</h1>
          </Col>
          <Col sm={6}>
          <GraphicEqIcon style={{marginTop:'70px',fontSize:'70px',color:'white'}}/>
          </Col>
        </Row>
        </div></Col>
      <Col sm={3}><div className='card4'>
        <Row>
          <Col sm={6}>
      
        <Row><p style={{marginTop:'20px',marginLeft:'20px'}}>Recharge Sales</p></Row>
            <Row>
              <Col sm={3}>
                <p style={{fontSize:'10px',marginTop:'30px'}}><div style={{marginLeft:'5px'}}>5089
                5089
                5089
                5089</div>
                </p>
              </Col>
              <Col sm={3}> <p style={{fontSize:'10px'}}>5089
                5089
                5089
                5089
                5089
                5089
               </p></Col>
              <Col sm={3}> <p style={{fontSize:'10px', marginTop:'45px'}}>5089
                5089
                5089</p></Col>
                <Col sm={3}>
                <p style={{fontSize:'10px', marginTop:'30px'}}>5089
                5089
                5089
                5089
              </p>
              </Col>
            </Row>
          </Col>
          <Col sm={6}>
          <h1 style={{marginTop:'70px',marginLeft:'25px'}}>$432</h1>
          <p style={{marginLeft:'50px'}}>jan 01-jan 10</p>
          </Col>
        </Row>
        </div></Col>
    </Row>
    </Container>
    <Container>
      <Row>
        <Col sm={4} >
          <div className='card' style={{height:'250px', marginTop:'40px',borderRadius:'20px',backgroundColor:' #4C5270',color:'white'}}>
          
            <Row style={{marginTop:'20px', marginLeft:'20px'}}>
              <h5>Recent Activities</h5>
            </Row>
            <Row style={{marginTop:'20px'}}>
              <Col sm={5}>
                <p style={{marginLeft:'20px'}}>40 mins Ago</p>
              </Col>
              <Col sm={2}>
                <OfflinePinIcon style={{color:'#FB6B90',fontSize:'30px'}}/>

              </Col>
              <Col sm={5}>
                <h5>Task Updated</h5>
                <p style={{fontSize:'13px'}}>Nickel Updated a Task</p>
              </Col>
            </Row>
            <Row style={{marginTop:'20px'}}>
              <Col sm={5}>
                <p style={{marginLeft:'20px'}}>1 day Ago</p>
              </Col>
              <Col sm={2}>
                <VerifiedIcon style={{color:'#FB6B90',fontSize:'30px'}}/>

              </Col>
              <Col sm={5}>
                <h5>Deal Added</h5>
                <p style={{fontSize:'13px'}}>Parshi Updated a Task</p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={8} >
          <div className='card'  style={{height:'250px', marginTop:'40px',borderRadius:'20px',backgroundColor:' #4C5270',color:'white'}}>
            <Row>
              <h5 style={{marginTop:'20px' , marginLeft:'30px'}}>Order Status</h5>
              <p style={{marginLeft:'30px'}}>overview of Latest Month</p>
            </Row>
            <Row>
              <Col sm={8}>
                <Link to='/status'><Button className='para'><AlarmAddIcon/>Add</Button></Link>
                <DeleteIcon style={{backgroundColor:'#868B8E',height:'40px',width:'40px',borderRadius:'10px',marginLeft:'10px',fontSize:'5px'}}/>
                <ErrorIcon style={{backgroundColor:'#868B8E',height:'40px',width:'40px',borderRadius:'10px',marginLeft:'10px',fontSize:'5px'}}/>
                <InsertDriveFileIcon style={{backgroundColor:'#868B8E',height:'40px',width:'40px',borderRadius:'10px',marginLeft:'10px',fontSize:'5px'}}/>
              </Col>
              <Col sm={4}>
                <Button style={{width:'150px',backgroundColor:'#868B8E',border:'1px solid #868B8E'}}>Search</Button>
                <InsertDriveFileIcon style={{backgroundColor:'#868B8E',marginLeft:'10px',height:'40px',width:'40px'}}/>
              </Col>
            </Row>
            <Container>
            <Row style={{marginTop:'20px'}}>
            
             <Col sm={3}><h5>Invoive</h5></Col>
            <Col sm={2}><h5>Customers</h5></Col>
              <Col sm={2}><div style={{marginLeft:'10px'}}><h5>From</h5></div></Col>
              <Col sm={2}><h5>Price</h5></Col>
            <Col sm={3}><div style={{marginLeft:'20px'}}><h5>Status</h5></div></Col>
              </Row>
              </Container>
           
              <Container>
            <Row style={{marginTop:'20px' }}>
            
             <Col sm={3}><h5>12336</h5></Col>
            <Col sm={2}><h6>Charle Doe</h6></Col>
              <Col sm={2}><div style={{marginLeft:'10px'}}><h6>Russia</h6></div></Col>
              <Col sm={2}><h6>$2356</h6></Col>
            <Col sm={3}><div style={{marginLeft:'20px'}}><Button style={{backgroundColor:'#FB6B90',border:'#FB6B90'}}>Process</Button></div></Col>
              </Row>
              </Container>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home;
