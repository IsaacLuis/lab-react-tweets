

/*
In the Tweet we will display the user's name, 
user's image, user's handle, tweet 
timestamp and the message.
*/

import ProfileImage from "./ProfileImage";
 import Message from './Message'
 import Timestamp from './Timestamp'
 import Actions from './Actions'
 import User from "./User";


// ...

function Tweet(props) {
  return (
    
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          
          <User userData={props.tweet.user} />
          <Timestamp time={props.tweet.timestamp} />
        // ...
        </div>   
        <Message message={props.tweet.message} />
        
        <Actions />
      </div>
    </div>    


);
  }
export default Tweet  
