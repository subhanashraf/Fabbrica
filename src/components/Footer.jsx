import { motion } from "framer-motion";
export default function Footer() {
    return (
        <>
            
            <div className="w-full h-1/2 bg-black  pt-20 text-white md:flex flex-wrap text-center  md:px-20 lg:px-40">
                <div className="w-full md:w-1/4 h-1/6  mx-auto md:mx-0">
                    <img    className=" mx-auto md:mb-8 " src="https://raw.githubusercontent.com/subhanashraf/Fabbrica-website/main/public/image/Screenshot%202024-04-22%20123101.png" alt="logo" />
                </div>
                <div className="w-full md:w-1/4 h-1/6  mx-auto md:mx-0">
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className=" decoration-4 font-bold mb-4 ">RESTAURANTS</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className=" decoration-4 font-bold mb-4 inline-block md:block ">Montmartre</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className=" decoration-4 font-bold mb-4 inline-block md:block px-4 ">Ternes</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className=" decoration-4 font-bold mb-4 inline-block md:block ">Saint-Georges</motion.h4>
                </div>
                <div className="w-full md:w-1/4 h-1/6  mx-auto md:mx-0 my-10 md:my-0">
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className=" decoration-4 font-bold mb-4 ">EN LIVRAISON UNIQUEMENT</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className=" decoration-4 font-bold mb-4 ">Courbevoie</motion.h4>
                </div>
                <div className="w-full md:w-1/4 h-1/6  mx-auto md:mx-0">
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className="  font-bold mb-4 ">LA STORIA</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }}  className="  font-bold mb-4 ">Cosa si mangia</motion.h4>
                    <motion.h4   initial={{ opacity: 0, y: 40 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0., delay:0.15 } }}  className="  font-bold  font-abc">Noi</motion.h4>
                </div>
            <div   className=" container mx-auto mt-8 pb-8 border-t border-gray-700 pt-4 flex  justify-between text-xs px-10 sm:px-0 ">
                <p className="text-black text-lg text-center mb-2 md:mb-0 opacity-0 md:block "> Mentions légales - Liste des allergènes</p>
                <motion.p   initial={{ opacity: 0, y: 2 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className="text-white text-lg text-center mb-2 md:mb-0 "> Mentions légales - Liste des allergènes</motion.p>
                <motion.p   initial={{ opacity: 0, y: 2 }}  whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay:0.1 } }} className="text-white text-lg  ">Crédits</motion.p>
            </div>
            </div>
        </>
    );
}