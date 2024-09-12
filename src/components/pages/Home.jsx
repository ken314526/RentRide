import Why from "../Why";
import Refer from "../Refer";
import Benefits from "../Benefits";
import ChooseCars from "../ChooseCars";
import Featured from "../Featured";
import Testimonials from "./../Testimonials";
import FAQs from "./../FAQs";
import LogosCarousel from "./../LogosCarousel";
import YouTubeEmbed from "../YouTubeEmbed";
import CitiesList from "../CitiesList";

export default function Home() {
  return (
    <div className="mt-10 py-12">
      <Why />
      <Benefits />
      <Refer />
      {/* <ChooseCars /> */}
      <Featured />
      <Testimonials />
      <LogosCarousel />
      <YouTubeEmbed />
      <CitiesList />
      <FAQs />
    </div>
  );
}
