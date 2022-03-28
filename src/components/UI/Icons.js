import React from "react";
import { render } from "react-dom";
import * as FontAwesome from "react-icons/fa";

const names = [{ id: 1, svg: "FaFacebook" }];

const Icon = (props) => {
  const { iconName, size, color } = props;
  const icon = React.createElement(FontAwesome[iconName]);
  return <div style={{ fontSize: size, color: color }}>{icon}</div>;
};

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Icons = () => {
  // const iconString = "FaBeer";
  // const beer = React.createElement(FontAwesome[iconString]);

  // let font = "facebook";
  // let nam = "Fa" + names.icon.charAt(0).toUpperCase() + names.icon.slice(1);
  // let fass = React.createElement(FontAwesome[nam]);
  // console.log(fass);

  // if (<FontAwesome.FaFacebook />)

  // names.map(el => el.)

  return (
    <div>
      {/* <FontAwesome.FaBeer />
      <FontAwesome.FaFacebook />
      {beer} */}
      {/* <FontAwesomeIcon icon={solid("user-secret")} /> */}
      {/* <FontAwesomeIcon icon={regular("coffee")} /> */}
      {/* <FontAwesomeIcon icon={brands("twitter")} /> */}
      {/* <FontAwesomeIcon icon="fab fa-twitter" /> */}
      {<FontAwesome.FaTwitter />}
      {/* <div style={{ fontSize: 24, color: "orange" }}>{faBeer}</div> */}
      {/* <Icon iconName={"FaBeer"} size={12} color="orange" /> */}
      <Icon iconName={"FaFacebook"} size={12} color="orange" />
    </div>
  );
};

export default Icons;
