import React from "react";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <span
      className={`relative inline-block ${className}`}
    >
      <span className={`relative z-10 ${disabled ? '' : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-blue-300'}`}>
        {text}
      </span>
      {!disabled && (
        <span 
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-500/0 via-violet-300/80 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            backgroundSize: '200% 100%',
            animation: `shine ${animationDuration} linear infinite`,
          }}
        />
      )}
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
      `}</style>
    </span>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
