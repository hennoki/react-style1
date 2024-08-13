import React from "react";
import Img1 from "../../assets/first/item (3).jpg";
import Img2 from "../../assets/first/Img2.jpg";
import Img3 from "../../assets/first/Img3.jpg";
import Img4 from "../../assets/first/engineer.jpg";
import Img5 from "../../assets/first/Img5.jpg";
import { FaStar } from "react-icons/fa6";
// import Aos from "aos";

const ProfilersData = [
    {
        id: 1,
        img: Img1,
        title: "Tailor",
        rating: 5.0,
        color: "primary",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Fashion Designer",
        rating: 4.7,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Plumber",
        rating: 5.0,
        color: "green",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Engineer",
        rating: 4.0,
        color: "white",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img5,
        title: "Electrician",
        rating: 4.5,
        color: "orange",
        aosDelay: "800",
    },
];

function FirstSection() {
    return (
        <div className="mt-14 mb-12">
            <div className=" container">
                {/* Header section  */}
                <div className=" text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        Top Verified Profiles Recommended for you{" "}
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Top Profiles
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        This are top rated profile for you to contact, trusted
                        base on clients reviews
                    </p>
                </div>

                {/* Body section  */}
                <div>
                    <div className=" grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {/* profile section  */}
                        {ProfilersData.map((data) => (
                            // eslint-disable-next-line react/jsx-key
                            <div
                                data-aos="fade-up"
                                data-aos-delay={data.aosDelay}
                                // data-aos="zoom-in"
                                key={data.id}
                                className=" space-y-3"
                            >
                                <img
                                    src={data.img}
                                    alt=""
                                    className="h-[220px] w-[150px] object-cover rounded-md"
                                />

                                <div>
                                    <h3 className="font-semibold">
                                        {data.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {data.color}
                                    </p>
                                    <div className=" flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* View more button  */}
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FirstSection;
