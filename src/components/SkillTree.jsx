import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

export function SkillTree({branches}) {
  
  const ref = useRef(null);
  const [size, setSize] = useState(0);
  const [small, setSmall] = useState(false);

  // Resize auto
  useEffect(() => {
    const update = () => {
      if (ref.current) { 
        setSize(ref.current.offsetWidth);
        if (ref.current.offsetWidth < 640) {
          setSmall(true);
        } else {
          setSmall(false);
        }
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  

  const radiusStep = 0.15; // distance entre deux niveaux

  const center = size / 2;

  return (
    <div
      ref={ref}
      className="w-full aspect-square mx-auto relative"
    >
      {/* SVG des connecteurs */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {branches.map((branch, bIndex) =>
          branch.levels.map((level, i) => {
            if (i === 0) return null; // pas de connexion sur le 1er niveau
            
            let angleRad;
            let angleRadBis;
            if (small) {
              angleRad = (branch.smallAngle - 90) * (Math.PI / 180);
              angleRadBis = (branch.smallAngle - 90) * (Math.PI / 180);
            } else {
              if (i % 2 == 0)
              {
                angleRad = (branch.angle + 20 - 90) * (Math.PI / 180);
                angleRadBis = (branch.angle - 20 - 90) * (Math.PI / 180);
              } else {
                angleRad = (branch.angle - 20 - 90) * (Math.PI / 180);
                angleRadBis = (branch.angle + 20 - 90) * (Math.PI / 180);
              }
            }

            const r1 = (i - 1) * radiusStep * size;
            const r2 = i * radiusStep * size;

            const x1 = center + Math.cos(angleRad) * r1;
            const y1 = center / 2 + Math.sin(angleRad) * r1;

            const x2 = center + Math.cos(angleRadBis) * r2;
            const y2 = center / 2 + Math.sin(angleRadBis) * r2;

            return (
              <line
                key={`${bIndex}-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={branch.color}
                strokeWidth="6"
                strokeLinecap="round"
                opacity={level.unlocked ? 0.9 : 0.3}
              />
            );
          })
        )}
      </svg>

      {/* NODES */}
      {branches.map((branch, bIndex) =>
        branch.levels.map((level, i) => {
          let angleRad;
          if (small) {
            angleRad = (branch.smallAngle - 90) * (Math.PI / 180);
          } else {
            if (i % 2 != 0)
              {
                angleRad = (branch.angle + 20 - 90) * (Math.PI / 180);
              } else {
                angleRad = (branch.angle - 20 - 90) * (Math.PI / 180);
              };
          }
          const r = i * radiusStep * size;

          const x = center + Math.cos(angleRad) * r;
          const y = center / 2 + Math.sin(angleRad) * r;

          return (
            <div
              key={`node-${bIndex}-${i}`}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
            >
              <div
                className={`
                  w-7 h-7 sm:w-14 sm:h-14 lg:w-20 lg:h-20 
                  rounded-full border-4 lg:border-6 flex items-center justify-center
                  ${level.unlocked ? "bg-white/10" : "bg-black/30"}
                  hover:brightness-200`}
                style={{
                  borderColor: level.unlocked ? branch.color : "#444",
                }}
              >
                {/* Petit rond intérieur */}
                <div
                  className={`${small ? "hidden" : "w-4 h-4 lg:w-7 lg:h-7 rounded-full"}`}
                  style={{
                    backgroundColor: level.unlocked ? branch.color : "#444",
                  }}
                >
                  <NavLink className={`${level.unlocked ?`text-white`: "text-gray-400"}
                                sm:text-md md:text-lg lg:text-xl xl:text-2xl flex no-underline
                                `} to={level.unlocked ? level.link : ""}>
                    {level.name}
                  </NavLink>
                </div>
                <NavLink 
                  className={`${small ? "text-white text-xs" : "hidden"} no-underline`} 
                  to={level.unlocked ? level.link : ""}>
                  {level.name}
                </NavLink>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}