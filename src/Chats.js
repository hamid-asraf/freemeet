import React from 'react';
import Chat from './Chat';
import "./Chats.css";

function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Mark"
            message="welocome"
            timestamp="30 minuts ago"
            profilePic="https://1847884116.rsc.cdn77.org/hindi/gallery/actor/sushantsinghrajput/sushante_poster.jpg" />
             <Chat
            name="John"
            message="welocome"
            timestamp="50 minuts ago"
            profilePic="https://1847884116.rsc.cdn77.org/hindi/gallery/actor/shahidkapoor/shahid_poster.jpg" />
             <Chat
            name="Sunny"
            message="welocome"
            timestamp="55 minuts ago"
            profilePic="https://1847884116.rsc.cdn77.org/hindi/gallery/actor/taahashah/taaha_poster.jpg" />
             <Chat
            name="irfan"
            message="welocome"
            timestamp="56 minuts ago"
            profilePic="https://1847884116.rsc.cdn77.org/hindi/gallery/actor/varundhawan/varon_poster.jpg" />
             <Chat
            name="ranveer"
            message="welocome"
            timestamp="100 minuts ago"
            profilePic="https://1847884116.rsc.cdn77.org/hindi/gallery/actor/hrithikroshan/roshan_poster.jpg" />
        </div>
    )
}

export default Chats
