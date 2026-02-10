import planch from "../../assets/images/banners/semi-planch.jpg"

export function MainBanner () {

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img src={planch} alt="Main banner" className="w-full sm:mt-3 -mt-7" />
            <div className="absolute insert-0 flex items-center justify-center 2xl:mb-135 mb-20
                sm:mb-40 md:mb-45 lg:mb-75 xl:mb-105">
                <p className="md:text-[50px] font-semibold text-center text-[30px]" >
                    Le site d'Elie !
                </p>
            </div>
        </div>
    );
}