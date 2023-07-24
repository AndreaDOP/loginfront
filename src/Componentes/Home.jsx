import React from 'react';

const Home = () => {
  return (
    <div className="bg-custom-background-image bg-cover bg-center h-screen flex items-center">
      <section className="text-gray-600 body-font w-full">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center">
          <div className="lg:w-2/3 md:w-1/2 bg-white bg-opacity-50 flex flex-col w-full mb-16 p-8 items-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
              <br className="hidden lg:inline-block" />readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Botón</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Botón</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;



