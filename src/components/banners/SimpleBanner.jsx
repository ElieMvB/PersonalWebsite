export function Banner ({banner}) {

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <img src={banner} alt="Main banner" className="w-full" />
        </div>
    );
}