import React from "react";
import mainlogo from "../Assets/mainlogo.png";
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
	return (
		<div className="bg-black px-40 pt-10 pb-10 flex flex-wrap">
			{/* Logo and Social Icons */}
			<div className="w-1/3">
				<div className="max-h-40 max-w-40">
					<img src={mainlogo} alt="Main Logo" />
				</div>
				<div className="flex space-x-6 text-[#5FCBBA]">
					<BiLogoFacebookCircle />
					<BiLogoTwitter />
					<BiLogoInstagramAlt />
					<BsLinkedin />
					<BsGithub />
				</div>
			</div>

			{/* Footer Links */}
			<div className="text-white w-2/3 flex flex-wrap py-10">
				<div className="w-1/3 text-white">
					<span className="hover:text-[#5FCBBA]">Email</span>
					<br />
					<span className="hover:text-[#5FCBBA]">Contact Number</span>
					<br />
					<span className="hover:text-[#5FCBBA]">Details</span>
				</div>
				<div className="w-1/3 text-white">
					<span className="hover:text-[#5FCBBA]">Facebook</span>
					<br />
					<span className="hover:text-[#5FCBBA]">Github</span>
					<br />
					<span className="hover:text-[#5FCBBA]">LinkedIn</span>
					<br />
					<span className="hover:text-[#5FCBBA]">Instagram</span>
				</div>
				<div className="w-1/3 text-white">
					<span className="hover:text-[#5FCBBA]">Terms & Conditions</span>
					<br />
					<span className="hover:text-[#5FCBBA]">Privacy Policy</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
