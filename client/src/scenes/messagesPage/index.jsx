import { Box, useMediaQuery } from '@mui/material'
import FlexBetween from 'components/FlexBetween'
import WidgetWrapper from 'components/WidgetWrapper'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from 'scenes/navbar'
import FriendListWidget from 'scenes/widgets/FriendListWidget'
import MessagesWidget from 'scenes/widgets/MessagesWidget'
import UserWidget from 'scenes/widgets/UserWidget'

const MessagesPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <div>
        <Navbar />
        {isNonMobileScreens && 
        (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box p={"1rem"}>
              <FriendListWidget userId={_id} />
            {/* <UserWidget userId={_id} picturePath={picturePath} /> */}
           </Box>
            <Box flexBasis="45%" sx={{display: "flex", flexDirection: "column", p: "1rem"}}>
                <MessagesWidget />
            </Box>
        </Box>
        )
        }
    </div>
  )
}

export default MessagesPage
