const App = () => {
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

          {/* user msg */}
          <div className="msg userMsg">
            <p className="msg-text">
              what can you do <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque repellendus qui impedit, esse inventore?
            </p>
          </div>

          <div className="msg botMsg">
            <img src="./src/assets/bot.png"  />
            <p className="msg-text">
              Hey there <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia labore consequatur unde provident? Fugit fuga perferendis molestias repellendus impedit.
            </p>
          </div>

          {/* user msg */}
          <div className="msg userMsg">
            <p className="msg-text">
              what can you do <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque repellendus qui impedit, esse inventore bolsoc disper vokter Lorem ipsum dolor sit amet.?
            </p>
          </div>

          <div className="msg botMsg">
            <img src="./src/assets/bot.png"  />
            <p className="msg-text">
              Hey there <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia labore consequatur unde provident? Fugit fuga perferendis molestias repellendus impedit.
            </p>
          </div>

          {/* user msg */}
          <div className="msg userMsg">
            <p className="msg-text">
              what can you do <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis itaque repellendus qui impedit, esse inventore?
            </p>
          </div>

          <div className="msg botMsg">
            <img src="./src/assets/bot.png"  />
            <p className="msg-text">
              Hey there <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia labore consequatur unde provident? Fugit fuga perferendis molestias repellendus impedit.
            </p>
          </div>


        </div>

        <div className="chatFooter">
          <form action="#" className="chatForm">
            <input type="text" placeholder="message..." required className="msg-input" />
            <button className="material-symbols-outlined" >arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App