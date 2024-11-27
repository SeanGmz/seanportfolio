const Info = () => {
  return (
    <div className="border-solid border-2 xl:px-32 border-white-600 flex flex-col xl:flex-row items-center justify-between xl:pt-20 xl:pb-24">
      <div className="text-center xl:text-left py-10 xl:py-0">
        <h1 className="text-7xl mb-4 xxl:text-7xl xl:text-6xl md:text-4xl sm:text-3xl">
          Hi, <span>I'm Sean Gomez </span>
        </h1>
        <p className="max-w-[500px] sm:text-sm md:text-md lg:text-base text-white/50">
          A student aspiring to be full-stack web developer.
        </p>
      </div>
      <div className="">
        <img
          src="https://avatars.githubusercontent.com/u/69741071?v=4"
          alt="Sean Gomez"
          className="w-40 h-40 rounded-full"
        />
      </div>
    </div>
  );
};

const BriefInfo = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-between xl:px-32 my-20 items-center">
      <div className="w-full text-center">
        <img
          src="https://avatars.githubusercontent.com/u/69741071?v=4"
          alt="Sean Gomez"
          className="w-auto mx-auto h-40 rounded-full "
        />
      </div>
      <div className="w-full px-10 xl:px-20 text-justify xl:text-left lg:text-base  py-10 xl:py-0">
        <p>
          Hello, I'm Sean Patrick A. Gomez, 4th year Information Technology
          student at La Consolacion College Manila with a strong foundation in
          front-end and back-end web development. I aim to create innovative and
          cutting edge solutions through technology, with a focus on web
          development and sustainable IT practices. my adaptability and
          persistence drive me t ocontinously improve my technical skills and
          contribute meaningfully to the tech industry. Nice to meet you and
          welcome to my personal portfolio.
        </p>
      </div>
    </div>
  );
};

const GenInfo = () => {
  return (
    <div>
      <Info />
      <BriefInfo />
    </div>
  );
};

export default GenInfo;
