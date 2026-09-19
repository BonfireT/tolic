import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import CoupleFull from "@/components/CoupleFull";
import Welcome from "@/components/Welcome";
import Worship from "@/components/Worship";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <CoupleFull />
      <Welcome />
      <Worship />
      <ContactUs />
    </>
  );
}