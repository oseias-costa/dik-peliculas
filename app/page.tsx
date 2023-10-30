import About from "./components/about/About";
import Benefits from "./components/benefits/Benefits";
import Call from "./components/call/Call";
import Contact from "./components/contact/Contact";
import Film from "./components/film/Film";
import Whatsapp from "./components/global/whatsapp/Whatsapp";
import Headline from "./components/headline/Headline";
import Services from "./components/services/Services";

export default function Home() {
  return (
    <main>
      <Headline />
      <Benefits />
      <Services />
      <Film />
      <Call />
      <About />
      <Contact />
      <Whatsapp />
    </main>
  );
}
