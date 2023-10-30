import { Send } from '@mui/icons-material'
import { Box, Button, InputBase, Typography, useMediaQuery, useTheme } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import UserImage from 'components/UserImage'
import WidgetWrapper from 'components/WidgetWrapper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setMessages, setMessage } from 'state'

const SendMessageWidget = ({userId, picturePath, firstName, lastName}) => {
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const [message, setMessage] = useState("");

    const handleMessage = async () => {
    // const formData = new FormData();
    // formData.append("userId", userId);
    // console.log(picturePath, firstName, lastName, userId, formData.userId);
    
    // // {picturePath && formData.append("friendPicturePath", picturePath);}
    
    // formData.append("friendFirstName", firstName);
    // formData.append("friendLastName", lastName);
    // formData.append("text", message);
    // console.log(formData);
    

    const response = await fetch(`http://localhost:3001/messages`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: {
        'userId': userId,
        'picturePath': picturePath,
        'friendFirstName': firstName,
        'friendLastName': lastName,
        'text': message,
      },
    });
    const responseMessage = await response.json();
    console.log(responseMessage);
    dispatch(setMessages({ responseMessage }));

    setMessage("");
  };


  return (

    
    <WidgetWrapper>
            <Box sx={{display: "flex", alignItems: "center"}}>
                <UserImage image={picturePath}/>
                <Typography
              variant="h4"
              color={palette.neutral.dark}
              fontWeight="500"
              ml="2rem"
             
            >
              Send a message
            </Typography>
            </Box>
            <Box p={"1rem"} display={"flex"} alignItems={"center"}>
            <InputBase
          placeholder="Hi, send me a message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "1rem 2rem",
          }}
        />
        <Button
          disabled={!message}
          onClick={handleMessage}
          sx={{
            color: palette.background.dark,
          }}
        >
          <Send />
        </Button>
        </Box>
            
    </WidgetWrapper>
  )
}

export default SendMessageWidget
