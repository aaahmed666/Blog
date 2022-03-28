import React from "react";
import ReactDOM from "react-dom";

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import * as Icons from "@fortawesome/free-solid-svg-icons";

// const iconList = Object.keys(Icons)
//   .filter((key) => key !== "fas" && key !== "prefix")
//   .map((icon) => Icons[icon]);

// library.add(...iconList);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";

// // Add all icons to the library so you can use it in your page
// library.add(fas, far, fab);

// import { library } from "@fortawesome/fontawesome-svg-core";
// import * as icons from "@fortawesome/free-solid-svg-icons";
// import { isObject, isNull } from "lodash";

// library.add(
//   ...Object.keys(icons)
//     .filter((icon) => isObject(icons[icon]) && !isNull(icons[icon]))
//     .map((icon) => icons[icon])
// );

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// <!-- Add all icons to the library so you can use it in your page -->
library.add(fas, far, fab);
