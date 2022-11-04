import "./linkbox.css";
import slackIcon from "../src/assets/slack.svg";
import githubIcon from "../src/assets/github.svg";
import { Link } from "react-router-dom";

const Linkbox = () => {
  return (
    <main>
      <div className="links">
        <a
          id="twitter__link"
          href="https://twitter.com/adedotxn"
          target="_blank"
        >
          Twitter Link
        </a>
        <a id="btn__zuri" href="https://training.zuri.team/" target="_blank">
          Zuri Team
        </a>
        <a id="books" href="http://books.zuri.team/" target="_blank">
          Zuri Books
        </a>
        <a
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=PhilipAdewole"
          target="_blank"
        >
          Python Books
        </a>
        <a id="pitch" href="https://background.zuri.team/" target="_blank">
          Background Check for Coders
        </a>
        <a
          id="book__design"
          href="https://books.zuri.team/design-rules"
          target="_blank"
        >
          Design Books
        </a>

        <Link id="contact" to="/contact">
          Contact Me
        </Link>
      </div>

      <div className="icon__links">
        <a href="https://t.co/rpfEE3DFKZ" target="_blank">
          <img src={slackIcon} alt="slack link" />
        </a>
        <a href="https://github.com/adedotxn/stageone-hngi9" target="_blank">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
    </main>
  );
};

export default Linkbox;
