export default function Sidebar() {
  return (
    <div className="w-64 bg-white shadow p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">CHAT A.I+</h2>
        <button className="bg-[#6D5BFF] text-white py-2 px-4 rounded-full w-full mb-4">
          + New chat
        </button>
        <ul className="text-sm space-y-2">
          {[
            "Create Html Game Environment...",
            "Apply To Leave For Emergency",
            "What Is UI UX Design?",
            "Create POS System",
            "What Is UX Audit?",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span>💬</span> {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4">
        <div className="text-sm text-gray-700">⚙️ Settings</div>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <img
            src="https://via.placeholder.com/30"
            alt="profile"
            className="w-6 h-6 rounded-full"
          />
          Andrew Neilson
        </div>
      </div>
    </div>
  );
}
