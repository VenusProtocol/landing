import type { ISourceOptions } from 'tsparticles-engine';

const move = 'left' as const;
const outMode = 'out' as const;

const particles: ISourceOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 2000,
      },
    },
    color: {
      value: '#ffffff',
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000',
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: false,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: move,
      random: false,
      straight: true,
      out_mode: outMode,
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  retina_detect: true,
  fullScreen: false,
  height: '100%',
  width: '50%',
};

export default particles;
