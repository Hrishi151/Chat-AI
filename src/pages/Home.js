import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import ChatInputBar from "../components/ChatInputBar";  
import images from '../images/index';
import UpgradeToProButton from '../components/UpgradeToButton';
import { useState } from 'react';

export default function Home() {
  const [chats, setChats] = useState([
    { id: '1', title: 'Explain Quantum Computing' },
    { id: '2', title: 'How to make a search engine' },
    // Add more chats as needed
  ]);

  const handleNewChat = () => {
    const newChatId = String(Date.now()); // Using timestamp as a simple ID
    const newChat = {
      id: newChatId,
      title: `New Chat ${chats.length + 1}`
    };
    setChats([newChat, ...chats]);
  };

  const Divider = () => (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row space-x-[3px]">
        <div className="w-[4px] h-12 bg-gray-300 rounded-full" />
        <div className="w-[4px] h-12 bg-gray-300 rounded-full" />
        <div className="w-[4px] h-12 bg-gray-300 rounded-full" />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-200">
      <main className="flex-1 px-2 py-4 pb-24">
        <TopBar />

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex justify-center gap-2 items-center">
            <div className="w-[150px]">
              <Card
                title="Explore"
                description="Learn how to use chat.ai platform for your needs"
                type="black"
              />
            </div>
            <Divider />
            <div className="flex gap-4">
              <div className="w-[300px]">
                <Card
                  title='"Explain"'
                  description="Quantum computing in simple terms"
                  image={images.explain}
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"How to"'
                  description="Make a search engine platform like google"
                  image={images.howto}
                />
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex justify-center gap-2 items-center">
            <div className="w-[150px]">
              <Card
                title="Capabilities"
                description="How much capable chat.ai to fulfill your needs"
                type="black"
              />
            </div>
            <Divider />
            <div className="flex gap-4">
              <div className="w-[300px]">
                <Card
                  title='"Remember"'
                  description="Quantum computing in simple terms"
                  image={images.remember}
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"Allows"'
                  description="User to provide follow-up corrections"
                  image={images.allows}
                />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex justify-center gap-2 items-center">
            <div className="w-[150px]">
              <Card
                title="Limitation"
                description="How much capable chat.ai to fulfill your needs"
                type="black"
              />
            </div>
            <Divider />
            <div className="flex gap-4">
              <div className="w-[300px]">
                <Card
                  title='"May"'
                  description="Occasionally generate incorrect information"
                  // image="./src/images/may.png"
                  image={images.may}
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"Limited"'
                  description="Knowledge of world and events after 2021"
                  image={images.limited}
                />
              </div>
            </div>
          </div>
        </div>

        <ChatInputBar />
        <UpgradeToProButton />
      </main>
    </div>
  );
}

