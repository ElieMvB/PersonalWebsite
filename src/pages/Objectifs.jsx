import { TopMenu } from "../components/TopMenu";
import {SkillTree} from "../components/SkillTree";

export default function Objectifs () {
    return (
        <div className="bg-slate-900">
            <TopMenu/>
            <div className="w-full h-full bg-slate-900 text-center">
                <h1 className="text-white sm:mt-20 md:text-6xl sm:text-5xl
                                text-4xl mt-10 mb-10">
                  Mes objectifs en callisténie :
                </h1>
                <SkillTree/>
                <div style={{height: '20vh'}} className="sm:hidden"></div>
            </div>
        </div>
    );
}
