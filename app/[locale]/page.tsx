import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Experiment from "@/components/sections/experiment";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import AnimatedBackground from "@/components/animated/animatedbackground";
import ScrollToTopButton from "@/components/scrolltotopbutton";

export default function HomePage() {
    return (
        <main>
            <AnimatedBackground />
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experiment />
            <Contact />
            <Footer />
            <ScrollToTopButton />
        </main>
    )
}