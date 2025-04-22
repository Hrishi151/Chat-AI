import { SendHorizonal } from "lucide-react";

export default function ChatInputBar() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl bg-white rounded-full shadow-lg flex items-center px-4 py-2 space-x-2">
      <span className="text-2xl">🧠</span>
      <input
        type="text"
        placeholder="What’s in your mind?..."
        className="flex-grow bg-transparent outline-none text-sm px-2"
      />
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-md">
        <SendHorizonal size={18} />
      </button>
    </div>
  );
}
