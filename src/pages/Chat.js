import React from "react";
import { useParams } from "react-router-dom";

const Chat = () => {
  const { chatId } = useParams();

  const dummyMessages = [
    { id: 1, text: "Hello! How can I help you today?", sender: "ai" },
    { id: 2, text: "Tell me a joke.", sender: "user" },
    {
      id: 3,
      text: "Why did the scarecrow win an award? Because he was outstanding in his field!",
      sender: "ai",
    },
  ];

  return (
    <div className="min-h-full bg-pink-50 p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Chat #{chatId}</h2>
      <div className="space-y-4">
        {dummyMessages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 max-w-md rounded-xl ${
              msg.sender === "user"
                ? "bg-blue-100 ml-auto text-right"
                : "bg-white"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
