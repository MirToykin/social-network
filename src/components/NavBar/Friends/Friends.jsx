import React from 'react';
import classes from './Friends.module.css'
import Friend from "./Friend/Friend";

const Friends = (props) => {
  return (
    <div>
      <h2 className={classes.friendsHeader}>Friends</h2>
      <div className={classes.friends}>
        {props.friendsData.map((friend) => <Friend name={friend.name} avaUrl={friend.avaUrl} id={friend.id} key={friend.id}/>)}
      </div>
    </div>
  )
}

export default Friends