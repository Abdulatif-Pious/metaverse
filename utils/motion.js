export const navVariants = {
  hidden : {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stifness: 25,
      damping: 4.3,
    },
  },
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    },
  },
});

export const titleVariant = (delay) => ({
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffnes: 50,
      damping: 5,
      delay
    }
  }
})

export const slideIn = (direction, type, duration, delay) => ({
  hidden: {
    opacity: 0,
    scale: 0.1,
    x: direction === "right" ? '50%' : direction === 'left' ? "-90%" : 0, 
    y: direction === "up" ? '50%' : direction === "down" ? '-50%' : 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      duration,
      delay,
      ease: 'backInOut',
      stiffness: 50,
      damping: 6, 
    }
  }
});

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.1 * i,
      delayChildren: 1,
    }
  }),
}

export const textVariant = {
  hidden: {
    opacity: 0,
    scale:0,
    y: -100,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: "linear",
    }
  }
}