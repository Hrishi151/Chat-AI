import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import ChatInputBar from "./ChatInputBar";
import UpgradeToProButton from "./UpgradeToButton";

const Layout = () => {
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chat-app-chats");
    return savedChats
      ? JSON.parse(savedChats)
      : [
          { id: 1, title: "Create Html Game Environment..." },
          { id: 2, title: "Apply To Leave For Emergency" },
        ];
  });

  useEffect(() => {
    localStorage.setItem("chat-app-chats", JSON.stringify(chats));
  }, [chats]);

  const handleNewChat = () => {
    const newChatId = Date.now();
    const newChat = {
      id: newChatId,
      title: `New Chat ${chats.length + 1}`,
    };
    setChats([newChat, ...chats]);
  };

  const handleDeleteChat = (id) => {
    setChats((prev) => prev.filter((chat) => chat.id !== id));
  };

  const handleRenameChat = (id) => {
    const chatToRename = chats.find(chat => chat.id === id);
    const newTitle = prompt("Enter new chat title:", chatToRename.title);
    if (newTitle && newTitle !== chatToRename.title) {
      setChats(prev => 
        prev.map(chat => 
          chat.id === id ? {...chat, title: newTitle} : chat
        )
      );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-200 overflow-x-hidden">
      <Sidebar
        chats={chats}
        onNewChat={handleNewChat}
        onDeleteChat={handleDeleteChat}
        onRenameChat={handleRenameChat}
      />
      <main className="flex-1 flex flex-col bg-gray-200">
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <Outlet context={{ chats }} />
        </div>
        <div className="sticky bottom-0 border-t border-gray-200 p-4">
          <ChatInputBar />
          <UpgradeToProButton />
        </div>
      </main>
    </div>
  );
};

export default Layout;
