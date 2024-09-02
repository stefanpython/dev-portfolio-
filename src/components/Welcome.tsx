export default function Welcome() {
  return (
    <div className="welcome-container pl-4 pr-4">
      <p className="text-accent pb-5">Hi, my name is </p>

      <h1 className="welcome-name font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl ">
        Stefan Andrei.
      </h1>

      <div className="max-w-[900px] pb-5">
        <h1 className="font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          I build things for the web.
        </h1>
      </div>

      <div className="max-w-[500px]">
        <p>
          I am a software developer specializing in both front-end and back-end
          development. Currently, I am focused on expanding my skills and
          building innovative web solutions.
        </p>
      </div>
    </div>
  );
}
