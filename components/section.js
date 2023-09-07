import { HiOutlineMail } from "react-icons/hi";
import { Card } from "./card";
import { CompanyName } from "./companyName";
import { Footer } from "./footer";
import { ProfileCard } from "./profileCard";

export function Section() {
  return (
    <section className="flex flex-col ">
      <ProfileCard />
      <CompanyName />
      <h1 className=" text-4xl pb-10 pt-20 font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-[#B1B1B1] to-[#808080] text-center leading-12">
        Collaborate with brands and agencies to <br />
        create impactfully results.
      </h1>
      <div className="grid grid-cols-4 px-40 border-b border-gray-800 pb-24 my-4 ">
        <Card
          status="UX & UI"
          title="Designing interfaces that are 
        intuitive,efficient,and enjoyable 
        to use."
        />

        <Card
          status="Web & Mobile App"
          title="Designing interfaces that are 
        intuitive,efficient,and enjoyable 
        to use."
        />
        <Card
          status="Design & Creative"
          title="Designing interfaces that are 
        intuitive,efficient,and enjoyable 
        to use."
        />
        <Card
          status="Development"
          title="Designing interfaces that are 
        intuitive,efficient,and enjoyable 
        to use."
        />
      </div>
      <h1 className=" text-5xl py-4 font-semibold text-transparent pt-14  bg-clip-text bg-gradient-to-r from-[#B1B1B1] to-[#808080] text-center leading-14">
        Tell me about your <br />
        next project
      </h1>
      <div className="flex justify-center mb-16">
        <button className="mt-3 transition delay-150 duration-300 ease-in-out text-[#B1B1B1] hover:scale-110 flex justify-center w-fit items-center gap-4 bg-[#1A1A1A] px-8 py-4 border border-gray-800 text-base">
          Get in touch <HiOutlineMail className="text-xl" />
        </button>
      </div>
      <Footer />
    </section>
  );
}
