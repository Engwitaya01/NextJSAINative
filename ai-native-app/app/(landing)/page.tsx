// import Footer and Navbar from "@/components/landing-page";
import Hero from "@/app/(landing)/Hero";
import Navbar from "@/app/(landing)/Navbar";
import Footer from "@/app/(landing)/Footer";
import Testimonial from "@/app/(landing)/Testimonial";
import About from "@/app/(landing)/About";
import Features from "@/app/(landing)/Features";
import TechStack from "@/app/(landing)/TechStack";
import Team from "@/app/(landing)/Team";

// create home page
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Team />
      <TechStack />
      <Testimonial />
      <Footer />
    </>
  );
}
