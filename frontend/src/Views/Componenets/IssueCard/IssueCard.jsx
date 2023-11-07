import React from 'react';
import './IssueCard.css';

const IssueCard = (props) => {

    // passing info back to parent on click
    const issueHandler = () => {
        props.clicked(props.name);
    }

  return (
    <div className='issue-card' onClick={issueHandler}>
        <h2 className='issue-name'>
            {props.name}
        </h2>
        <h4 className='issue-priority'>
            {props.priority}
        </h4>
        <h5 className='issue-version'>
            {props.version}
        </h5>
    </div>
  )
}

export default IssueCard;