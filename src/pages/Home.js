import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import ChatInputBar from "../components/ChatInputBar";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 pb-32">
        <TopBar />

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card
            title="Explore"
            description="Learn how to use chat.ai platform for your needs"
            type="info"
          />
          <Card
            title='"Explain"'
            description="Quantum computing in simple terms"
          />
          <Card
            title='"How to"'
            description="Make a search engine platform like google"
          />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card
            title="Capabilities"
            description="How much capable chat.ai to fulfill your needs"
            type="info"
          />
          <Card
            title='"Remember"'
            description="Quantum computing in simple terms"
          />
          <Card
            title='"Allows"'
            description="User to provide follow-up corrections"
          />
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Limitation"
            description="How much capable chat.ai to fulfill your needs"
            type="info"
          />
          <Card
            title='"May"'
            description="Occasionally generate incorrect information"
          />
          <Card
            title='"Limited"'
            description="Knowledge of world and events after 2021"
          />
        </div>

        <ChatInputBar />
      </main>
    </div>
  );
}
