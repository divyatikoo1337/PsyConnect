import { useTheme } from '@emotion/react';
import { Box, Divider, InputBase, Typography } from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import Message from 'components/Message';
import UserImage from 'components/UserImage';
import WidgetWrapper from 'components/WidgetWrapper';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMessages } from 'state';

const MessagesWidget = () => {
  const dispatch = useDispatch();
  // const [try, setTry] = useState({

  // }); 
  const messages = useSelector((state) => state.messages);
  const token = useSelector((state) => state.token);
    const { palette } = useTheme();
    const { _id, picturePath } = useSelector((state) => state.user);

    const getMessages= async () => {
    const response = await fetch(`http://localhost:3001/messages/${_id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch(setMessages({ messages: data }));
  };



  useEffect(() => {
    getMessages();
    console.log(messages);
  }, []); 

  return (
    <WidgetWrapper >        
        <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        
      >
        <FlexBetween gap="1rem"  >
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={palette.neutral.dark}
              fontWeight="500"
              
            >
              Messages
            </Typography>
            
          </Box>
        </FlexBetween>

      </FlexBetween>
        <Divider />

        {/* all messages mapped */}
        {/* { messages.map(() => {

        })} */}

        {/* <Message message={} /> */}
    </WidgetWrapper>
  )
}

export default MessagesWidget;
