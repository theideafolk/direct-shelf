import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

const HeroHeadline = () => {
  return (
    <div className="space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
      >
        <div className="flex flex-wrap items-center gap-x-3">
          <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            Your order—
          </span>
          <TypeAnimation
            sequence={[
              'fulfilled',
            ]}
            speed={150}
            wrapper="span"
            cursor={true}
            repeat={0}
            className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
          />
          <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
            before you even wait.
          </span>
        </div>
      </motion.h1>
    </div>
  );
};

export default HeroHeadline;