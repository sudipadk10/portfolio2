"use client";
import { Link } from "react-scroll";

const MoveTop = () => {
  return (
    <Link
      to="home"
      spy={true} // Make Link selected when scroll is at its targets position
      smooth={true} // Animation
      offset={-70} // Scroll additional px (like padding)
      duration={500}
      className="inline-block border border-[#C778DE] py-2 px-4 text-white mx-auto mb-2 hover:cursor-pointer"
    >
      Move to Top
    </Link>
  );
};
export default MoveTop;
