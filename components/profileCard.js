import { PiArrowLineUpRightLight } from "react-icons/pi";
export function ProfileCard() {
  return (
    <div className="container mx-auto flex flex-col items-center py-8 space-y-4">
      <img
        className="h-16 w-16 rounded-full"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        alt="logo"
      />
      <p className="text-[#A3A3A3] ">Hii I&apos;m Kawsar 👋</p>
      <p className=" text-3xl text-transparent font-medium bg-clip-text bg-gradient-to-r from-[#B1B1B1] to-[#808080] text-center md:text-5xl leading-14 tracking-wide pb-8">
        Building digital <br />
        Products,brands,and <br />
        experience.
      </p>
      <button className="text-xs transition delay-150 duration-300 ease-in-out text-[#B1B1B1] hover:scale-110 flex items-center gap-4 bg-[#1A1A1A] px-6 py-3 border border-gray-800 md:text-base ">
        Latest Short <PiArrowLineUpRightLight />{" "}
      </button>
    </div>
  );
}
