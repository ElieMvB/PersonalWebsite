import { TopMenu } from "../components/TopMenu";
import {SkillTree} from "../components/SkillTree";

  const OBJECTIVES = [
    {
      name: "front",
      color: "#ff4444",
      angle: -100,        // en degrés
      smallAngle: -130,
      levels: [
        { id: 1, unlocked: true, name: "callisthénie" },
        { id: 2, unlocked: true, name: "front lever 3s", link: "front-lever-3s"},
        { id: 3, unlocked: false, name: "front lever 5s", link: "front-lever-5s" },
        { id: 4, unlocked: false, name: "front lever 10s", link: "front-lever-10s" },
      ]
    },
    {
      name: "iron cross",
      color: "#44ccff",
      angle: 120,
      smallAngle: 35,
      levels: [
        { id: 1, unlocked: true, name: "" },
        { id: 2, unlocked: false, name: "iron cross 3s", link: "iron-cross-3s" },
        { id: 3, unlocked: false, name: "iron cross 5s", link: "iron-cross-5s" }
      ]
    },
        {
      name: "bring sally up",
      color: "#44ff5d",
      angle: -30,
      smallAngle: -35,
      levels: [
        { id: 1, unlocked: true, name: "" },
        { id: 2, unlocked: true, name: "bring sally up", link: "bring-sally-up" },
        { id: 3, unlocked: false, name: "2 x bring sally up", link: "2-x-bring-sally-up" }
      ]
    },
    {
      name: "hand stand",
      color: "#aa55ff",
      angle: 60,
      smallAngle: 130,
      levels: [
        { id: 1, unlocked: true, name: ""},
        { id: 2, unlocked: true, name: "hand stand 10s", link: "hand-stand-10s" },
        { id: 3, unlocked: false, name: "hand stand 30s", link: "hand-stand-30s" },
        { id: 4, unlocked: false, name: "hand stand push up", link: "hand-stand-push-up" }
      ]
    },
        {
      name: "tractions lestées",
      color: "#1e14da",
      angle: 200,
      smallAngle: 180,
      levels: [
        { id: 1, unlocked: true, name: ""},
        { id: 2, unlocked: true, name: "traction 20kg", link: "traction-20kg" },
        { id: 3, unlocked: true, name: "traction 30kg", link: "traction-30kg" },
        { id: 4, unlocked: true, name: "traction 40kg", link: "traction-40kg" },
        { id: 5, unlocked: false, name: "traction 60kg", link: "traction-60kg" },
      ]
    },
    {
      name: "callisthénie",
      color: "#ffde23",
      angle: 150,
      smallAngle: 150,
      levels: [
        { id: 1, unlocked: true, name: "callisthénie", link: "" },
      ]
    }
  ];

export default function Objectifs () {
    return (
        <div className="bg-slate-900">
            <TopMenu/>
            <div className="w-full h-full bg-slate-900 text-center">
                <h1 className="text-white sm:mt-20 md:text-6xl sm:text-5xl
                                sm:text-4xl text-2xl mt-10 mb-10">
                  Mes objectifs en callisthénie :
                </h1>
                <SkillTree branches={OBJECTIVES}/>
                <div style={{height: '30vh'}} className="sm:hidden"></div>
            </div>
        </div>
    );
}
