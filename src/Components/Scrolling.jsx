// import { motion } from "framer-motion";
// import "../index.css";

// const calculateRandomBlockDelay = (rowIndex, totalRows) => {
//   const blockDelay = Math.random() * 0.5;
//   const rowDelay = (totalRows - rowIndex - 1) * 0.05;
//   return blockDelay + rowDelay;
// };

// const Scrolling = (Page) => {
//   return function TransitionComponent() {
//     return (
//       <>
//         <Page />

//         <div className="blocks-container transition-in">
//           {Array.from({ length: 10 }).map((_, rowIndex) => (
//             <div className="row" key={rowIndex}>
//               {Array.from({ length: 11 }).map((_, blockIndex) => (
//                 <motion.div
//                   key={blockIndex}
//                   className="block"
//                   initial={{ scaleY: 1 }}
//                   animate={{ scaleY: 0 }}
//                   exit={{ scaleY: 0 }}
//                   transition={{
//                     duration: 1,
//                     ease: [0.22, 1, 0.36, 1],
//                     delay: calculateRandomBlockDelay(rowIndex, 10),
//                   }}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>

//         <div className="blocks-container transition-out">
//           {Array.from({ length: 10 }).map((_, rowIndex) => (
//             <div className="row" key={rowIndex}>
//               {Array.from({ length: 11 }).map((_, blockIndex) => (
//                 <motion.div
//                   key={blockIndex}
//                   className="block"
//                   initial={{ scaleY: 0 }}
//                   animate={{ scaleY: 0 }}
//                   exit={{ scaleY: 1 }}
//                   transition={{
//                     duration: 1,
//                     ease: [0.22, 1, 0.36, 1],
//                     delay: calculateRandomBlockDelay(rowIndex, 10),
//                   }}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   };
// };

// export default Scrolling;










import { motion } from "framer-motion";
import "../index.css";

// Random color generator for blocks
const getRandomColor = () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FFD133"];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Random size generator for blocks
const getRandomSize = () => {
  const sizes = [50, 70, 90]; // Adjust block sizes
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const calculateRandomBlockDelay = (rowIndex, totalRows) => {
  const blockDelay = Math.random() * 0.5;
  const rowDelay = (totalRows - rowIndex - 1) * 0.05;
  return blockDelay + rowDelay;
};

const Scrolling = (Page) => {
  return function TransitionComponent() {
    return (
      <>
        <Page />

        <div className="blocks-container transition-in">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="block"
                  initial={{ scaleY: 1, backgroundColor: getRandomColor(), width: getRandomSize(), height: getRandomSize() }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                  style={{
                    display: "inline-block",
                    margin: "5px",
                    backgroundColor: getRandomColor(), // Random colors
                    borderRadius: "8px", // Rounded corners
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="blocks-container transition-out">
          {Array.from({ length: 10 }).map((_, rowIndex) => (
            <div className="row" key={rowIndex}>
              {Array.from({ length: 11 }).map((_, blockIndex) => (
                <motion.div
                  key={blockIndex}
                  className="block"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 1, backgroundColor: getRandomColor(), width: getRandomSize(), height: getRandomSize() }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: calculateRandomBlockDelay(rowIndex, 10),
                  }}
                  style={{
                    display: "inline-block",
                    margin: "5px",
                    backgroundColor: getRandomColor(),
                    borderRadius: "8px", // Rounded corners
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </>
    );
  };
};

export default Scrolling;
