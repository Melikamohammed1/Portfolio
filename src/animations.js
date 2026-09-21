// Shared Framer Motion variants: named animation states reused by every section.
// "hidden" is how an element starts, "show" is where it ends up.

const ease = "easeOut"

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const fromLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

export const fromRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

// Falls in from above and settles with a small bounce. `custom` is an optional delay in seconds.
export const drop = {
  hidden: { opacity: 0, y: -100, scale: 0.9 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 12, delay },
  }),
}

// Pops in from smaller with a springy overshoot.
export const pop = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 220, damping: 12 },
  },
}

// Put on a parent so its children animate one after another instead of all at once.
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}
