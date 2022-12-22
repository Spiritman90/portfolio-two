import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-opensans">{title}</p>
          <p className="mt-2 font-playfair">{description}</p>
        </div>
        <img
          src={`../assets/${projectTitle}.jpeg`}
          alt={projectTitle}
          className="h-full w-full"
        />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10 font-playfair font-bold tracking-wider">
          Here are some of the things I have built, click the card to have a
          look!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            description="Facts Monster, an app that provides information about 250 countries of the world built with React, React-redux and SCSS"
            link="https://flourishing-dasik-334d91.netlify.app/"
          />
          <Project
            title="Project 2"
            description="GalleryOne is an app that brings merchants together. Only authenticated users can use the platform. Built with React, SCSS and Redux Toolkit"
            link="https://galleryone.vercel.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            description="Traveler is an app that receives the destination of a user and then provides the weather update, travel news and side attractions of the location. Built with React, React-Redux, SCSS, and multiple APIs."
            link="https://fervent-montalcini-58eadd.netlify.app/"
          />
          <Project
            title="Project 4"
            description=" Taskify, a mini task management App, created with React, TypeScript and CSS"
            link="https://astounding-gingersnap-066e9d.netlify.app/"
          />
          <Project
            title="Project 5"
            description=" Advise Generator, an advise generating App. Techologies used are React, RTK QUery and TailwindCSS"
            link="https://advice-generator-zl7r.vercel.app/"
          />
          <Project
            title="Project 6"
            description="A multi-section landing page with dynamically-created navigation and a scroll-into-view functionality. Powered by HTML, CSS and JavaScript"
            link="https://spiritman90.github.io/multi-section-landing-page/"
          />
          <Project
            title="Project 7"
            description=" Shopping cart, a mini shopping cart, built with HTML, CSS and JAVASCRIPT"
            link="https://spiritman90.github.io/Shopping-Cart/"
          />

          {/* ROW 3 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
