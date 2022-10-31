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
              My name is <span className="text-red-600">Şadi</span> , 39
              years old React developer from Turkey
            </p>

            <p className="text-xl mt-5 leading-8">
              I'm a ex-navyman, I start to learn
              front-end finally I'm learning reactjs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;