import React from "react";

function ButtonAction({
  onClick,
  label = "Click",
  className = "",
  classNameButton = "",
}) {
  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={`group/button relative inline-flex items-center justify-center
                overflow-hidden rounded-md bg-blue-600 backdrop-blur-lg px-3 py-1 text-base font-semibold text-white transition-all 
                duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-blue-600/50 border border-white/20 ${classNameButton}`}
      >
        <span className="font-medium">{label}</span>
        <div
          className="absolute inset-0 flex h-full w-full justify-center 
                [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
        >
          <div className="relative h-full w-10 bg-white/30"></div>
        </div>
      </button>
    </div>
  );
}

export default ButtonAction;
