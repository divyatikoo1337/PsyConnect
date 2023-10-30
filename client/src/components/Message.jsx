import React from 'react'
import UserImage from './UserImage'
import { Box } from '@mui/material'

const Message = (message) => {
  // const [user, setUser] = useState(null);

  // const getUser = async () => {
  //   const response = await fetch(`http://localhost:3001/users/${userId}`, {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   const data = await response.json();
  //   setUser(data);
  // };

  // useEffect(() => {
  //   getUser();
  // }, []); 

  // if (!user) {
  //   return null;
  // }

  return (
    <Box sx={{display: "flex"}}>
        <UserImage image={message.friendPicturePath} />
        <Box sx={{display: "flex", flexDirection: "flex-col"}}>
          {`${message.friendFirstName} ${message.friendLastName}`}
          {message.text}
        </Box>
    </Box>
  )
}

export default Message
