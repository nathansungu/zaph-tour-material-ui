// import components
import HandleNavbar from "../components/home.components/navbar";
import HandleDestination from "../components/home.components/destination";
import HandleHeader from "../components/home.components/header";
import HandleHeroSection from "../components/home.components/hero";
import HandleAbout from "../components/home.components/about";
import HandleTestimonials from "../components/home.components/testimonials";
import HandleNewsLetter from "../components/home.components/newsletter";

const Home = () => {
  return (
    <>
      <HandleHeader />
      <HandleNavbar />
      <HandleHeroSection />
      <HandleAbout />
      <HandleDestination />
      <HandleTestimonials />
      <HandleNewsLetter />
    </>
  );
};

export default Home;
