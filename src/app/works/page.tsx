const page = () => {
  return (
    <div className="bg-[#282C34] w-full text-white py-0 mt-40 mb-40" id="works">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-8 flex items-center">
        <h2 id="projects" className="text-3xl font-bold">
          <span className="text-[#C778DE]">#</span>
          projects
        </h2>
        <hr className="w-3/5 mx-4 border-t border-[#C778DE]" />
        <div className="flex-grow"></div>
        <a
          href="/projects"
          className="text-[#ACB2CF] hover:text-white transition-colors"
        >
          View all ~~&gt;
        </a>
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
          <div className="border border-[#ACB2CF] self-start flex-shrink-0">
            <img
              src="/projects/portfolio/developer/1/projects/project1.webp"
              alt="Project 1"
              className="w-full h-auto"
            />
            <div className="text-[#ACB2CF] mt-2">
              <div className="p-2">
                <p>HTML SCSS Python Flask</p>
              </div>
              <div className="p-4 border-t border-[#ACB2CF]">
                <p className="text-white text-xl">ChertNodes</p>
                <p className="mt-4">Minecraft servers hosting</p>
                <div className="flex gap-4 mt-4">
                  <button className="inline-block border border-[#C778DE] py-2 px-4 text-white">
                    Live &lt;~&gt;
                  </button>
                  <button className="inline-block text-[#ACB2CF] [#ACB2CF] border border-[#C778DE] py-2 px-4 text-white">
                    Cached &gt;=
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#ACB2CF] self-start flex-shrink-0">
            <img
              src="/projects/portfolio/developer/1/projects/project2.webp"
              alt="Project 1"
              className="w-full h-auto"
            />
            <div className="text-[#ACB2CF] mt-2 text-lg">
              <div className="p-2">
                <p>React Express Discord.js Node.js</p>
                <p className="mt-4">HTML SCSS Python Flask</p>
              </div>
              <div className="p-4 border-t border-[#ACB2CF]">
                <p className="text-white text-2xl">ProtectX</p>
                <p className="mt-4">Discord anti-crash bot</p>
                <div className="flex gap-4 mt-4">
                  <button className="inline-block border border-[#C778DE] py-2 px-4 text-white">
                    Live &lt;~&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-[#ACB2CF] self-start flex-shrink-0">
            <img
              src="/projects/portfolio/developer/1/projects/project3.webp"
              alt="Project 1"
              className="w-full h-auto"
            />
            <div className="text-[#ACB2CF] mt-2 text-lg">
              <div className="p-2">
                <p>CSS Express Node.js</p>
              </div>
              <div className="p-4 border-t border-[#ACB2CF]">
                <p className="text-white text-2xl">Kahoot Answers Viewer</p>
                <p className="mt-4">Get answers to your kahoot quiz</p>
                <div className="flex gap-4 mt-4">
                  <button className="inline-block border border-[#C778DE] py-2 px-4 text-white">
                    Live &lt;~&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
