import { useState } from "react"
import ChatForm from "./components/ChatForm"
import ChatMsg from "./components/ChatMsg"

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  // const chatBody = useRef
  const genBotResponse = async (history) =>{
    const updateHistory = (text) =>{
      setChatHistory(prev=> [...prev.filter(msg => msg.text !== "Thinking...."), {role:"model", text}])
    }
    history = history.map(({role, text}) => ({role, parts: [{text}]}))
    const reqOpt = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({contents: history})
    }

    try{
      // API call
      const response = await fetch(import.meta.env.VITE_API_URL, reqOpt);
      const data = await response.json();

      if(!response.ok) throw new Error(data.error.message || "something went wrong");
      console.log(data);

      // clean chat history
      const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponse)

    }catch(error){
      console.log(error);
    }
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
              Hey there <br />How can I help you
            </p>
          </div>

          {/* render msg dynamically*/}
          {chatHistory.map((chat, index)=>
          <ChatMsg key={index} chat={chat} />
          )}
          
        </div>

        <div className="chatFooter">
          <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} genBotResponse={genBotResponse}/>
        </div>
      </div>
    </div>
  )
}
export default App