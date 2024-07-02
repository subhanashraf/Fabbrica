import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Navbutton from "./Navbutton";
export default function Navbar(params) {
    const navbar = useRef();
    const [menuVisible, setMenuVisible] = useState(false);

    useGSAP(() => {
        gsap.from('.leftside', {
            top: -800,
            duration: 1,
            delay: 0.5,
        });
        gsap.from('.rightside', {
            top: 800,
            duration: 1,
            delay: 0.5,
        });
    }, {});


    useEffect(() => {
        let navbarvar = navbar.current;
        if (navbarvar) {
            navbarvar.addEventListener('mouseenter', () => {
                gsap.to('.lineone', {
                    width: '50%',
                });
                gsap.to('.linethree', {
                    width: '100%',
                });
            });
            navbarvar.addEventListener('mouseleave', () => {
                gsap.to('.lineone', {
                    width: '100%',
                });
                gsap.to('.linethree', {
                    width: '50%',
                });
            });
        }
    }, [navbar]);

    const Scroll = () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                gsap.to('.navbarbackground', {
                    top: 0,
                    duration: 1,
                    ease: "power4.Out"
                });
                gsap.to('.header', {
                    top: '0.5rem',
                    duration: 1,
                });
            } else if (window.pageYOffset < 200) {
                gsap.to('.navbarbackground', {
                    top: -80,
                    duration: 1,
                    ease: "power1.inOut"
                });
                gsap.from('.header', {
                    top: '1.5rem',
                    duration: 1,
                    ease: "power4.in"
                });
            }
        });
    };


    Scroll();

    function first(prpe) {
        return (
            <>
                <Navbutton />
            </>
        )
    }
    // console.log(navgationVisible);
    function navbarbuttonpartone(params) {
        return (
            <>
                <div className={`  bg-white  h-0.3  duration-100 transition-all  lineone -mt-1.5 w-full   absolute `}></div>
                <div className={` w-full  bg-white duration-100  h-0.3 transition-all  absolute `}></div>
                <div className={`   bg-white h-0.3  duration-100 transition-all  linethree w-1/2 mt-1.5 absolute    `}></div>
            </>
        )
    }
    function navbarbuttonparttwo(params) {
        return (
            <>
                <div className={`  bg-white  h-0.3 duration-100  w-full rotate-45 transition-all    absolute  `} style={{ width: "100%" }}></div>
                <div className={`   bg-white h-0.3  duration-100 -rotate-45 w-full absolute  transition-all    `}></div>
            </>
        )
    }

    return (
        <>
    {/* meun bar call */}
{menuVisible ? first() : ""}

        {/*1: section in navbar and  landing page */}
            <div className="relative overflow-hidden w-full h-screen">
                <div className="bg-black w-full h-20 fixed z-50 -top-20 navbarbackground "></div>
                <header className=" header fixed lg:top-6 z-50 w-full h-20 bg-transparent  text-white flex  justify-between align-middle text-center px-5 md:px-10 lg:px-20 ">
                    <button className=" w-6  relative mb-6  " ref={navbar} onClick={() => {
                        setMenuVisible((prevMenuVisible) => !prevMenuVisible);
                    }}>
                        {menuVisible ? navbarbuttonparttwo() : navbarbuttonpartone()}
                    </button>
                    <NavLink to="/"> <h1 className="text-lg md:text-xl lg-text-2xl mt-6 ">Fabbrica</h1></NavLink>
                    <div className=""><NavLink to="https://www.instagram.com/lafabbricaparis"><img className="w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 mt-6 " src="https://raw.githubusercontent.com/subhanashraf/Fabbrica-website/main/public/image/image-removebg-preview%20(2).png" alt="image not load" /></NavLink> </div>
                </header>
                <div className=" leftside w-full sm:w-1/2 sm:inline-block bg-cover   h-1/2 sm:h-screen sm:relative " style={{ backgroundImage: 'url(https://fabbricagroup.fr/wp-content/uploads/2022/07/Landing_01@2x.webp)' }}> </div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className="sm:inline-block z-10 text-white text-3xl absolute top-[48%]  sm:left-[46%] sm:bg-transparent bg-black sm:h-0 h-20 sm:w-0 w-full text-center "> BeLLo.<br />&Buonoto.</motion.h1>
                <div className="rightside absolute  w-full sm:w-1/2 sm:inline-block bg-cover h-1/2  sm:h-screen " style={{ backgroundImage: 'url(https://fabbricagroup.fr/wp-content/uploads/2022/07/Landing_02@2x.webp)', }}></div>
            </div>

        </>
    );
}