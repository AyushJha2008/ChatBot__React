import { useRef } from "react"

const ChatForm = ({chatHistory, setChatHistory, genBotResponse}) => {
    const inputRef = useRef()

    const handleSubmit = (e) =>{
      e.preventDefault()
      const userMsg = inputRef.current.value;
      if(!userMsg) return
      inputRef.current.value = ""

      // update chat history
      setChatHistory((history) => [...history, {role: "user", text: userMsg}]);

      // bot thinking
      setTimeout(()=>
        {setChatHistory((history) => [...history, {role: "model", text:"Thinking...."}]);
          // bot response
          genBotResponse([...chatHistory, {role:"user", text:userMsg}])
        },600);
    }
  return (
    <form className="chatForm" onSubmit={handleSubmit}>
        <input ref={inputRef} type="text" placeholder="message..." required className="msg-input" />
        <button className="material-symbols-outlined" >arrow_upward</button>
      </form>
  )
}

export default ChatForm