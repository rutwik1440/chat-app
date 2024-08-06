import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {

    const [chats, setChats] = useState([]);
    
    const fetchChats = async () => {
        const {data} = await axios.get('/api/chat');
        setChats(data);
    }
    
    useEffect(() => {
        fetchChats();
    }, []);

    return <div>
        {chats.map(chat => (
            <div key={chat._id}>
                <h3>{chat.chatName}</h3>
            </div>
        ))}
    </div>

}

export default ChatPage