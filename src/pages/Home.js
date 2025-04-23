import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import Card from "../components/Card";
import ChatInputBar from "../components/ChatInputBar";

export default function Home() {
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
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
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
                  image="/images/explain.png"
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"How to"'
                  description="Make a search engine platform like google"
                  image="/images/howto.png"
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
                  image="/images/remember.png"
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"Allows"'
                  description="User to provide follow-up corrections"
                  image="/images/allows.png"
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
                  image="/images/may.png"
                />
              </div>
              <div className="w-[300px]">
                <Card
                  title='"Limited"'
                  description="Knowledge of world and events after 2021"
                  image="/images/limited.png"
                />
              </div>
            </div>
          </div>
        </div>

        <ChatInputBar />
      </main>
    </div>
  );
}
