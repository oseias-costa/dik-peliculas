import About from "./components/about/About";
import Benefits from "./components/benefits/Benefits";
import Call from "./components/call/Call";
import Film from "./components/film/Film";
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
    </main>
  )
}
