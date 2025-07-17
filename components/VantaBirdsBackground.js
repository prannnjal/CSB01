import React, { useEffect, useRef } from "react";

const VantaBirdsBackground = ({
  className = "",
  style = {},
  children,
  ...props
}) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let vantaInstance;
    let isMounted = true;
    (async () => {
      if (typeof window !== "undefined") {
        const THREE = (await import("three"));
        const VANTA = (await import("vanta/dist/vanta.birds.min.js")).default;
        if (vantaRef.current && !vantaEffect.current && isMounted) {
          vantaInstance = VANTA({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundAlpha: 0.0, // transparent so content overlays
          });
          vantaEffect.current = vantaInstance;
        }
      }
    })();
    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className={`absolute inset-0 w-full h-full z-0 ${className}`}
      style={{ ...style, pointerEvents: "none" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default VantaBirdsBackground; 