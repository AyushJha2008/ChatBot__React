import { useState } from "react"
import ChatForm from "./components/ChatForm"
import ChatMsg from "./components/ChatMsg"

const App = () => {
  const [chatHistory, setChatHistory] = useState([])
  const genBotResponse = () =>{
    console.log(history);
  }
  return (
    <div className="cont">
      <div className="botPop">
        <div className="chat-head">
          <div className="head-info">
            <img src="./src/assets/bot.png" />
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="material-symbols-outlined">keyboard_arrow_down</button>
        </div>

        {/* bot msg */}
        <div className="chatBody">
          <div className="msg botMsg">
            <img src="./src/assets/bot.png"  />
            <p className="msg-text">
              Hey there <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia labore consequatur unde provident? Fugit fuga perferendis molestias repellendus impedit.
            </p>
          </div>

          {/* render msg dynamically*/}
          {chatHistory.map((chat, index)=>
          <ChatMsg key={index} chat={chat} />
          )}
          
        </div>

        <div className="chatFooter">
          <ChatForm setChatHistory={setChatHistory} genBotResponse={genBotResponse}/>
        </div>
      </div>
    </div>
  )
}
export default App