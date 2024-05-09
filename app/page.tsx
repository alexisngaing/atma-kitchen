import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Category from "@/components/home/Category";
import Etc from "@/components/home/Etc";
import Hero from "@/components/home/Hero";
import Recommendations from "@/components/home/Recommendation";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Category />
      <Recommendations />
      <Etc />
      <Footer />
    </>
  );
};

export default HomePage;
