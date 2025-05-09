'use client';

import { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import Sidebar from './Sidebar';

export default function Home() {
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
        <div className="tw:min-h-screen tw:flex">
            <Sidebar />

            <div className="tw:flex-1 tw:bg-gray-400 tw:flex tw:items-center tw:justify-center">
                {!username ? (
                    <form onSubmit={handleUsernameSubmit} className="tw:bg-white tw:p-6 tw:rounded tw:shadow-md tw:w-full tw:max-w-sm">
                        <h2 className="tw:text-xl tw:text-gray-500 tw:font-semibold tw:mb-4">Enter your name</h2>
                        <input
                            type="text"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            placeholder="Your name..."
                            className="tw:w-full tw:border tw:text-gray-800 tw:placeholder-gray-500 tw:bg-white tw:rounded tw:px-3 tw:py-2 tw:mb-4"
                        />
                        <button
                            type="submit"
                            className="tw:w-full tw:bg-blue-600 tw:text-white tw:rounded tw:py-2 tw:font-medium hover:tw:bg-blue-700"
                        >
                            Join Chat
                        </button>
                    </form>
                ) : (
                    <div className="tw:bg-white tw:shadow-lg tw:rounded-lg tw:w-full tw:max-w-md tw:p-4">
                        <h1 className="tw:text-2xl tw:text-gray-500 tw:font-bold tw:mb-4">Welcome, {username}!</h1>
                        <div className="tw:h-64 tw:overflow-y-auto tw:mb-4 tw:border tw:rounded tw:p-2">
                            {messages.length === 0 ? (
                                <p className="tw:text-sm tw:text-gray-600">No messages yet.</p>
                            ) : (
                                <ul className="tw:space-y-2">
                            {messages.map((msg, index) => (
                                <li key={index}>
                                <p className="tw:text-xs tw:text-gray-500 tw:mb-1">{msg.username}</p>
                                <div className="tw:bg-blue-100 tw:text-gray-800 tw:rounded tw:px-3 tw:py-2 tw:text-sm">
                                    {msg.message}
                                </div>
                                </li>
                            ))}
                            </ul>
                            )}

                        </div>
                        <form onSubmit={handleSendMessage} className="tw:flex tw:gap-2">
                            <input
                                type="text"
                                placeholder="Enter message..."
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                className="tw:flex-1 tw:border tw:text-gray-800 tw:placeholder-gray-500 tw:rounded tw:px-3 tw:py-2 tw:text-sm"
                            />
                            <button
                                type="submit"
                                className="tw:bg-blue-600 tw:text-white tw:rounded tw:px-4 tw:py-2 tw:text-sm tw:hover:tw:bg-blue-700"
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
