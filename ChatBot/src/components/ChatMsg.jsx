import React from 'react'

const ChatMsg = ({chat}) => {
  return (
    <div className={`msg ${chat.role === "model"?'bot':'user'}Msg`}>
        {chat.role === "model" && <img src="./src/assets/bot.png"/> }
        <p className="msg-text">{chat.text}</p>
    </div>
  )
}

export default ChatMsg