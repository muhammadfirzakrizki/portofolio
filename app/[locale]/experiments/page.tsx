// app/[locale]/experiments/page.tsx

import ProjectsHeader from "@/components/projects/projectsheader";
import AnimatedBackground from "@/components/animated/animatedbackground";
import ScrollToTopButton from "@/components/scrolltotopbutton";

import AllExperimentHeader from "@/components/experiment/allexperimentheader";
import AllExperimentCard from "@/components/experiment/allexperimentcard";

import Footer from "@/components/sections/footer";

export default function Experiments() {
    return (
        <>
            <AnimatedBackground />
            <ScrollToTopButton />
            <ProjectsHeader />

            <AllExperimentHeader />
            <AllExperimentCard />

            {/* Footer */}
            <Footer />
        </>
    );
}