import { HiOutlineMail } from "react-icons/hi";

export function Header() {
  return (
    <header className="flex justify-between items-center border-b border-gray-800 pb-3 px-6">
      <div className="flex items-center gap-3">
        <div className="bg-[#1A1A1A] rounded-full h-12 w-12 border border-gray-700 text-[#D6D3D6] items-center justify-center flex">
          <HiOutlineMail className="text-xl" />
        </div>
        <p className="text-[#D6D3D6] hover:text-white">Get in touch</p>
      </div>
      <div className="flex gap-6 ">
        <p className="text-[#D6D3D6] hover:text-white">Linkdin /</p>
        <p className="text-[#D6D3D6] hover:text-white">Dribble /</p>
        <p className="text-[#D6D3D6] hover:text-white">Instagram</p>
      </div>
    </header>
  );
}
