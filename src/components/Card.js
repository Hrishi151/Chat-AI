import { Globe, Zap, AlertTriangle, ArrowRight } from "lucide-react";

export default function Card({ title, description, type, image }) {
  const isBlack =
    title === "Explore" || title === "Capabilities" || title === "Limitation";

  const getIcon = () => {
    switch (title) {
      case "Explore":
        return <Globe className="w-7 h-7 mb-1" />;
      case "Capabilities":
        return <Zap className="w-7 h-7 mb-1" />;
      case "Limitation":
        return <AlertTriangle className="w-7 h-7 mb-1" />;
      default:
        return null;
    }
  };

  if (isBlack) {
    return (
      <div className="bg-black text-white p-5 rounded-2xl shadow-md w-full h-full min-h-[160px]">
        <div className="flex flex-col items-start space-y-1 h-full">
          {getIcon()}
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-white/80 leading-snug">{description}</p>
        </div>
      </div>
    );
  }

  // White card
  return (
    <div className="bg-white text-black p-5 rounded-2xl shadow-md w-[300px] h-full min-h-[160px] flex flex-col justify-between">
      {image && (
        <div className="mb-3">
          <img src={image} alt={title} className="w-10 h-10 object-contain" />
        </div>
      )}

      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">{description}</p>
          <ArrowRight className="w-4 h-4 text-black" />
        </div>
      </div>
    </div>
  );
}
