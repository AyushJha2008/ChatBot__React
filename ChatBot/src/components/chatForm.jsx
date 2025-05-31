import { useRef } from "react"

const ChatForm = ({chatHistory, setChatHistory, genBotResponse}) => {
    const inputRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const userMsg = inputRef.current.value.trim();
        if(!userMsg) return
        inputRef.current.value = ""
        setChatHistory((history) => [...history, {role: "user", text: userMsg}]);
        setTimeout(()=> {setChatHistory((history) => [...history, {role: "model", text:"Thinking...."}]);
        genBotResponse([...chatHistory, {role:"model", text: userMsg}]); },600);
    }
  return (
    <form className="chatForm" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="message..." required className="msg-input" />
            <button className="material-symbols-outlined" >arrow_upward</button>
          </form>
  )
}

export default ChatForm