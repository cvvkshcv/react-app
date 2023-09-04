- Install `framer-motion`
- add <motion.TAG_NAME {...props}>
- We can pass multiple prop

  - animate | Provide the end animation values here | Takes an object and has key value pairs | it's simple css properties

    - x: 100 | '100vw '
    - opacity
    - scale
    - rotate

  - transition
    - type: 'spring' + stiffness: 100 | spring motion
    - type: 'tween' | linear motion
    - delay: 2 | 2s delay
    - duration: 3 | 3s animation duration
