'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { Engine } from '@tsparticles/engine';

export function CyberpunkParticles() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="cyberpunk-particles"
      init={init}
      className="absolute inset-0 w-full h-full"
      options={{
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 120,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ['#00f3ff', '#bc13fe', '#ff0055'] },
          shape: { type: 'circle' },
          opacity: {
            value: { min: 0.1, max: 0.8 },
            animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false }
          },
          size: {
            value: { min: 1, max: 4 },
            animation: { enable: true, speed: 2, minimumValue: 0.3, sync: false }
          },
          links: {
            enable: true,
            distance: 150,
            color: '#00f3ff',
            opacity: 0.3,
            width: 1,
            triangles: { enable: true, color: '#bc13fe', opacity: 0.1 }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'bounce' }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'grab' },
            onClick: { enable: true, mode: 'push' }
          },
          modes: {
            grab: { distance: 140, links: { opacity: 0.5 } },
            push: { quantity: 4 }
          }
        },
        detectRetina: true
      }}
    />
  );
}
