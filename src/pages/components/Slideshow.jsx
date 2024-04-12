const Slideshow = () => {
    return (
        <div className='place-content-center flex flex-wrap gap-6' >
            
            <div className="max-w-sm bg-[#242423] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/static/spchk.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8EDDF]">Spell Check</h5>
                    </a>
                    <p className="mb-3 font-normal text-[#E8EDDF]">Implemented a version of spell check in C using POSIX functions. This functional spellcheck can analyze words in a document that are spelled wrong, using either a custom dictionary or global.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#987feb] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#987feb]">
                        Read More 
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[#242423] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src="/static/netflix.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8EDDF]">Netflix Clone</h5>
                    </a>
                    <p className="mb-3 font-normal text-[#E8EDDF]">Using react.js, I implemented a clone of the netflix interface with attractive animations and design. I used an API that used realtime data regarding Top 10 Movies, tv shows, images, descriptions, etc. This project helped get my fundamentals in web-development and API accessing. Hosted on the Google Firebase server.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#987feb] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#987feb]">
                        Read More
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[#242423] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://google.com">
                    <img className="rounded-t-lg" src="/static/2048.jpg" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://google.com">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8EDDF]">2048</h5>
                    </a>
                    <p className="mb-3 font-normal text-[#E8EDDF]">Built and implemented a version of the popular game, 2048. Used java and 2d arrays, as well as an interactive colorful interface for a fun experience.  </p>
                    <a href="https://google.com" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#987feb] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                </div>
            </div>


            <div className="max-w-sm bg-[#242423] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://google.com">
                    <img className="rounded-t-lg" src="/static/housing.png" alt="" />
                </a>
                <div className="p-5">
                    <a href="https://google.com">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8EDDF]">Housing Set Data Analysis</h5>
                    </a>
                    <p className="mb-3 font-normal text-[#E8EDDF]">Utilized R and Regression Methods (Naive Bayes and Regression Trees) to analyze a dataset regarding houses in Australia. I discovered some common trends regarding the housing crisis in Autstralia. I cleaned the dataset and found working imperative factors that contribute to the pricing of a house. Using the neighborhood, number of bedrooms, and number of bathrooms of a house, I was able to classify/predict the price of the house. I was able to find trends and report them in visualizations.  </p>
                    <a href="https://google.com" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#987feb] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                </div>
            </div>

            <div className="max-w-sm bg-[#242423] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href=" ">
                    <img className="rounded-t-lg" src="/static/MNIST.png" alt="" />
                </a>
                <div className="p-5">
                    <a href=" ">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E8EDDF]">Neural Network Handwriting Recognition</h5>
                    </a>
                    <p className="mb-3 font-normal text-[#E8EDDF]">Used Python, TensorFlow, and neural networks to make a machine learning model that can predict letters from handwriting with a 91% accuracy. Used the MNIST database to split and train the model with. </p>
                    {/* <div className="static bottom-0 left-0"> */}
                    <a href=" " className="inline-flex bottom-0 left-0 items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#F5CB5C] rounded-lg hover:bg-[#e6ad0f] focus:ring-4 focus:outline-none focus:ring-[#fae7b2]">
                        Read more
                    </a>
                    {/* </div> */}
                </div>
            </div>
        </div >
    );
};

export default Slideshow;