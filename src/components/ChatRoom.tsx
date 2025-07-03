'use client';

import { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import Sidebar from './Sidebar';

export default function ChatRoom() {
    const [username, setUsername] = useState('');
    const [inputName, setInputName] = useState('');
    const [messages, setMessages] = useState<{ username: string; message: string }[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    let allMessages: { username: string; message: string }[] = [];
    const backendApi = process.env.DB_HOST;

    const handleUsernameSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputName.trim()) {
            setUsername(inputName.trim());
        }
    };

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;
        const payload = {
            username: username,
            message: inputMessage.trim()
        };
        const res = await fetch(`${backendApi}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        // in case the data is needed
        setInputMessage('');
    };
      useEffect(() => {
        Pusher.logToConsole = true;

        const pusher = new Pusher('7e72a4a6c7a4ca00a7a1', {
          cluster: 'ap1'
        });

        const channel = pusher.subscribe('chat');
        channel.bind('message', function (data: any) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { username: data.username, message: data.message }
            ]);
        });

        return () => {
          channel.unbind_all();
          channel.unsubscribe();
        };
      }, []);

    return (
        <div className="min-h-screen flex">
            <Sidebar />

            <div className="flex-1 bg-gray-600 flex items-center justify-center">
                {!username ? (
                    <form onSubmit={handleUsernameSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h2 className="text-xl text-gray-500 font-semibold mb-4">Enter your name</h2>
                        <input
                            type="text"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            placeholder="Your name..."
                            className="w-full border text-gray-800 placeholder-gray-500 bg-white rounded px-3 py-2 mb-4"
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white rounded py-2 font-medium hover:bg-blue-700"
                        >
                            Join Chat
                        </button>
                    </form>
                ) : (
                    <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4">
                        <h1 className="text-2xl text-gray-500 font-bold mb-4">Welcome, {username}!</h1>
                        <div className="h-64 overflow-y-auto mb-4 border rounded p-2">
                            {messages.length === 0 ? (
                                <p className="text-sm text-gray-600">No messages yet.</p>
                            ) : (
                                <ul className="space-y-2">
                            {messages.map((msg, index) => (
                                <li key={index}>
                                <p className="text-xs text-gray-500 mb-1">{msg.username}</p>
                                <div className="bg-blue-100 text-gray-800 rounded px-3 py-2 text-sm">
                                    {msg.message}
                                </div>
                                </li>
                            ))}
                            </ul>
                            )}

                        </div>
                        <form onSubmit={handleSendMessage} className="flex gap-2">
                            <input
                                type="text"
                                placeholder="Enter message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="flex-1 border text-gray-800 placeholder-gray-500 rounded px-3 py-2 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 text-white rounded px-4 py-2 text-sm hover:bg-blue-700"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}
