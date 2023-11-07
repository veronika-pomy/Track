import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIssues } from '../../../Controllers/Redux/issueSlice';
import Sidebar from '../../Componenets/Sidebar/Sidebar';
import IssueCard from '../../Componenets/IssueCard/IssueCard';
import './Dashboard.css';

const Dashboard = () => {

    const dispatch = useDispatch();

    const { issues } = useSelector(state => state);

    // get all saved issues when app is first loaded
    useEffect(() => {
        dispatch(getIssues());
    }, [issues.length < 1])

  return (
    <div className='dashboard-container'>
        <Sidebar />
        {issues.map((issue, key) => {
          <IssueCard key={key} props={issue}/>
        })}
    </div>
  )
}

export default Dashboard;