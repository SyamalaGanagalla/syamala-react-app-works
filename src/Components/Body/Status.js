import React from 'react'
import Row from 'react-bootstrap/Row'
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import Col from 'react-bootstrap/Col'
import TocIcon from '@mui/icons-material/Toc';
import Table from 'react-bootstrap/Table';
function Status() {
  return (
    <div>
    <Row style={{backgroundColor:'white'}}>
       <Col sm={10}>
        <div style={{display:'inline-flex',marginTop:'10px'}}>
        <AutoAwesomeMosaicIcon style={{marginTop:'3px',marginLeft:'50px',fontSize:'60px'}}/>
      
      
        <h3 style={{marginLeft:'20px',marginTop:'20px'}}>Easy Dyanamic Tables</h3> </div></Col>
      
       <Col sm={2} >
        <div style={{marginTop:'10px'}}><TocIcon style={{fontSize:'60px'}}/></div>
       </Col>
    </Row>
    <Row style={{marginTop:'40px',padding:'30px'}}>
       <div>
        <Table striped>
        <thead>
        <tr style={{height:'100px'}}>
          <th><p style={{marginLeft:'30px'}}>First Name</p></th>
          <th>  <p style={{marginLeft:'20px'}}>Last Name</p></th>
          <th> <p style={{marginLeft:'20px'}}>Age</p></th>
          <th> <p style={{marginLeft:'20px'}}>Status</p></th>
          <th> <p style={{marginLeft:'20px'}}>Visits</p></th>
        </tr>
      </thead>
      <tbody>
        <tr className='data' >
          <td> <p style={{marginLeft:'20px',marginTop:'20px'}}>john</p></td>
          <td> <p style={{marginLeft:'20px',marginTop:'10px'}}>doe</p></td>
          <td> <p style={{marginLeft:'20px',marginTop:'10px'}}>29</p></td>
          <td> <p style={{marginLeft:'20px',marginTop:'10px'}}>relationship</p></td>
          <td> <p style={{marginLeft:'20px',marginTop:'10px'}}>84</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>moris</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>clark</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>25</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>20</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>nick</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>wiley</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>19</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>10</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>keith</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>marion</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>24</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>complicated</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>99</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>martin</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>tristin</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>15</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>complicated</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>3</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>victor</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>jessie</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>23</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>99</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>wave</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>dave</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>12</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>1</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>dan</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>brian</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>29</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>relationship</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>99</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>calors</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>shane</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>14</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>70</p></td>
        </tr>
        <tr  className='data'>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>miles</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>liam</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>21</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>single</p></td>
          <td><p style={{marginLeft:'20px',marginTop:'20px'}}>1</p></td>
        </tr>
       
        </tbody>
        </Table>
       </div>
    </Row>
    </div>
  )
}

export default Status
