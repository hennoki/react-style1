/* eslint-disable react/jsx-key */
import React from "react";
import Slider from "react-slick";

const TestimonialData = [
    {
        id: 1,
        name: "Victor",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Chris Olga",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Anna Scot",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Neto jamkin",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "Lucas Gholler",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/105/105",
    },
    {
        id: 6,
        name: "Amanda",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/106/106",
    },
    {
        id: 7,
        name: "John",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, id placeat natus quas animi aliquam laboriosam aperiam iusto est quibusdam voluptates voluptas nam cupiditate doloribus doloremque sint temporibus dignissimos veritatis! ",
        img: "http://picsum.photos/107/107",
    },
];

function Testimonials() {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* hearder section  */}
                <div className=" text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">
                        What usres are saying
                    </p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">
                        Testimonials
                    </h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400">
                        This are top rated profile for you to contact, trusted
                        base on clients reviews
                    </p>
                </div>

                {/* Testimonial cards  */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div className="my-6">
                                <div
                                    key={data.id}
                                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                                >
                                    <div className="mb-4">
                                        <img
                                            src={data.img}
                                            alt=""
                                            className="rounded-full w-20 h-20"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className=" space-y-3">
                                            <p className="text-xs text-gray-500">
                                                {data.text}
                                            </p>
                                            <h1 className="text-xl font-bold text-black/80 dark:text-light">
                                                {data.name}
                                            </h1>
                                        </div>
                                    </div>

                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                                        ,,
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
