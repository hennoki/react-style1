// import logo from "../../assets/logo-d.png";
import logo from "../../assets/images/logo-d.png";
import { IoMdCalendar, IoMdSearch } from "react-icons/io";
import {
    FaCaretDown,
    FaCartShopping,
    FaOilCan,
    FaPlug,
    FaTruckMoving,
} from "react-icons/fa6";
import DarkMode from "./DarkMode";
import {
    GiAutoRepair,
    GiFullPizza,
    GiHouseKeys,
    GiTap,
    GiVacuumCleaner,
} from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import {
    MdCarRepair,
    MdDeliveryDining,
    MdLocalCarWash,
    MdOutlineArrowRight,
    MdRepartition,
} from "react-icons/md";
import { PiHamburgerFill } from "react-icons/pi";

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "About Us",
        link: "/#",
    },
];
const DropdownLinks1 = [
    {
        id: 1,
        name: " Electricians",
        link: "/#",
        icon: <FaPlug />,
    },
    {
        id: 2,
        name: "Home Cleaner",
        link: "/#",
        icon: <GiVacuumCleaner />,
    },
    // {
    //     id: 3,
    //     name: "Locksmiths",
    //     link: "/#",
    // },
    {
        id: 4,
        name: "Movers",
        link: "/#",
        icon: <FaTruckMoving />,
    },
    {
        id: 5,
        name: "Plumber",
        link: "/#",
        icon: <GiTap />,
    },
    {
        id: 6,
        name: " AC Installer",
        link: "/#",
        icon: <TbAirConditioning />,
    },
];
const DropdownLinks2 = [
    {
        id: 1,
        name: "Delivery",
        link: "/#",
        icon: <MdDeliveryDining />,
    },
    {
        id: 2,
        name: "Reservation",
        link: "/#",
        icon: <IoMdCalendar />,
    },
    {
        id: 3,
        name: "Burgers",
        link: "/#",
        icon: <PiHamburgerFill />,
    },
    {
        id: 4,
        name: "Pizzas",
        link: "/#",
        icon: <GiFullPizza />,
    },
];
const DropdownLinks3 = [
    {
        id: 1,
        name: "Auto Repair",
        link: "/#",
        icon: <GiAutoRepair />,
    },
    {
        id: 2,
        name: "Auto Detailing",
        link: "/#",
        icon: <MdCarRepair />,
    },
    {
        id: 3,
        name: "Car Wash",
        link: "/#",
        icon: <MdLocalCarWash />,
    },
    {
        id: 4,
        name: "Body Shops",
        link: "/#",
        icon: <MdRepartition />,
    },
    {
        id: 5,
        name: "Oil Change",
        link: "/#",
        icon: <FaOilCan />,
    },
    {
        id: 6,
        name: " Car Dealer",
        link: "/#",
        icon: <GiHouseKeys />,
    },
];
const DropdownLinks4 = [
    {
        id: 1,
        name: "home",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 2,
        name: "Restaurants",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 3,
        name: "Home Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 4,
        name: "Auto Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 5,
        name: "More",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 6,
        name: " Contract",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
];
const DropdownLinks5 = [
    {
        id: 1,
        name: "home",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 2,
        name: "Restaurants",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 3,
        name: "Home Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 4,
        name: "Auto Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 5,
        name: "More",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 6,
        name: " Contract",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
];
const DropdownLinks6 = [
    {
        id: 1,
        name: "home",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 2,
        name: "Restaurants",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 3,
        name: "Home Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 4,
        name: "Auto Service",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 5,
        name: "More",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
    {
        id: 6,
        name: " Contract",
        link: "/#",
        icon: <MdOutlineArrowRight />,
    },
];

function Nav({ handleOrderPopup }) {
    return (
        <div className=" shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* upper nav  */}
            <div className=" bg-primary/40 py-2">
                <div className=" container flex justify-between items-center">
                    <div>
                        <a
                            className=" font-bold text-2xl sm:text-3xl flex gap-2"
                            href="#"
                        >
                            <img
                                className=" w-10 uppercase "
                                src={logo}
                                alt="logo"
                            />
                            Ghost
                        </a>
                    </div>

                    {/* searchbar  */}
                    <div className=" flex justify-between items-center gap-4 ">
                        <div className=" relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                            />
                            <IoMdSearch className=" text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* order buttons  */}
                        <button
                            onClick={() => handleOrderPopup()}
                            className=" bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className=" group-hover:block hidden transition-all duration-200">
                                order
                            </span>
                            <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* Darkmood switch  */}

                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* lower nav  */}
            <div data-aos="zoom-in" className=" flex justify-center">
                <ul className=" sm:flex hidden items-center space-x-6">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a
                                href={data.link}
                                className=" inline-block px-4 hover:text-primary duration-200"
                            >
                                {data.name}{" "}
                            </a>
                        </li>
                    ))}

                    {/* dropdown links */}

                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            Home Services
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks1.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block w-full  rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            Restaurants
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks2.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            Auto Services
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks3.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            More Services
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks4.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            Profession
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks5.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    <li className=" group relative cursor-pointer  hover:text-primary duration-200">
                        <a
                            href="#"
                            className="flex items-center gap-[2px] py-2"
                        >
                            Contact Us
                            <span>
                                <FaCaretDown className=" transition-all duration-200 group-hover:rotate-180" />
                            </span>
                        </a>

                        <div className=" absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black shadow-md bg-gray-100 ">
                            <ul>
                                {DropdownLinks6.map((data) => (
                                    <li key={data.id}>
                                        <a
                                            href={data.link}
                                            className=" inline-block inline-grid w-full rounded-md p-2 hover:bg-primary/20"
                                        >
                                            <span className=" inline-flex gap-1">
                                                {data.icon} {data.name}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
