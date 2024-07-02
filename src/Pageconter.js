import Footer from './components/Footer'
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbutton from './components/Navbutton';
export default function Pageconter(params, { imagealt = "image not found" }) {
    const navbar = useRef();

    const [menuVisible, setMenuVisible] = useState(false);
    const [startscroll, setstartscroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 200) {
                setstartscroll(() => true)
            }
            else if (window.pageYOffset < 260) {
                setstartscroll(() => false)
            }
        })
    }, [])

    function navbarbuttonpartone(params) {
        return (
            <>
                <div className={`   h-0.3  duration-100 transition-all  lineone -mt-1.5 w-full   absolute ${startscroll ? "bg-black" : "bg-white"} `}></div>
                <div className={` w-full   duration-100  h-0.3 transition-all  absolute ${startscroll ? "bg-black" : "bg-white"} `}></div>
                <div className={`   h-0.3  duration-100 transition-all  linethree w-1/2 mt-1.5 absolute ${startscroll ? "bg-black" : "bg-white"}   `}></div>
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
                    ease: "power4.in",
                });
            }
        });
    };
    Scroll();
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

    useEffect(() => {
        gsap.from('.leftside', {
            // top: -800,
            duration: 1,
            delay: 0.5,
        });
        if (window.innerWidth > 640) {
            gsap.from('.rightside', {
                top: 800,
                duration: 1,
                delay: 0.5,
            });
            // console.log('greter');
        }
        if (window.innerWidth < 640) {
            gsap.from('.rightside', {
                top: 0,
                duration: 1,
            });
            console.log('less');
        }

    }, []);

    function first(prpe) {
        return (
            <>
                <Navbutton />
            </>
        )
    }

    return (
        <>
        {/* meun button call */}
            {menuVisible ? first() : ""}
            {/* 1:section navbar and landing page section one  */}
            <div className="relative overflow-hidden w-full h-screen bg-black">
                <div className="bg-white w-full h-20 border-b border-black fixed z-50 -top-20 navbarbackground "></div>
                <header className=" header fixed lg:top-6 z-50 w-full h-20 bg-transparent    flex  justify-between align-middle text-center px-5 md:px-10 lg:px-20 ">
                    <button className=" w-6  relative mb-6  " ref={navbar} onClick={() => {
                        setMenuVisible((prevMenuVisible) => !prevMenuVisible);
                    }}>
                        {menuVisible ? navbarbuttonparttwo() : navbarbuttonpartone()}
                    </button>
                    <NavLink to="/"> <h1 className={`text-lg md:text-xl lg-text-2xl  font-black ${startscroll ? "text-black mt-0 " : "text-white mt-6 "}  `}>Fabbrica {startscroll ? <p className='black font-klim-type-foundry italic font-extralight '>{params.text}  </p> : ""} </h1></NavLink>
                    {startscroll ? <button className='w-28 h-10 mt-2 overflow-hidden mainbutton'>
                        <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                        <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                    </button> : <div ><NavLink to="https://www.instagram.com/lafabbricaparis"> <img className="w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-7 mt-6  " src="https://raw.githubusercontent.com/subhanashraf/Fabbrica-website/main/public/image/image-removebg-preview%20(2).png" alt={imagealt} /></NavLink> </div>}
                </header>{/*header complete  */}
                <div className=" leftside  w-full sm:w-1/2 block sm:inline-block bg-customBlack  h-1/2 sm:h-screen sm:absolure " >
                    <motion.div   initial={{ opacity: 0, y: 2 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay:0.5 } }} className='py-14 sm:py-40 md:mt-40   text-white text-center text-3xl  '>
                        <img className='w-20 mx-auto' src={params.image} alt="" />
                        <h1 >{params.text}</h1>
                    </motion.div>
                </div>

                <div className=" rightside absolute  w-full sm:w-1/2  block sm:inline-block bg-cover h-1/2  sm:h-screen " style={{ backgroundImage: 'url(https://fabbricagroup.fr/wp-content/uploads/2022/06/Montmartre_Cover@2x-768x864.webp)', }}></div>
            </div>
            {/* 2:section  start section in  image and some text  navbar and first section end */}
            <div className='bg-white text-center  py-28 px-20'>
                <motion.div  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='relative w-56 h-40 mx-auto sm:left-20 md:left-40 '>
                    <img className='absolute' src="https://fabbricagroup.fr/wp-content/uploads/2022/07/Sticker_Grazie.svg" alt="" />
                    <img className='absolute top-32 left-32' src="https://fabbricagroup.fr/wp-content/uploads/2022/07/Bello_Buono.svg" alt="Grazie Sticker" />
                </motion.div>
                <motion.p  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='mt-40 text-2xl sm:text-4xl font-extralight tracking-wide leading-none sm:leading-relaxed  font-klim-type-foundrys'>
                    <span className='text-red-700 italic font-black'>Montmartre.</span> Sa butte, ses rues, ses portraitistes, on connaît. Mais avez-vous déjà croisé  <span className='text-red-700 italic font-black'>Charles</span> et son accueil légendaire
                    <span className='text-red-700 italic font-black'>“secondé” </span> par  <span className='text-red-700 italic font-black'>Maurice </span>  son cocker ? La Fabbrica Montmartre importe l’Italie dans votre assiette et vous tape
                    dans le dos pour vous dire  <span className='text-red-700 italic font-black'>‘A presto!’ </span> après votre caffè. Parce que vous reviendrez, c’est sûr. Et parce que
                    maintenant, c’est un peu chez vous ici.
                </motion.p>
            </div>
            {/* 3:section image are text and second  section complete and  third section start in hotel time and  */}
            <div className='container mx-auto'>
                <div className='w-full h-28 py-24 border border-gray-300 text-center bg-white'>
                    <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-red-700 text-3xl italic font-klim-type-foundry'>‘A pazienza no e mai troppa’</motion.h1>
                    <motion.p  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}>On est ouvert!</motion.p>
                </div>

                <div className="w-full h-full flex flex-col md:flex-row content-center">
                    <div className='w-full md:w-1/2 h-full border border-gray-300'>
                        <motion.img  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='w-full md:w-80 mx-auto py-10' src="https://fabbricagroup.fr/wp-content/uploads/2022/06/montmartre-1@2x.webp" alt="image not found" />
                    </div>

                    <div className='w-full md:w-1/2 h-full border border-gray-300 p-6'>
                        <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-center text-3xl my-10'>Horaires & Contact</motion.h1>
                        <div className='flex flex-col md:flex-row gap-6 px-10 text-center'>
                            <div className='sm:flex sm:gap-10  '>
                                <div  className=' flex gap-4 overflow-hidden sm:flex-col sm:gap-0'>
                                    <h1>Lundi</h1>
                                    <h1>Mardi</h1>
                                    <h1>Mercredi</h1>
                                    <h1>Jeudi</h1>
                                    <h1>Vendredi</h1>
                                    <h1>Samedi</h1>
                                    <h1>Dimanche</h1>
                                </div>
                                <div className='flex gap-4 overflow-hidden sm:flex-col sm:gap-0'>
                                    <h1>Fermé</h1>
                                    <h1>12.00/14.30</h1>
                                    <h1>12.00/14.30</h1>
                                    <h1>12.00/14.30</h1>
                                    <h1>12.00/14.30</h1>
                                    <h1>12.00/14.30</h1>
                                    <h1>12.00/14.30</h1>
                                </div>
                            </div>
                            <div className=' hidden md:block'>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                                <h1>19.00/22.30</h1>
                            </div>
                        </div>
                        <ol type="A" className='mt-8  block px-16'>
                            <NavLink to="/" className='block'> A. <span className='underline'>46 rue Caulaincourt 75018 Paris</span></NavLink>
                            <NavLink to="/" className='block'> T. <span className='underline'>01 42 55 14 25</span></NavLink>
                            <NavLink to="/" className='block'> E. <span className='underline'>mastino.paris@gmail.com</span></NavLink>
                        </ol>
                        <div className='w-full  h-40 py-6 text-center mt-10'>
                            <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}lassName='text-2xl italic'>Menu</motion.h1>
                            <motion.p  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='my-2'>On a fait rentrer l’Italie sur une feuille A4.</motion.p>
                            <button className='w-28 h-10 overflow-hidden mainbutton'>
                                <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                                <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4:section third section complete and next four div  */}

            <div className='w-full h-full flex flex-wrap mb-10 '>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full border border-gray-300 rounded-3xl text-center py-14'>
                    <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-3xl font-black' >Réserver</motion.h1>
                    <motion.p className='tracking-wider md:px-8 my-6 '>Petites et grandes tables, midi ou soir, à vous de choisir.</motion.p>
                    <button className='w-28 h-10 overflow-hidden mainbutton'>
                        <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                        <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                    </button>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full border border-gray-300 rounded-3xl text-center py-14'>
                    <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-3xl font-black' >Click & Collect</motion.h1>
                    <motion.p className='text-gray-600 md:px-8 my-6 tracking-wide'>Nos plats se marient aussi très bien avec une série Netflix.</motion.p>
                    <button className='w-28 h-10 overflow-hidden mainbutton'>
                        <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                        <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                    </button>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full border border-gray-300 rounded-3xl text-center py-14'>
                    <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-3xl font-black' >Livraison</motion.h1>
                    <motion.p  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-gray-600 md:px-8 my-6 tracking-wide'>On s’occupe de tout, tu t’occupes de rien.</motion.p>
                    <button className='w-28 h-10 overflow-hidden mainbutton'>
                        <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                        <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                    </button>
                </div>
                <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full border border-gray-300 rounded-3xl text-center py-14'>
                    <motion.h1  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-3xl font-black' >Privatisation</motion.h1>
                    <motion.p  initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className='text-gray-600 md:px-8 my-6 tracking-wide'>Vous nous voulez rien que pour vous ? C’est tout à fait possible.</motion.p>
                    <button className='w-28 h-10 overflow-hidden mainbutton'>
                        <div className='bg-red-700 w-full h-full py-2 text-white buttonpartone '>consulter</div>
                        <div className='bg-black w-full h-full py-2 text-white buttonparttwo '>consulter</div>
                    </button>
                </div>
            </div>
            
            <Footer />
        </>
    );
}