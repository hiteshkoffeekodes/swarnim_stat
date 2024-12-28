import { useEffect, useState } from "react";

interface AnimatedPlaceholderInputProps {
  placeholder: string;
  id: string;
  className?: string;
  isAnimating: boolean; // New prop to control whether animation should run
  onAnimationComplete: () => void; // Callback when the animation is complete
}

const AnimatedPlaceholderInput: React.FC<AnimatedPlaceholderInputProps> = ({
  placeholder,
  id,
  className = "",
  isAnimating,
  onAnimationComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isAnimating) return; // Do nothing if not animating

    let timeout: NodeJS.Timeout | undefined;

    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex((prev) => prev - 1);
        }, 100); // Speed for deleting
      } else {
        setIsDeleting(false);
        onAnimationComplete(); // Call this when animation finishes
      }
    } else {
      if (currentIndex < placeholder.length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + placeholder[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 100); // Speed for typing
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1000); // Delay before deleting starts
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, placeholder, isAnimating, onAnimationComplete]);

  return (
    <div className="custom-field one relative w-full">
      <input
        id={id}
        type="text"
        placeholder=" "
        className={`text-font14 rounded-[2px] font-medium border h-[50px] appearance-none w-full text-[--blackish] bg-[--white] placeholder-transparent focus:outline-none p-1 px-2 ${className}`}
      />
      <span className="placeholder absolute font-medium top-[12px] left-[8px] text-[--blackish] text-font12 transition-all bg-[--white] px-1 pointer-events-none">
        {displayedText}
      </span>
    </div>
  );
};

export default AnimatedPlaceholderInput;

// import { useEffect, useState } from "react";

// interface AnimatedPlaceholderInputProps {
//   placeholder: string;
//   id: string;
//   className?: string;
// }

// const AnimatedPlaceholderInput: React.FC<AnimatedPlaceholderInputProps> = ({
//   placeholder,
//   id,
//   className = "",
// }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     if (isFocused) {
//       // If input is focused, show the full placeholder text and stop animation
//       setDisplayedText(placeholder);
//       return;
//     }

//     let timeout: NodeJS.Timeout | undefined;

//     if (isDeleting) {
//       // Deleting the text
//       if (currentIndex > 0) {
//         timeout = setTimeout(() => {
//           setDisplayedText((prev) => prev.slice(0, -1));
//           setCurrentIndex((prev) => prev - 1);
//         }, 100); // Speed for deleting
//       } else {
//         setIsDeleting(false);
//       }
//     } else {
//       // Typing the text
//       if (currentIndex < placeholder.length) {
//         timeout = setTimeout(() => {
//           setDisplayedText((prev) => prev + placeholder[currentIndex]);
//           setCurrentIndex((prev) => prev + 1);
//         }, 100); // Speed for typing
//       } else {
//         // Start deleting after a delay
//         timeout = setTimeout(() => {
//           setIsDeleting(true);
//         }, 1000); // Delay before deleting starts
//       }
//     }

//     return () => clearTimeout(timeout);
//   }, [currentIndex, isDeleting, placeholder, isFocused]);

//   return (
//     <div className="custom-field one relative w-full">
//       <input
//         id={id}
//         type="text"
//         placeholder=" "
//         className={`text-font14 rounded-[2px] font-medium border h-[50px] appearance-none w-full text-[--blackish] bg-[--white] placeholder-transparent focus:outline-none p-1 px-2 ${className}`}
//         onFocus={() => setIsFocused(true)} // Stop animation and show full text on focus
//         onBlur={() => setIsFocused(false)} // Resume animation on blur
//       />
//       <span className="placeholder absolute font-medium top-[12px] left-[8px] text-[--blackish] text-font12 transition-all bg-[--white] px-1 pointer-events-none">
//         {displayedText}
//       </span>
//     </div>
//   );
// };

// export default AnimatedPlaceholderInput;
