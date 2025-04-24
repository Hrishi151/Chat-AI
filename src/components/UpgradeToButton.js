// components/UpgradeToProButton.jsx
export default function UpgradeToProButton() {
    return (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-50 flex items-center">
            {/* Main button container */}
            <div className="bg-indigo-600 text-white text-sm font-semibold px-6 py-4 shadow-lg h-40 w-12 flex flex-col justify-between items-center hover:bg-indigo-700 hover:shadow-2xl transition-all cursor-pointer group rounded-l-xl rounded-r-none">
                {/* Rotated Text - centered */}
                <div className="flex-1 flex items-center justify-center">
                    <span className="rotate-180 whitespace-nowrap tracking-wide [writing-mode:vertical-rl]">
                        Upgrade to Pro
                    </span>
                </div>

                {/* Star emoji - centered */}
                <div className="flex-1 flex items-center justify-center">
                    <span className="text-yellow-300 text-2xl transition-transform transform hover:scale-125">
                        ✨
                    </span>
                </div>
            </div>

            {/* Right-pointing spread foot */}
            {/* <div className="flex flex-col space-y-1 ml-[-1px]">
                <div className="w-0 h-0 border-t-[100px] border-t-transparent border-b-[8px] border-b-transparent border-l-[16px] border-l-indigo-600 group-hover:border-l-indigo-700"></div>
                <div className="w-0 h-0 border-t-[100px] border-t-transparent border-b-[8px] border-b-transparent border-l-[16px] border-l-indigo-600 group-hover:border-l-indigo-700"></div>
            </div> */}
        </div>
    );
}