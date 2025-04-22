export default function Card({ title, description, type }) {
  const isBlack =
    title === "Explore" || title === "Capabilities" || title === "Limitation";

  return (
    <div
      className={`p-4 rounded-xl shadow-md ${
        isBlack ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}
