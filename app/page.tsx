import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import CoupleFull from "@/components/CoupleFull";
import Welcome from "@/components/Welcome";
import Worship from "@/components/Worship";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <CoupleFull />
      <Welcome />
      <Worship />
      <ContactUs />
      <Footer />
    </main>
  );
}