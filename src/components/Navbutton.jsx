import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function Navbutton(params) {
    const navigate = useNavigate();
    const textAnimationRef = useRef();
    const textAnimationRefone = useRef();
    const textAnimationReftwo = useRef();
    const textAnimationRefthree = useRef();
    const parone = useRef();
    const partwo = useRef();
    const parthree = useRef();
    const parfour = useRef();
    const parfive = useRef();
    const parsix = useRef();
    const parseven = useRef();
    const pareight = useRef();
    const imageone = useRef();
    const maindivimage = useRef();

    const wrapTextInSpans = (element) => {
        if (!element) return;
        let text = element.textContent;
        let splitted = text.split('');
        let wrappedText = "";
        splitted.forEach(char => {
            wrappedText += `<span class="relative inline-block">${char}</span>`;
        });
        element.innerHTML = wrappedText;

    };

    const mousehover = (textanimation, image1, b, paraoneSpans, paratwoSpans,) => {
        image1.style.backgroundImage = `url(${b})`;
        maindivimage.current.style.display = 'block';
        gsap.to('.door', {
            y: -350,
            duration: 1,
        });

        const tl = gsap.timeline();
        if (window.innerWidth > 768) {
            tl.to(paraoneSpans, {
                y: -80,
                stagger: 0.02,
            });
        } else if (window.innerWidth > 640) {
            tl.to(paraoneSpans, {
                y: -60,
                stagger: 0.02,
            });
        } else {
            tl.to(paraoneSpans, {
                y: -40,
                stagger: 0.02,
            });
        }

        if (window.innerWidth > 768) {
            tl.to(paratwoSpans, {
                y: -80,
                stagger: 0.02,
            }, 0);
        } else if (window.innerWidth > 640) {
            tl.to(paratwoSpans, {
                y: -60,
                stagger: 0.02,
            }, 0);
        } else {
            tl.to(paratwoSpans, {
                y: -40,
                stagger: 0.02,
            }, 0);
        }
    };

    const mouseleave = (maindivimage, paraoneSpans, paratwoSpans) => {
        maindivimage.current.style.display = 'none';
        gsap.to('.door', {
            y: 0,
        });
        const tl = gsap.timeline();
        tl.to(paraoneSpans, {
            y: 0,
            stagger: 0.02,
        });
        tl.to(paratwoSpans, {
            y: 20,
            stagger: 0.02,
        }, 0);
    };

    useEffect(() => {
        if (parone.current && partwo.current) {
            wrapTextInSpans(parone.current);
            wrapTextInSpans(partwo.current);

            let paraoneSpans = parone.current.querySelectorAll('span');
            let paratwoSpans = partwo.current.querySelectorAll('span');

            let textanimation = textAnimationRef.current;
            let image1 = imageone.current;
            
            if (textanimation) {
                textanimation.addEventListener('mouseenter', () => {
                   
                    mousehover(textanimation, image1, textanimation.getAttribute('data-name'), paraoneSpans, paratwoSpans,);
                });
                textanimation.addEventListener('click', () => {
                  navigate('/Montmartre')
                });

                textanimation.addEventListener('mouseleave', () => {
                    
                    mouseleave(maindivimage, paraoneSpans, paratwoSpans);
                });
            }
        }
    }, []);

    useEffect(() => {
        if (parthree.current && parfour.current) {
            wrapTextInSpans(parthree.current);
            wrapTextInSpans(parfour.current);

            let paraoneSpans = parthree.current.querySelectorAll('span');
            let paratwoSpans = parfour.current.querySelectorAll('span');

            let textanimation = textAnimationRefone.current;
            let image1 = imageone.current;

            let top = 120;
            let left = 100;
            
            if (textanimation) {
                textanimation.addEventListener('mouseenter', () => {
                   
                    mousehover(textanimation, image1, textanimation.getAttribute('data-name'), paraoneSpans, paratwoSpans, top, left);
                });
                textanimation.addEventListener('click', () => {
                    navigate('/Ternes')
                  });

                textanimation.addEventListener('mouseleave', () => {
                    
                    mouseleave(maindivimage, paraoneSpans, paratwoSpans);
                });
            }
        }
    }, []);
    useEffect(() => {
        if (parthree.current && parfour.current) {
            wrapTextInSpans(parfive.current);
            wrapTextInSpans(parsix.current);

            let paraoneSpans = parfive.current.querySelectorAll('span');
            let paratwoSpans = parsix.current.querySelectorAll('span');

            let textanimation = textAnimationReftwo.current;
            let image1 = imageone.current;

            let top = 120;
            let left = 100;
            
            if (textanimation) {
                textanimation.addEventListener('mouseenter', () => {
                   
                    mousehover(textanimation, image1, textanimation.getAttribute('data-name'), paraoneSpans, paratwoSpans, top, left);
                });
                textanimation.addEventListener('click', () => {
                    navigate('/Saint-Georges')
                  });

                textanimation.addEventListener('mouseleave', () => {
                    
                    mouseleave(maindivimage, paraoneSpans, paratwoSpans);
                });
            }
        }
    }, []);
    useEffect(() => {
        if (parseven.current && pareight.current) {
            wrapTextInSpans(parseven.current);
            wrapTextInSpans(pareight.current);

            let paraoneSpans = parseven.current.querySelectorAll('span');
            let paratwoSpans = pareight.current.querySelectorAll('span');

            let textanimation = textAnimationRefthree.current;
            let image1 = imageone.current;

            let top = 120;
            let left = 100;
            
            if (textanimation) {
                textanimation.addEventListener('mouseenter', () => {
                   
                    mousehover(textanimation, image1, textanimation.getAttribute('data-name'), paraoneSpans, paratwoSpans, top, left);
                });

                textanimation.addEventListener('mouseleave', () => {
                    
                    mouseleave(maindivimage, paraoneSpans, paratwoSpans);
                });
            }
        }
    }, []);
    useEffect(() => {
            gsap.from('.leftnavon', {
                y: 800,
                duration: 1,
            });
            gsap.from('.rightnavon', {
                y: -800,
                duration: 1,
            });
    }, []);


    return (
        <>
        {/* meun inner text  */}
            <div className={`leftnavon  w-full sm:w-1/2 sm:inline-block bg-customBlack  text-center  h-screen  z-50 fixed`} >
                <div className=" text-center z-20">
                    <p className="mt-20  sm:mt-10 md:mt-20 text-red-700">RESTAURANTS</p>
                    <div className=" cursor-pointer w-30 h-12 sm:h-12 md:h-20 mt-4 sm:mt-6 overflow-hidden z-20 " data-name="https://fabbricagroup.fr/wp-content/uploads/2022/07/Menu_Montmartre@2x.webp" ref={textAnimationRef} >
                        <div className="text-white text-4xl sm:text-4xl md:text-5xl sm:py-2 md:py-4 paraone z-20" ref={parone}>Montmarter</div>
                        <div className="text-red-700 text-3xl sm:text-4xl md:text-5xl z-20 paratwo" ref={partwo}>Montmarter</div>
                    </div>
                    <div className="cursor-pointer w-30 h-12 sm:h-12 md:h-20 mt-4 sm:mt-6 overflow-hidden  " data-name="https://fabbricagroup.fr/wp-content/uploads/2022/06/Menu_Roll_Ternes@2x.webp" ref={textAnimationRefone}  >
                        <p className=" text-white text-4xl sm:text-4xl md:text-5xl sm:py-2 md:py-4" ref={parthree}>Ternes</p>
                        <p className=" text-red-700 text-3xl sm:text-4xl md:text-5xl " ref={parfour}>Ternes</p>
                    </div>
                    <div className="mt-4 sm:mt-6 cursor-pointer w-30 h-12 sm:h-12 md:h-20 overflow-hidden  " data-name="https://fabbricagroup.fr/wp-content/uploads/2022/07/Menu_plats@2x.webp" ref={textAnimationReftwo}>
                        <p className=" text-white text-4xl sm:text-4xl md:text-5xl sm:py-2 md:py-4" ref={parfive}>Saint-Georges</p>
                        <p className=" text-red-700 text-3xl sm:text-4xl md:text-5xl " ref={parsix}>Saint-Georges</p>
                    </div>

                    <p className="mt-4 sm:mt-6 text-red-700">EN LIVRAISON UNIQUEMENT</p>
                    <div className="mt-4 sm:mt-6 cursor-pointer w-30 h-12 sm:h-12 md:h-20 overflow-hidden  " data-name="https://fabbricagroup.fr/wp-content/uploads/2022/06/haut-de-seine@2x-1.webp" ref={textAnimationRefthree}>
                        <p className="  text-white text-4xl sm:text-4xl md:text-5xl sm:py-2 md:py-4" ref={parseven}>Courbevoie</p>
                        <p className=" pb-32 text-red-700 text-3xl sm:text-4xl md:text-5xl" ref={pareight}>Courbevoie</p>
                    </div>
                </div>
            </div>
            {/* meun right side inn some image  */}
            <div className={`rightnavon w-0 sm:w-1/2 sm:inline-block bg-black  h-screen  right-0 z-50 fixed`} >
                <div className=" w-44 sm:w-46 md:w-80 h-44 sm:h-80 md:h-92 z-52  mx-auto relative top-40   overflow-hidden hidden " ref={maindivimage}>
                    <div className="w-full h-full z-52 absolute bg-center bg-cover " ref={imageone}></div>
                    <div className="w-full h-full  absolute bg-black door "></div>
                </div>
            </div>

        </>
    )
}