import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/music.jpg';
import profile2 from './image/user.jpg';
import profile3 from './image/py logo.jpg';
import UserCard from './UserCard';

import SingleComment from './SingleComment';
const App = () =>{
	return(

       <div className='ui comments'>
       <UserCard>
         <div>hlo world</div>
          </UserCard>
       <UserCard>
       <SingleComment name='music' date='Today at 5:00PM' text='awesome' 
       picture={profile1}
       />
       </UserCard>
        <UserCard>
       <SingleComment name='user'  date='Today at 7:00PM' text='amazing' 
        picture={profile2}
       /> </UserCard>
        <UserCard>
       <SingleComment name='logo'  date='Today at 9:00PM' text='good' 
       picture={profile3}
       /> </UserCard>
       
       </div>

		)
}
ReactDOM.render(
<App />,
	document.querySelector('#root')
)