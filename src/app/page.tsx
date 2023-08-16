import Navbar from "./Navbar";
import Hero from "./Hero";
import Biography from "./Biography";
import Benefits from "./Benefits";
import Description from "./Description";
import Socials from "./Socials";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <Hero />

      <Biography />
      <Benefits />
      <Description/>
      <Socials/>
      <Footer/>
    </div>
  );
}
