import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#000" } },
        
        fpsLimit: 60,
        
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" }
          },
          modes: { 
            push: { quantity: 4 },
            repulse: {
              distance: 150,
              duration: 0.2
            } 
          },
        },
        
        particles: {
          shape:{type: 'edge', },
          
          color: { value: ["#FF0050","#FF1F6A","#5D00ff"]},
          
          links: { 
            color:["#FF0050","#FF1F6A","#5D00ff"],
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 2
          },
          
          move: { enable: true, speed: 2 },
          number: { value: 40},
          opacity: { value: 0.7},
          size: { value: { min: 2, max: 5 } },
        },
        
        detectRetina: true,
      }}
    />
  );
}