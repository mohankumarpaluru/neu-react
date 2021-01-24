import { Component } from "react";
import Social from "../components/Social";
import Map from "../img/map.png";

class Contact extends Component {
  render() {
    return (
      <div className="condiv contact">
        <h1 className="subtopic">Contact Me</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="con_out">
          <div class="con_in">
          <a href="https://goo.gl/maps/upnFg2DEA5tDK6YB8">
            <img src={Map} class="co1" alt="Map"></img>
            </a>
          </div>
        </div>
        <a href="https://drive.google.com/uc?export=download&id=1aJKRP_Zvu8UMW5C4gnXwJKjip1mXdocX">
          <div className="back3">Download Resume</div>
        </a>
        <a href="mailto:mohankumarpaluru@gmail.com">
          <div className="back3 back4">Contact Me</div>
        </a>
        <div className="hr_line line3">
          <div className="inner3"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Contact;
