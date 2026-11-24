import { AnimatePresence, motion } from 'motion/react';

export type ThemeEffectType = 'glass-water' | 'bats' | null;

const BATS = [
  { id: 1, left: '8%', delay: 0.02, duration: 0.9, scale: 0.9, drift: -22 },
  { id: 2, left: '18%', delay: 0.08, duration: 0.85, scale: 1.15, drift: 18 },
  { id: 3, left: '29%', delay: 0.0, duration: 0.95, scale: 0.78, drift: -15 },
  { id: 4, left: '41%', delay: 0.12, duration: 0.88, scale: 1.2, drift: 26 },
  { id: 5, left: '52%', delay: 0.04, duration: 0.92, scale: 0.95, drift: -20 },
  { id: 6, left: '63%', delay: 0.14, duration: 0.84, scale: 1.05, drift: 16 },
  { id: 7, left: '74%', delay: 0.06, duration: 0.96, scale: 0.82, drift: -18 },
  { id: 8, left: '84%', delay: 0.1, duration: 0.88, scale: 1.1, drift: 22 },
  { id: 9, left: '92%', delay: 0.03, duration: 0.9, scale: 0.75, drift: -12 },
];

function BatSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M32 13C30.5 10.5 29.5 8.5 29 7C28.5 8.5 28 10 27.5 11.2C23.5 7 15.5 5 4 9.5C9.5 12 12 16 11 21C15.5 18 19.5 18 22.5 21C25 18.5 28 19.5 32 25C36 19.5 39 18.5 41.5 21C44.5 18 48.5 18 53 21C52 16 54.5 12 60 9.5C48.5 5 40.5 7 36.5 11.2C36 10 35.5 8.5 35 7C34.5 8.5 33.5 10.5 32 13Z" />
    </svg>
  );
}

export function ThemeTransitionOverlay({
  effect,
}: {
  effect: ThemeEffectType;
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      <AnimatePresence>
        {effect === 'glass-water' && (
          <motion.div
            key="glass-water-wave"
            initial={{ y: '-115%', opacity: 0.95 }}
            animate={{ y: '115%', opacity: [0.95, 0.9, 0.4] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 -top-24 h-[120vh]"
          >
            <div className="w-full h-[85%] bg-gradient-to-b from-emerald-100/80 via-teal-50/70 to-emerald-200/45 backdrop-blur-md" />
            <svg
              viewBox="0 0 1440 160"
              preserveAspectRatio="none"
              className="w-full h-24 sm:h-32 -mt-1 text-emerald-200/45 fill-current"
            >
              <path d="M0,32 C240,128 480,0 720,64 C960,128 1200,16 1440,72 L1440,0 L0,0 Z" />
            </svg>
          </motion.div>
        )}

        {effect === 'bats' && (
          <motion.div
            key="bats-swarm"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            {BATS.map((bat) => (
              <motion.div
                key={bat.id}
                style={{ left: bat.left }}
                initial={{ y: '105vh', x: 0, opacity: 0, scale: bat.scale }}
                animate={{
                  y: '-20vh',
                  x: [0, bat.drift, 0],
                  opacity: [0, 0.95, 0.9, 0],
                  scaleY: [bat.scale, bat.scale * 0.72, bat.scale, bat.scale * 0.75],
                }}
                transition={{
                  duration: bat.duration,
                  delay: bat.delay,
                  ease: 'easeOut',
                }}
                className="absolute text-[#060E0A] dark:text-[#040806] drop-shadow-[0_2px_6px_rgba(16,185,129,0.25)]"
              >
                <BatSilhouette className="w-10 h-6 sm:w-14 sm:h-8" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
