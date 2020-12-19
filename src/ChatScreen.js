import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('')
    const [messages, setMessages]  = useState([
        {
            name: 'Ellen',
            image: "https://1847884116.rsc.cdn77.org/hindi/gallery/actor/sushantsinghrajput/sushante_poster.jpg",
            message: "whats app"
        },
        {
            name: 'Ellen',
            image: "https://1847884116.rsc.cdn77.org/hindi/gallery/actor/sushantsinghrajput/sushante_poster.jpg",
            message: "how it going"
        },
        {
            message: "how are you allen"
        }
    ]);

    const sendMessage = e => {
        e.preventDefault();
        setMessages([...messages, {message: input}]);
        setInput("");
    }
    return (
        <div className="ChatScreen">
            <p className="ChatScreen__timestamp">YOU MATCHED WITH  ELLEN ON 20/20/20</p>
            {messages.map((message, index) => (
                message.name?(
                    <div key={index} className="chatScreen__message">
                        <Avatar className="chatScreen__image"
                        alt={message.name}
                        src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ):(
                    <div key={index} className="chatScreen__message">
                       
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )                
            ))}
            <form className="chatScreen__input">
                    <input type="text"
                    value={input}
                    onChange={e => setInput(e.target.value) }
                     className="chatScreen__inputField" placeholder="Type your message" />
                    <button className="chatScreen__button" type="submit"
                    onClick={sendMessage}>Send</button>
            </form>       
        </div>
    )
}

export default ChatScreen
