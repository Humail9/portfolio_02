import React from "react";

const Skills = () => {
  return (
    <div id="Skills" className="container pt-2.5  ">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl">Technologies i work with</h2>
          <p className=" pt-2">{ `            
           I have a solid foundation in web development, specializing in
            HTML,CSS and JavaScript. My experience extends to using framework
            like React and Next.js to creat dynamic and user-friendly
            applications. I'm also proficient in Tailwind CSS for afficent
            styling and design. With a passion for learning, I stay update on
            the latest technologies to enhance my skill set and contribute
            effectively to projects.`}
          </p>
        </div>
        <div className="grid grid-cols-2 text-accent text-2xl sm:text-2xl">
        <div className="space-y-2">
        <h2>TypeScript</h2> 
          <h2>Next.js</h2>

          <h2>React.js</h2>
          <div className="space-y-2">
        <h2>HTML</h2> 
          <h2>CSS</h2>
          <h2>Tailwindcss</h2>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
