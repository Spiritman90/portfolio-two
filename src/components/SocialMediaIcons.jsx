import github from "../assets/github.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/adewole-oluwafemi-1313a622b/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://twitter.com/phemmypete"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Spiritman90"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={github} className="w-8" />
      </a>
      <a
        className="py-1 px-4 bg-white font-bold font-opensans rounded text-deep-blue hover:bg-slate-900 hover:text-white hover:animate-bounce"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/13juITkOQ6IC-OwGVNlv2ec8aiXp_7vBk/view?usp=sharing"
      >
        Resume
      </a>
    </div>
  );
};

export default SocialMediaIcons;
