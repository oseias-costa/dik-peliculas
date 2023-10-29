import Benefits from "./components/benefits/Benefits";
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
    </main>
  )
}
