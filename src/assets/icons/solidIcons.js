import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowUp,
  faArrowDown,
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

const solidIcons = () => {
  return library.add(
    faArrowUp,
    faArrowDown,
    faHandBackFist,
    faHand,
    faHandScissors
  );
};

export default solidIcons;
