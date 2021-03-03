import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalFooter from "react-bootstrap/ModalFooter";
import "../Styles/App.css";

class MyFooter extends React.Component {
  render() {
    return (
      <div>
        <br />
        <ModalFooter className="footer text-right">
          <p className="license">
            <a
              href="https://thenounproject.com/search/?q=hoof&i=3071279"
              target="_blank"
              rel="noreferrer"
            >
              hoof
            </a>{" "}
            by P Thanga Vignesh from the Noun Project.{" "}
          </p>
        </ModalFooter>
      </div>
    );
  }
}

export default MyFooter;
