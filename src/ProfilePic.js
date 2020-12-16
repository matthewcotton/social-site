import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import buck0 from "./resources/buck0.jpg";
import buck1 from "./resources/buck1.jpg";
import buck2 from "./resources/buck2.jpg";
import buck3 from "./resources/buck3.jpg";
import buck4 from "./resources/buck4.jpg";
import buck5 from "./resources/buck5.jpg";
import buck6 from "./resources/buck6.jpg";
import buck7 from "./resources/buck7.jpg";
import buck8 from "./resources/buck8.jpg";
import buck9 from "./resources/buck9.jpg";

class ProfilePic extends React.Component {
  selectProfilePic(id) {
    switch (id % 10) {
      case 0:
        return buck0;
      case 1:
        return buck1;
      case 2:
        return buck2;
      case 3:
        return buck3;
      case 4:
        return buck4;
      case 5:
        return buck5;
      case 6:
        return buck6;
      case 7:
        return buck7;
      case 8:
        return buck8;
      case 9:
        return buck9;
      default:
        return buck0;
    }
  }

  render() {
    return (
      <Image
        fluid
        className="mx-auto profile-pic"
        src={this.selectProfilePic(this.props.userId)}
      />
    );
  }
}

export default ProfilePic;
