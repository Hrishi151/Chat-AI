import { FaSearch, FaCog, FaRegCommentDots } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-[94vh] w-[260px] bg-white rounded-2xl m-4 p-4 shadow-md">
      {/* Top Section */}
      <div>
        <h1 className="text-xl font-medium text-gray-900 mb-6 font-sans tracking-wide">
          CHAT A.I+
        </h1>

        {/* New Chat + Search */}
        <div className="flex items-center justify-between mb-4">
          <button className="flex-1 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center">
            + New Chat
          </button>
          <div className="ml-2 bg-black w-[44px] h-[44px] flex items-center justify-center rounded-full cursor-pointer">
            <FaSearch className="text-white w-4 h-4" />
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-200 mb-4" />

        {/* Title and Clear All */}
        <div className="flex justify-between items-center text-sm text-gray-600 font-medium mb-2">
          <span>Your conversations</span>
          <button className="text-violet-600 hover:underline text-sm">
            Clear All
          </button>
        </div>

        {/* Divider before chats */}
        <div className="border-t border-gray-100 mb-3" />

        {/* Chat List */}
        <div className="space-y-3">
          {[
            "Create Html Game Environment...",
            "Apply To Leave For Emergency",
            "Explain Quantum Computing",
            "How to make a search engine",
          ].map((chat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer hover:bg-gray-100 p-2 rounded-md"
            >
              <FaRegCommentDots className="text-gray-500 w-4 h-4" />
              <span className="truncate">{chat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 space-y-3">
        {/* Settings Cube */}
        <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full cursor-pointer hover:shadow-sm">
          <div className="bg-gray-100 p-2 rounded-full mr-3">
            <FaCog className="text-gray-600 w-4 h-4" />
          </div>
          <span className="text-sm text-gray-700 font-medium">Settings</span>
        </div>

        {/* Guest Cube */}
        <div className="flex items-center bg-white border border-gray-200 px-4 py-2 rounded-full cursor-pointer hover:shadow-sm">
          <div className="bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
            G
          </div>
          <span className="text-sm font-medium text-gray-800">Guest</span>
        </div>
      </div>
    </div>
  );
}
