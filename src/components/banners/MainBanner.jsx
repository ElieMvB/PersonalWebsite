import planch from "../../assets/images/banners/semi-planch.jpg"

export function MainBanner () {

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img src={planch} alt="Main banner" className="w-full" />
            <div className="absolute insert-0 flex items-center justify-center sm:mb-150 mb-40">
                <p className="sm:text-[50px] font-semibold text-center text-[30px]" >
                    Le site d'Elie !
                </p>
            </div>
        </div>
    );
}