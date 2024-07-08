import "./Footer.scss";
import github from "src/assets/icons/github.svg";

export const Footer = () => {
  return (
    <footer className="footer flex group p-4 ">
      <a
        aria-label={"Github"}
        href={"https://github.com/Dimar1510/memory-card"}
        className="link"
        target="_blank"
      >
        <div className="group">
          <span className="logo text-center text-text-clr group-hover:scale-125  transition-transform duration-500 group-hover:rotate-[360deg] will-change-transform ">
            <i className="devicon-github-original"></i>
          </span>
          <span className="name uppercase">Dmitry Martynov</span>
        </div>
      </a>
    </footer>
  );
};
