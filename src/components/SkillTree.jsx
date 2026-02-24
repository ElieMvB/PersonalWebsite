import { useState, useRef, useEffect } from "react";

export function SkillTree() {
  // -----------------------------
  // DÉFINITION DES BRANCHES
  // -----------------------------
  const branches = [
    {
      name: "front",
      color: "#ff4444",
      angle: -100,        // en degrés
      smallAngle: -130,
      levels: [
        { id: 1, unlocked: true, name: "callisténie" },
        { id: 2, unlocked: true, name: "front lever 3s" },
        { id: 3, unlocked: false, name: "front lever 5s" },
        { id: 4, unlocked: false, name: "front lever 10s" },
      ]
    },
    {
      name: "iron cross",
      color: "#44ccff",
      angle: 60,
      smallAngle: 35,
      levels: [
        { id: 1, unlocked: true, name: "" },
        { id: 2, unlocked: false, name: "iron cross 3s" },
        { id: 3, unlocked: false, name: "iron cross 5s" }
      ]
    },
        {
      name: "bring sally up",
      color: "#44ff5d",
      angle: -30,
      smallAngle: -35,
      levels: [
        { id: 1, unlocked: true, name: "" },
        { id: 2, unlocked: true, name: "bring sally up" },
        { id: 3, unlocked: false, name: "2 x bring sally up" }
      ]
    },
    {
      name: "hand stand",
      color: "#aa55ff",
      angle: 120,
      smallAngle: 130,
      levels: [
        { id: 1, unlocked: true, name: ""},
        { id: 2, unlocked: true, name: "hand stand 10s" },
        { id: 3, unlocked: false, name: "hand stand 30s"},
        { id: 4, unlocked: false, name: "hand stand push up"}
      ]
    },
        {
      name: "tractions lestées",
      color: "#1e14da",
      angle: 200,
      smallAngle: 180,
      levels: [
        { id: 1, unlocked: true, name: ""},
        { id: 2, unlocked: true, name: "traction 20kg" },
        { id: 3, unlocked: true, name: "traction 30kg"},
        { id: 4, unlocked: true, name: "traction 40kg"},
        { id: 5, unlocked: false, name: "traction 60kg"},
      ]
    },
    {
      name: "callisténie",
      color: "#ffde23",
      angle: 150,
      smallAngle: 150,
      levels: [
        { id: 1, unlocked: true, name: "callisténie"},
      ]
    }
  ];
  
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
                  <p className={`${level.unlocked ?`text-white`: "text-gray-400"}
                                sm:text-md md:text-lg lg:text-xl xl:text-2xl flex
                                `}>
                    {level.name}
                  </p>
                </div>
                <p className={small ? "text-white text-xs" : "hidden"}>
                  {level.name}
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}