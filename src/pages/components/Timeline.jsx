const Timeline = () => {
    return (
        <div className="scale-[65%] md:scale-100 w-10/12 md:w-7/12 lg:6/12 mx-auto my-10">
            <h1 className="text-3xl text-center font-bold text-[#CFDBD5]">My Career</h1>
            <div className="border-l-2 mt-10">

                {/* <!-- Card 0 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#987feb] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#4719e0] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-purple-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Rutgers IEEE</h1>
                        <h1 className="text-xl font-bold">Developer</h1>
                        <h3>September 2022 - Present</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">ROS, OpenCV, Python</section>
                </div>

                {/* <!-- Card 1 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-[#987feb] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#4719e0] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">Code Ninjas</h1>
                        <h1 className="text-xl font-bold">Tutor for kids aged 4-17</h1>
                        <h3>April 2020 - January 2023</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">Python, CMU CS Academy, Electronics </section>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex place-items-center px-6 py-4 bg-[#987feb] text-[#333533] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                    {/* <!-- Dot Follwing the Left Vertical Line --> */}
                    <div className="w-5 h-5 bg-[#4719e0 ] absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

                    {/* <!-- Line that connecting the box with the vertical line --> */}
                    <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

                    {/* <!-- Content that showing in the box --> */}
                    <div className="flex-auto">
                        <h1 className="text-lg">HachRU Hackathon</h1>
                        <h1 className="text-xl font-bold">Team Member</h1>
                        <h3>September 2022</h3>
                    </div>
                    <section href="#" className="text-center text-[#333533]">Full Stack</section>
                </div>
            </div>
            <section className="mt-4 text-xl text-center text-[#CFDBD5]">But the journey does not end there </section>
        </div>
    );
};

export default Timeline;