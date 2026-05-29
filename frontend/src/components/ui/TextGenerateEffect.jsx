import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "../../utils/cn"; // Assuming you have a cn utility function

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (scope.current) {
        animate("span", {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        }, {
          duration: duration,
          delay: stagger(0.2),
        });
    }
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = word.toLowerCase() === "building" || word.toLowerCase() === "futures.";
          return (
            <motion.span
              key={word + idx}
              className={`text-white opacity-0 ${isHighlighted ? 'bg-gradient-to-r from-primary-500 to-secondary-800 text-transparent bg-clip-text' : ''}`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}>
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-white text-4xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};