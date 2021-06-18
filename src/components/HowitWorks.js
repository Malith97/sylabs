import React from 'react'

const HowitWorks = () => {
    return (
        <>
            <div className="container mx-auto h-full lg:my-18 lg:max-w-full d sm:max-w-xl lg:mx-14 md:mx-48 xs:mt-7">
                <h1 className="text-center xs:text-4xl lg:text-5xl font-black mb-5 text-blue-900 lg:px-48 sm:px-8 font-sans">How it Works?</h1>
                <h4 className="text-center lg:text-xl font-light mb-12 font-sans">We offer design thinking-based and technology driven services in digital product innovation,
                    customer experience management, and digital transformation.</h4>

                <div class="container">
                    <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">
                        <div class="flex flex-row-reverse md:contents">
                            <div class="bg-blue-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <h3 class="font-semibold text-lg mb-1 font-sans xs:text-md">Discovery & Analysis</h3>
                                <p class="leading-tight text-justify font-sans md:text-xs xs:text-xs">
                                    At the first stage we gather all the necessary details about your idea and define the ultimate development stack
                                </p>
                            </div>
                            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                                </div>
                                <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"></div>
                            </div>
                        </div>
                        <div class="flex md:contents">
                            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-900 pointer-events-none"></div>
                                </div>
                                <div
                                    class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                ></div>
                            </div>
                            <div
                                class="bg-blue-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            >
                                <h3 class="font-semibold text-lg mb-1 font-sans xs:text-md">Planning & Planning</h3>
                                <p class="leading-tight text-justify font-sans md:text-xs xs:text-xs">
                                    At the second stage we focus on organizing the overall structure and behaviours of the components to a gathered to a workable plan
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-row-reverse md:contents">
                            <div
                                class="bg-blue-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                            >
                                <h3 class="font-semibold text-lg mb-1 font-sans xs:text-md">Development & Testing</h3>
                                <p class="leading-tight text-justify font-sans md:text-xs xs:text-xs">
                                    At the third stage, we implement your working prototype ensure that it perform without any bugs or errors
                                </p>
                            </div>
                            <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                                </div>
                                <div
                                    class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                ></div>
                            </div>
                        </div>
                        <div class="flex md:contents">
                            <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                                <div class="h-full w-6 flex items-center justify-center">
                                    <div class="h-full w-1 bg-blue-800 pointer-events-none"></div>
                                </div>
                                <div
                                    class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow"
                                ></div>
                            </div>
                            <div class="bg-blue-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto ml-auto shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                <h3 class="font-semibold text-lg mb-1 font-sans xs:text-md">Optimize & Maintain</h3>
                                <p class="leading-tight text-justify font-sans md:text-xs xs:text-xs">
                                    At the fourth stage, we optimize your working prototype ensure that it gives you value for your money and performing at peak level
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowitWorks;
