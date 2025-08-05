// components/Experiment.tsx

import React from 'react';

// import component
import ExperimentHeader from '../experiment/experimentheader';
import ExperimentCard from '../experiment/experimentcard';



export default function Experiment() {

    return (
        <section
            id="experiment"
            className="min-h-screen flex flex-col items-center py-20 px-6 mx-auto
                       transition-colors duration-300 relative overflow-hidden"
        >
            <div className="container mx-auto flex flex-col items-center gap-16 text-center z-10 relative max-w-6xl">
                
                {/* header */}
                <ExperimentHeader />

                {/* content */}
                <ExperimentCard />

            </div>
        </section>
    );
}