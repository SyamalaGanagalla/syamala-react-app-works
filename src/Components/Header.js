import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PieChartIcon from '@mui/icons-material/PieChart';
import ReportIcon from '@mui/icons-material/Report';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DataUsageIcon from '@mui/icons-material/DataUsage';
function Header() {
  return (
    <div>
      <ul style={{marginTop:'70px',listStyleType:'none'}}>
       <Link to='/syamala-react-app-works' style={{color:'white',textDecoration:'none'}}><li style={{fontSize:'20px'}}><HomeIcon style={{marginRight:'5px',marginBottom:'8px'}}/>Home</li></Link>
        <Link to='/Graph Integration' style={{color:'white',textDecoration:'none'}}> <li style={{marginTop:'70px',fontSize:'20px'}}><AssessmentIcon style={{marginRight:'5px',marginBottom:'8px'}}/>Graph Integration</li></Link>
        <Link to='/charts' style={{textDecoration:'none'}}><li style={{marginTop:'70px',color:'white',fontSize:'20px'}}><PieChartIcon style={{marginRight:'5px',marginBottom:'8px'}}/>Charts</li></Link>
        <Link to='/status' style={{textDecoration:'none'}}><li style={{marginTop:'70px',color:'white',fontSize:'20px'}}><DataUsageIcon style={{marginRight:'5px',marginBottom:'8px'}}/>Status</li></Link>
        <Link to='/report' style={{textDecoration:'none'}}><li style={{marginTop:'70px',color:'white',fontSize:'20px'}}><ReportIcon style={{marginRight:'5px',marginBottom:'8px'}}/>Report</li></Link>
        <Link to='/system' style={{textDecoration:'none'}}><li style={{marginTop:'70px',color:'white',fontSize:'20px'}}><SettingsSuggestIcon style={{marginRight:'5px',marginBottom:'8px'}}/>System</li></Link>
      </ul>
    </div>
  )
}

export default Header
