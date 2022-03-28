import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Icons from "./Icons";

// <!-- Add all icons to the library so you can use it in your page -->
library.add(fas, far, fab);

const faw = [{ id: 1, icon: "youtube" }];

const FaIcon = () => {
  return (
    <div>
      {/* <FontAwesomeIcon icon="check-square" />
      <FontAwesomeIcon icon="coffee" />
      <FontAwesomeIcon icon="faLaptop" />
      <FontAwesomeIcon icon="fa-brands fa-font-awesome" />
      <FontAwesomeIcon icon="fab fa-amazon" />
      <FontAwesomeIcon icon={["fab", "github"]} /> */}
      <FontAwesomeIcon icon="user" />
      <FontAwesomeIcon icon="fas, coffee " />
      <FontAwesomeIcon icon="fab fa-youtube" />
      {/* <FontAwesomeIcon icon="faBluetooth" /> */}
      {/* <FontAwesomeIcon icon={"facebook-f"} /> */}
      {/* <FontAwesomeIcon icon={["prefix", "facebook-f"]} /> */}
      {/* <FontAwesomeIcon icon={fas`facebook-f`} /> */}
      {/* <FontAwesome icon={fas`square`} /> */}
      {/* <Icons iconName={"Facebook"} size={12} color={"orange"} /> */}
    </div>
  );
};

export default FaIcon;
