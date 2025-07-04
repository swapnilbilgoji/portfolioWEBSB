import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/swapnilbilgoji1" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/swapnilbilgoji" Icon={FiGithub} />
      <SingleContactSocial link="https://wa.me/918088443619" Icon={FaWhatsapp} />
    </div>
  );
};

export default ContactSocial;
