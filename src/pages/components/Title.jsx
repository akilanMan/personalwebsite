const Title = () => {
    return (
        <div className="container w-min mx-10 flex flex-col
            text-[#333533]">
            <h1 className="tracking-tighter text-center md:text-left font-bold text-8xl">
                Hi,
                <div>I&apos;m </div>
                <div className="text-[#4719e0]">Akilan</div>
                <div>   </div>
            </h1>
            <p className="text-3xl text-center md:text-left font-bold" style={{ whiteSpace: 'nowrap' }}>
                     Software Engineer
            </p>
        </div >
    );
};

export default Title;