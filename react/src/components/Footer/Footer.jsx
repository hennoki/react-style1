import React from "react";

import Banner from "../../assets/images/foot.jpg";
import footerLogo from "../../assets/images/logo-d.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobile,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa6";

const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

function Footer() {
    return (
        <div style={BannerImg} className="text-white mb-20">
            <div className="container">
                <div
                    data-aos="zoom-in"
                    className="grid md:grid-cols-3 pb-44 pt-5"
                >
                    {/* company details  */}
                    <div className="py-8 px-4">
                        <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                            ghost
                        </h1>
                        <img src={footerLogo} alt="" className="max-w-[50px]" />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Quam non fugiat et consequuntur accusamus
                            voluptatem deleniti dolores aspernatur rem, iste
                            nesciunt illo, ab deserunt nisi officiis error ad.
                            Dolore, odio?
                        </p>
                    </div>
                    {/* footer links  */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={link.title}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {FooterLinks.map((link) => (
                                        <li
                                            className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                                            key={link.title}
                                        >
                                            <span>{link.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* social links  */}

                        <div>
                            <div className="flex items-center gap-3 mt-6">
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="$">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="$">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                                <a href="$">
                                    <FaTwitter className="text-3xl" />
                                </a>
                                <a href="$">
                                    <FaYoutube className="text-3xl" />
                                </a>
                            </div>

                            <div className="mt-6">
                                <div className="flex items-center gap-3">
                                    <FaLocationArrow />
                                    <p>Enugu Nigeria</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <FaMobile />
                                    <p>+234 81379701</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
