import { styles } from '../styles';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.padding} absolute inset-0 top-[120px] max-w-7xl mx-auto justify-center`}>
        <div className="flex flex-col items-center">
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className="text-secondary">Tayba</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a Software Engineering Student at McGill.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero