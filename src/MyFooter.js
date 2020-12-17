import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalFooter from "react-bootstrap/ModalFooter";
import "./App.css";

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
          <p className="license">
            Photos by{" "}
            <a
              href="https://unsplash.com/photos/BGDOQuNBtWs"
              target="_blank"
              rel="noreferrer"
            >
              Annie Spratt,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/62SSgxmRf2Y"
              target="_blank"
              rel="noreferrer"
            >
              Anthony Roberts,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/4vIJuuJE5pQ"
              target="_blank"
              rel="noreferrer"
            >
              Diana Parkhouse,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/pRLmCBgIcq8"
              target="_blank"
              rel="noreferrer"
            >
              Dom Roberts,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/uC3fQgJ5OD0"
              target="_blank"
              rel="noreferrer"
            >
              Ernesto Velázquez,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/C5d-P1m24D0"
              target="_blank"
              rel="noreferrer"
            >
              James Corbett,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/-FC5Ozeetuw"
              target="_blank"
              rel="noreferrer"
            >
              Ming Jun Tan,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/zeyMA01ZSvc"
              target="_blank"
              rel="noreferrer"
            >
              Pete Wright,
            </a>{" "}
            <a
              href="https://unsplash.com/photos/bwrPwU0BDlE"
              target="_blank"
              rel="noreferrer"
            >
              Rebecca Prest
            </a>{" "}
            and{" "}
            <a
              href="https://unsplash.com/photos/bm5CitVijSs"
              target="_blank"
              rel="noreferrer"
            >
              Mary Kapka
            </a>{" "}
            on{" "}
            <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
              Unsplash.
            </a>
          </p>
        </ModalFooter>
      </div>
    );
  }
}

export default MyFooter;
