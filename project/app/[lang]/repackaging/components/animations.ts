import { Variants, Variant } from "framer-motion";

/**
 * Configurações de facilidade personalizadas para transições mais suaves
 */
const easings = {
  // Suave com pequeno repique
  smooth: [0.43, 0.13, 0.23, 0.96],
  // Elástico suave
  elastic: [0.25, 0.1, 0.25, 1.5],
  // Entrada rápida, saída lenta
  gentle: [0.4, 0, 0.2, 1],
  // Repique expressivo
  bounce: [0.68, -0.55, 0.27, 1.55],
};

/**
 * Animação de fade customizável com opções
 */
export const fadeIn = (
  direction: string = "up",
  distance: number = 20,
  duration: number = 0.6,
  delay: number = 0,
  ease: string | number[] = "easeOut"
): Variants => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration,
      delay,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
  exit: {
    opacity: 0,
    y: direction === "up" ? -distance : direction === "down" ? distance : 0,
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    transition: {
      type: "tween",
      duration: duration * 0.8,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
});


/**
 * Container para animações de filhos em cascata
 */
export const staggerContainer = (
  delayChildren: number = 0.1,
  staggerChildren: number = 0.1,
  direction: number = 1
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren,
      staggerChildren,
      staggerDirection: direction,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: staggerChildren * 0.5,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
});

/**
 * Animação de slide avançada com mais opções
 */
export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  distance: number = 50,
  duration: number = 0.6,
  delay: number = 0,
  ease: string | number[] = "easeOut"
): Variants => ({
  hidden: {
    x: direction === "left" ? -distance : direction === "right" ? distance : 0,
    y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
  exit: {
    x: direction === "left" ? distance : direction === "right" ? -distance : 0,
    y: direction === "up" ? -distance : direction === "down" ? distance : 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: duration * 0.8,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
});
/**
 * Animação de escala avançada com opções
 */
export const scaleIn = (
  initialScale: number = 0.8,
  duration: number = 0.6,
  delay: number = 0,
  ease: string | number[] = "easeOut"
): Variants => ({
  hidden: { scale: initialScale, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
  exit: {
    scale: initialScale * 0.95,
    opacity: 0,
    transition: {
      duration: duration * 0.75,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
});

/**
 * Animação de rotação com opções
 */
export const rotateIn = (
  initialRotation: number = -10,
  duration: number = 0.6,
  delay: number = 0,
  ease: string | number[] = "easeOut"  // Change from easings.elastic to "easeOut"
): Variants => ({
  hidden: { 
    rotate: initialRotation, 
    opacity: 0, 
    scale: 0.9 
  },
  visible: {
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      delay,
      duration,
      ease: typeof ease === "string" ? ease : undefined,
      easings: Array.isArray(ease) ? ease : undefined,
    },
  },
  exit: {
    rotate: -initialRotation * 0.5,
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: duration * 0.75,
      ease: "easeIn", // This is fine as it's a string
    },
  },
});

/**
 * Animação de flutuação avançada com variações
 */
export const floatingAnimation = {
  small: {
    y: [0, -8, 0],
    x: [0, 5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 4,
      ease: "easeInOut",
    },
  },
  medium: {
    y: [0, -12, 0],
    x: [0, -8, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
  large: {
    y: [0, 15, 0],
    x: [0, 10, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 6,
      ease: "easeInOut",
      delay: 1,
    },
  },
  subtle: {
    y: [0, -5, 0],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 3,
      ease: "easeInOut",
    },
  },
  breathing: {
    scale: [1, 1.03, 1],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 4,
      ease: "easeInOut",
    },
  },
};

/**
 * Animação de destaque pulsante
 */
export const pulseAnimation = (
  intensity: number = 1.05,
  duration: number = 2,
  delay: number = 0
): Variants => ({
  pulse: {
    scale: [1, intensity, 1],
    opacity: [1, 0.85, 1],
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration,
      ease: "easeInOut",
      delay,
    },
  },
});

/**
 * Efeito de texto digitando
 */
export const typingAnimation = (
  duration: number = 2,
  delay: number = 0
): Variants => ({
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      width: {
        duration,
        delay,
        ease: "easeInOut",
      },
    },
  },
});

/**
 * Efeito de texto aparecendo letra por letra
 */
export const letterAnimation = (
  staggerDelay: number = 0.03
): { parent: Variants; child: Variants } => ({
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  },
  child: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  },
});

/**
 * Efeito de revelação de máscara (útil para contêineres)
 */
export const maskReveal = (
  direction: "left" | "right" | "up" | "down" = "left",
  duration: number = 0.8,
  delay: number = 0
): Variants => {
  const xValue = direction === "right" ? "100%" : direction === "left" ? "-100%" : "0%";
  const yValue = direction === "down" ? "100%" : direction === "up" ? "-100%" : "0%";

  return {
    hidden: {
      opacity: 0,
      clipPath: `inset(0 ${direction === "left" || direction === "right" ? "100% 0 0" : "0 0 100%"})`,
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        clipPath: {
          duration,
          delay,
          ease: "easeInOut",
        },
        opacity: {
          duration: duration * 0.5,
          delay: delay + duration * 0.2,
        },
      },
    },
    exit: {
      clipPath: `inset(0 0 0 ${direction === "right" ? "100%" : "0"})`,
      opacity: 0,
      transition: {
        duration: duration * 0.75,
        ease: "easeIn",
      },
    },
  };
};

/**
 * Efeito de cartão 3D em hover
 */
export const card3DHover = {
  rest: {
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: easings.smooth,
    },
  },
};

/**
 * Efeito de destaque para botões e elementos interativos
 */
export const buttonAnimation = {
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: easings.smooth,
    },
  },
};

/**
 * Animação de carregamento personalizada
 */
export const loadingAnimation = {
  spinner: {
    rotate: [0, 360],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 1.5,
    },
  },
  dots: {
    opacity: [0.3, 1, 0.3],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
      times: [0, 0.5, 1],
    },
  },
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

/**
 * Tipo para os objetos de animação na sequência
 */
type AnimationObject = Record<string, any>;

/**
 * Utilitário para criar sequências de animação (com tipagem corrigida)
 */
export const createSequence = (
  animations: Array<AnimationObject>,
  delayBetween: number = 0.2
): Variants => {
  const result: Variants = { visible: {} };
  
  animations.forEach((anim, index) => {
    const transitionDelay = index * delayBetween;
    
    Object.entries(anim).forEach(([key, value]) => {
      if (result.visible) {
        // Usando type assertion para ajudar o TypeScript
        const visibleState = result.visible as Record<string, any>;
        
        if (!visibleState[key]) {
          visibleState[key] = {
            ...value,
            transition: {
              ...(value.transition || {}),
              delay: (value.transition?.delay || 0) + transitionDelay
            }
          };
        }
      }
    });
  });
  
  return result;
};

/**
 * Efeito de scroll paralaxe
 */
export const parallaxScroll = (
  speed: number = 0.2,
  initialOffset: number = 0
) => ({
  initial: {
    y: initialOffset,
  },
  animate: (scrollY: number) => ({
    y: initialOffset + scrollY * speed,
    transition: {
      type: "tween",
      ease: "linear",
    },
  }),
});

export const scrollReveal = (
  threshold: number = 0.1,
  duration: number = 0.6
): Variants => ({
  hidden: { 
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easings.gentle,
    },
  },
});