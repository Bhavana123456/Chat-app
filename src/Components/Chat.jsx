import React from 'react'
import video from '../Assets/video.png'
import more from '../Assets/more.png'
import Messages from './Messages'
import Input from './Input'


function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Bhavana</span>
        <div className="chatIcons">
          <img src={video} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat