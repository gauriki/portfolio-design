import { TfiIdBadge } from "react-icons/tfi";
export function Card(p) {
  return (
    <div className="bg-[#1A1A1A] border border-gray-800 text-white px-6 mx-2 md:mx-6 space-y-6 py-6">
      <TfiIdBadge className="text-3xl text-[#86888A] mt-32" />
      <h1 className="text-xl text-transparent  bg-clip-text bg-gradient-to-r from-[#B1B1B1] to-[#808080]">
        {p.status}
      </h1>
      <p className="text-[#86888A] text-sm">{p.title}</p>
    </div>
  );
}
