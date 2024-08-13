import React from "react";
import Img1 from "../../assets/secound/item (2).jpg";
import Img2 from "../../assets/secound/item (4).jpg";
import Img3 from "../../assets/secound/item (1).jpg";
import { FaStar } from "react-icons/fa6";

const ActiveProfilesData = [
    {
        id: 1,
        img: Img1,
        title: "Hair stylist",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque aliquid, quos, cupiditate perspiciatis aperiam enim tempore temporibus. Alias, consectetur.",
    },
    {
        id: 2,
        img: Img2,
        title: "Fashion Designer",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque aliquid, quos, cupiditate perspiciatis aperiam enim tempore temporibus. Alias, consectetur.",
    },
    {
        id: 3,
        img: Img3,
        title: "Hair stylist",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, doloremque aliquid, quos, cupiditate perspiciatis aperiam enim tempore temporibus. Alias, consectetur.",
    },
];

function SecSection({ handleOrderPopup }) {
    return (
        <div>
            <div className="container">
                {/* Header section  */}

                <div className=" text-left mb-24">
                    <p className="text-sm text-primary">
                        Active Profile Recommended for you
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Active Profiles
                    </h1>

                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        This are top active profiles for you to contact, trusted
                        base data
                    </p>
                </div>

                {/* Body section  */}
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
                    {ActiveProfilesData.map((data) => (
                        // eslint-disable-next-line react/jsx-key
                        <div
                            data-aos="zoom-in"
                            className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
                        >
                            {/* image section  */}
                            <div className=" h-[100px]">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                                />
                            </div>

                            {/* details section  */}
                            <div className=" p-4 text-center">
                                <div className="w-full flex items-center justify-center gap-1">
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                                <h1 className="text-xl font-bold">
                                    {data.title}
                                </h1>
                                <p className=" text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                                    {data.description}
                                </p>

                                <button
                                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                                    onClick={handleOrderPopup}
                                >
                                    Contact now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SecSection;
