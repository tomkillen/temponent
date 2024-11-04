import { Component } from "../render";

const Heading: Component = ({
  title
} : {
  title: string
}): string => {
  return `#${title}\n\n`;
}

export default Heading;