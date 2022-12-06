import React from 'react'

function Message() {
  return (
    <div className='messages owner'>
        <div className="messageInfo">
            <img src="https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
            <span>Just Now</span>
        </div>
        <div className="messageContent">
            <p>hello</p>
            <img src="https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
        </div>
    </div>
  )
}

export default Message