export const hoverEffect = {
  whileHover: { scale: 1.1 },
};

export const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const slideIn = {
  whileInView: { x: 0, opacity: 1 },
  initial: { x: 300, opacity: 0 },
  transition: { duration: 0.9 },
};

export const slideInPar = (duration = 0.9) => ({
  whileInView: { x: 0, opacity: 1 },
  initial: { x: 300, opacity: 0 },
  transition: { duration },
});
export const rotateLoop = {
  animate: {
    rotate: [-5, 5, -5], // Rotates left (-15deg) → right (15deg) → left (-15deg)
    transition: {
      repeat: Infinity, // Infinite loop
      duration: 5, // Time per full cycle
      ease: "easeInOut",
    },
  },
};
