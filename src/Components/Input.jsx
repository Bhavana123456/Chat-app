import React from 'react'
import clip  from '../Assets/clip.png';
import send from '../Assets/send.png';
import add from '../Assets/add.png'

function Input() {
  return (
    <div className="input">
    <input type="text" placeholder='Type something....' />
    <div className='send'>
    <img src={clip} alt="" />
    <input type="file" style={{display:'none'}} name="" id="file" />
    <label htmlFor="file">
      <img src={add} alt="" />
    </label>
    <button >Send</button>
    </div>
    </div>
  )
}

export default Input