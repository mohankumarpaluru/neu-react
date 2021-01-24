import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/mohan_pic0.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Mohan Kumar <mark>Paluru</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Python Developer",
            "Applied AI Engineer",
            "Programmer Analyst",
          ]}
          speed={100}
          eraseDelay={80}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
