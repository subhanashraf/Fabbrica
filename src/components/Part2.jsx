import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Part2() {
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
    const imagetwo = useRef();
    const imagethree = useRef();
    const maindivimage = useRef();
    const maindivimageone = useRef();
    const maindivimagetwo = useRef();

    const wrapTextInSpans = (element) => {
        let text = element.textContent;
        let splitted = text.split('');
        let wrappedText = "";
        splitted.forEach(char => {
            wrappedText += `<span class="relative inline-block">${char}</span>`;
        });
        element.innerHTML = wrappedText;
    };

    function mousehover(textanimation, image1, image2, image3, a, b, c, paraoneSpans, paratwoSpans, top, left) {
        image1.style.backgroundImage = `url(${a})`;
        image2.style.backgroundImage = `url(${c})`;
        image3.style.backgroundImage = `url(${b})`;
        // image1.style.display='block'
        maindivimage.current.style.display = 'block'
        //image div large one
        maindivimage.current.style.top = `${top + Math.random() * 10}%`;
        maindivimage.current.style.left = `${4.25 + Math.random() * 10}%`;
        //imgae div medium two
        maindivimageone.current.style.top = `${top + Math.random() * 10}%`;
        maindivimageone.current.style.left = `${48.25 + Math.random() * 20}%`;
        //imgae div medium three
        maindivimagetwo.current.style.top = `${top + Math.random() * 10}%`;
        let leftValue = (Math.random() * 2);
        if (leftValue < 1) {
            maindivimagetwo.current.style.left = `${5 + Math.random() * 5}%`;
        }
        else if (leftValue > 1) {
            maindivimagetwo.current.style.right = `${5 + Math.random() * 5}%`;
        }

        maindivimageone.current.style.display = 'block'
        maindivimagetwo.current.style.display = 'block'
        gsap.to('.door', {
            y: -350,
            duration: 1,
        })
        const tl = gsap.timeline();
        if (window.innerWidth > 768) {
            tl.to(paraoneSpans, {
                y: -80,
                stagger: 0.02,
            });
        }
        else if (window.innerWidth > 640) {
            tl.to(paraoneSpans, {
                y: -60,
                stagger: 0.02,
            });
        }
        else {
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
        }
        else if (window.innerWidth > 640) {
            tl.to(paratwoSpans, {
                y: -60,
                stagger: 0.02,
            }, 0);
        }
        else {
            tl.to(paratwoSpans, {
                y: -40,
                stagger: 0.02,
            }, 0);
        }


    }
    function mouseleave(maindivimage, maindivimageone, maindivimagetwo, paraoneSpans, paratwoSpans) {
        maindivimage.current.style.display = 'none'
        maindivimageone.current.style.display = 'none'
        maindivimagetwo.current.style.display = 'none'
        gsap.to('.door', {
            y: 0,
        })
        const tl = gsap.timeline();
        tl.to(paraoneSpans, {
            y: 0,
            stagger: 0.02,
        });
        tl.to(paratwoSpans, {
            y: 20,
            stagger: 0.02,
        }, 0);
    }
    useEffect(() => {
        // Wrap text in spans for both paraone and partwo
        wrapTextInSpans(parone.current);
        wrapTextInSpans(partwo.current);
        let paraoneSpans = parone.current.querySelectorAll('span');
        let paratwoSpans = partwo.current.querySelectorAll('span');
        let name = textAnimationRef.current;
        let a = name.getAttribute('data-nameone');
        let b = name.getAttribute('data-nametwo');
        let c = name.getAttribute('data-namethree');
        // Check if spans are correctly created
        let textanimation = textAnimationRef.current;
        let image1 = imageone.current;
        let image2 = imagetwo.current;
        let image3 = imagethree.current;

        // console.log(image1.style);
        let top = 120;
        let left = 100;
        // Add event listeners for animation
        textanimation.addEventListener('mouseenter', () => {
            mousehover(textanimation, image1, image2, image3, a, b, c, paraoneSpans, paratwoSpans, top, left)
        })
        textanimation.addEventListener('click', () => {
            navigate('./Montmartre')
        });

        textanimation.addEventListener('mouseleave', () => {
            mouseleave(maindivimage, maindivimageone, maindivimagetwo, paraoneSpans, paratwoSpans)
        });

    }, [textAnimationRef]);

    useEffect(() => {

        // Wrap text in spans for both paraone and partwo
        wrapTextInSpans(parthree.current);
        wrapTextInSpans(parfour.current);
        let paraoneSpans = parthree.current.querySelectorAll('span');
        let paratwoSpans = parfour.current.querySelectorAll('span');
        // Check if spans are correctly created
        let textanimation = textAnimationRefone.current;
        let name = textAnimationRefone.current;
        let a = name.getAttribute('data-nameone');
        let b = name.getAttribute('data-nametwo');
        let c = name.getAttribute('data-namethree');
        // Check if spans are correctly created
        let image1 = imageone.current;
        let image2 = imagetwo.current;
        let image3 = imagethree.current;
        let top = 140;
        let left = 100;

        // Add event listeners for animation

        textanimation.addEventListener('mouseenter', () => {
            mousehover(textanimation, image1, image2, image3,a, b,c, paraoneSpans, paratwoSpans, top, left)

        });
        textanimation.addEventListener('click', () => {
            navigate('./Ternes')
        });

        textanimation.addEventListener('mouseleave', () => {
            mouseleave(maindivimage, maindivimageone, maindivimagetwo, paraoneSpans, paratwoSpans)

        });

    }, [textAnimationRefone]);
    useEffect(() => {

        // Wrap text in spans for both paraone and partwo
        wrapTextInSpans(parfive.current);
        wrapTextInSpans(parsix.current);
        let paraoneSpans = parfive.current.querySelectorAll('span');
        let paratwoSpans = parsix.current.querySelectorAll('span');
        // Check if spans are correctly created
        let textanimation = textAnimationReftwo.current;
        // Check if spans are correctly created
        let name = textAnimationReftwo.current;
        let a = name.getAttribute('data-nameone');
        let b = name.getAttribute('data-nametwo');
        let c = name.getAttribute('data-namethree');
        // Check if spans are correctly created
        let image1 = imageone.current;
        let image2 = imagetwo.current;
        let image3 = imagethree.current;
        let top = 160;
        let left = 100;
        // Add event listeners for animation
        textanimation.addEventListener('mouseenter', () => {
            mousehover(textanimation, image1, image2, image3,a, b,c, paraoneSpans, paratwoSpans, top, left)
        });
        textanimation.addEventListener('click', () => {
            navigate('./Saint-Georges')
        });

        textanimation.addEventListener('mouseleave', () => {
            mouseleave(maindivimage, maindivimageone, maindivimagetwo, paraoneSpans, paratwoSpans)

        });

    }, [textAnimationReftwo]);
    useEffect(() => {


        // Wrap text in spans for both paraone and partwo
        wrapTextInSpans(parseven.current);
        wrapTextInSpans(pareight.current);
        let paraoneSpans = parseven.current.querySelectorAll('span');
        let paratwoSpans = pareight.current.querySelectorAll('span');
        // Check if spans are correctly created
        let textanimation = textAnimationRefthree.current;
        // Check if spans are correctly created
        // Check if spans are correctly created
        let name = textAnimationRefthree.current;
        let a = name.getAttribute('data-nameone');
        let b = name.getAttribute('data-nametwo');
        let c = name.getAttribute('data-namethree');
        // Check if spans are correctly created
        let image1 = imageone.current;
        let image2 = imagetwo.current;
        let image3 = imagethree.current;
        let top = 180;
        let left = 100;
        // Add event listeners for animation
        textanimation.addEventListener('mouseenter', () => {
            mousehover(textanimation, image1, image2, image3,a, b,c, paraoneSpans, paratwoSpans, top, left)

        });

        textanimation.addEventListener('mouseleave', () => {
            mouseleave(maindivimage, maindivimageone, maindivimagetwo, paraoneSpans, paratwoSpans)

        });

    }, [textAnimationRefthree]);

    return (
        <>
        {/* section 2 first if hover test then three image show  and in image code */}
            <div className="absolute w-44 sm:w-46 md:w-80 h-44 sm:h-60 md:h-72 z-52    overflow-hidden hidden " ref={maindivimage}>
                <div className="w-60 h-72 z-52 absolute bg-center bg-cover " ref={imageone}></div>
                <div className="w-60 h-80  absolute bg-black door "></div>
            </div>
            <div className="absolute  w-36 sm:w-36 md:w-56 h-36 sm:h-36 md:h-64 z-54  overflow-hidden hidden " ref={maindivimageone}>
                <div className="w-56 h-64   z-54 absolute bg-center bg-cover " ref={imagetwo}></div>
                <div className=" w-56 h-64   absolute bg-black door "></div>
            </div>
            <div className="absolute   w-28 h-40 z-56   overflow-hidden hidden " ref={maindivimagetwo}>
                <div className=" w-40 h-52 z-56 absolute bg-center bg-cover " ref={imagethree}></div>
                <div className=" w-40 h-52  absolute bg-black door "></div>
            </div>
            {/* image code complet and text section show  */}
            <div className="w-full h-[120vh] sm:h-[180vh] bg-gray-950  ">
                <div className="pt-4 sm:pt-10 text-center z-20">
                    <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.2 } }} className="mt-20  sm:mt-40 md:mt-60 text-red-700">RESTAURANTS</motion.p>
                    <div className=" cursor-pointer w-30 h-12 sm:h-12 md:h-20 mt-6 sm:mt-12 overflow-hidden z-20 " data-nameone="https://fabbricagroup.fr/wp-content/uploads/2022/06/Montmartre_Cover@2x-768x864.webp" data-nametwo="https://fabbricagroup.fr/wp-content/uploads/2022/06/ternes-5@2x-2048x1450.webp" data-namethree="https://fabbricagroup.fr/wp-content/uploads/2022/06/ternes-2@2x-1798x2048.webp" ref={textAnimationRef} >
                        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5,  delay:0.1,} }} className="text-white text-4xl sm:text-4xl md:text-6xl sm:py-2 md:py-4 paraone z-20" ref={parone}>Montmarter</motion.div>
                        <div className="text-red-700 text-3xl sm:text-4xl md:text-6xl z-20 paratwo" ref={partwo}>Montmarter</div>
                    </div>
                    <div className="cursor-pointer w-30 h-12 sm:h-12 md:h-20 mt-6 sm:mt-12 overflow-hidden  " data-nameone="https://fabbricagroup.fr/wp-content/uploads/2022/06/image-166@2x.webp" data-nametwo="https://fabbricagroup.fr/wp-content/uploads/2022/07/Ternes_02@2x.webp" data-namethree="https://fabbricagroup.fr/wp-content/uploads/2022/07/Ternes_03@2x.webp" ref={textAnimationRefone}  >
                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 ,  delay:0.1 } }} className=" text-white text-4xl sm:text-4xl md:text-6xl sm:py-2 md:py-4" ref={parthree}>Ternes</motion.p>
                        <p className=" text-red-700 text-3xl sm:text-4xl md:text-6xl " ref={parfour}>Ternes</p>
                    </div>
                    <div className="mt-6 sm:mt-12 cursor-pointer w-30 h-12 sm:h-12 md:h-20 overflow-hidden  " data-nameone="https://fabbricagroup.fr/wp-content/uploads/2022/07/Saint-Georges_01@2x.webp" data-nametwo="https://fabbricagroup.fr/wp-content/uploads/2022/07/Saint-Georges_02@2x.webp" data-namethree="https://fabbricagroup.fr/wp-content/uploads/2022/07/Saint-Georges_03@2x.webp" ref={textAnimationReftwo}>
                        <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5,  delay:0.1 } }} className=" text-white text-4xl sm:text-4xl md:text-6xl sm:py-2 md:py-4" ref={parfive}>Saint-Georges</motion.p>
                        <p className=" text-red-700 text-3xl sm:text-4xl md:text-6xl " ref={parsix}>Saint-Georges</p>
                    </div>

                    <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5,  delay:0.1 } }} className="mt-6 sm:mt-12 text-red-700">EN LIVRAISON UNIQUEMENT</motion.p>
                    <div className="mt-6 sm:mt-12 cursor-pointer w-30 h-12 sm:h-12 md:h-20 overflow-hidden  " data-nameone="https://fabbricagroup.fr/wp-content/uploads/2022/07/Plats_02@2x.webp" data-nametwo="https://fabbricagroup.fr/wp-content/uploads/2022/06/Horaires@2x.webp" data-namethree="https://fabbricagroup.fr/wp-content/uploads/2022/06/ternes-6@2x.webp" ref={textAnimationRefthree}>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className="  text-white text-4xl sm:text-4xl md:text-6xl sm:py-2 md:py-4" ref={parseven}>Courbevoie</motion.p>
                        <p className=" pb-32 text-red-700 text-3xl sm:text-4xl md:text-6xl" ref={pareight}>Courbevoie</p>
                    </div>
                </div>
            </div>
        </>
    );
}
