"use client";


import { motion } from "framer-motion";

interface TyperwriterTextProps {
  text: string;
  delay?: number;
  className?: string;
  speed?: number;
  //   [key: string]: any; // to allow additional props
}

const TyperwriterText = ({
  text,
  delay = 0,
  className,
  speed = 0.05,
}: TyperwriterTextProps) => {
  const sentenceVariants = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: speed } } },
  };
  return (
    <motion.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      //   animate="visible"
      whileInView="visible"
        viewport={{ once: true }}
      //   {...rest}
      className={className}
    >
      {text.split("").map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TyperwriterText;


// "use client";


// import { motion } from "framer-motion";

// interface TyperwriterTextProps {
//   text: string;
//   delay?: number;
//   className?: string;
//   speed?: number;
//   //   [key: string]: any; // to allow additional props
// }

// const TyperwriterText = ({
//   text,
//   delay = 0,
//   className,
//   speed = 0.05,
// }: TyperwriterTextProps) => {
//   const sentenceVariants = {
//     hidden: {},
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: delay,  },
//     },
//   };
//   const letterVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { opacity: { duration: speed } } },
//   };
//   return (
//     <motion.p
//       key={text}
//       variants={sentenceVariants}
//       initial="hidden"
//       //   animate="visible"
//       whileInView="visible"
//         viewport={{ once: true }}
//       //   {...rest}
//       className={className}
//     >
//       {text.split("").map((char, i) => (
//         <motion.span key={`${char}-${i}`} 
//         initial={{ x: -10, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.04 + 1.5 } }}
//         viewport={{ once: true }}>
//           {char}
//         </motion.span>
//       ))}
//     </motion.p>
//   );
// };

// export default TyperwriterText;
