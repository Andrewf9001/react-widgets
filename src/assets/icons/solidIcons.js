import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faArrowUp,
  faArrowDown,
  faHandBackFist,
  faHand,
  faHandScissors,
  faPlusSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const solidIcons = () => {
  return library.add(
    faArrowUp,
    faArrowDown,
    faHandBackFist,
    faHand,
    faHandScissors,
    faPlusSquare,
    faTrashAlt
  );
};

export default solidIcons;
