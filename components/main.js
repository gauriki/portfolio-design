import { Header } from "./header";
import { Section } from "./section";

export function Main() {
  return (
    <main className="mx-auto container bg-[#161616] h-fit py-4  min-h-screen ">
      <Header />
      <Section />
    </main>
  );
}
