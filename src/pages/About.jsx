import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div className="">
      <Navbar />
      <div>
        <div className="flex justify-center flex-col items-center mt-[5rem]">
          <img
            src="https://media2.giphy.com/media/jTNG3RF6EwbkpD4LZx/giphy.gif"
            alt=""
            width="350px"
          />
          <div className="text-center w-[25rem] ">
            <p className="text-2xl mt-5 font-semibold  ">
              My name is <span className="text-red-600">Mustafa</span> , 18
              years old React developer from Turkey
            </p>

            <p className="text-xl mt-5 leading-8">
              In high school i start to learn coding and software things little
              and little until today, and in april 2022, I start to learn
              front-end finally I'm learning reactjs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;