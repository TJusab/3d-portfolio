import { styles } from "../styles";
import TypeWriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto justify-center`}
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row">
            <div className={`${styles.heroHeadText}`}>
              <TypeWriter
                options={{ cursor: "" }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, I'm Tayba !")
                    .changeDeleteSpeed(500)
                    .deleteChars(1)
                    .typeString(" :)")
                    .pauseFor(500)
                    .changeDeleteSpeed(50)
                    .deleteChars(9)
                    .start();
                }}
              />
            </div>
            <div className={`${styles.heroHeadText} text-secondary ml-5`}>
              <TypeWriter
                options={{ cursor: "" }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(6000).typeString(" Tayba").start();
                }}
              />
            </div>
          </div>
          <div className={`${styles.heroSubText} text-white`}>
            <TypeWriter
              options={{ cursor: "" }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(7000)
                  .changeDelay(50)
                  .typeString("I am a 2nd Year")
                  .pauseFor(500)
                  .deleteChars(8)
                  .typeString("3rd Year Software Engineering Student.")
                  .start();
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
