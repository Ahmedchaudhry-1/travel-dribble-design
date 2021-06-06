import { motion } from "framer-motion";

function TravelOptions({ emoji, title, active }) {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.15],
        transition: {
          duration: 0.4,
        },
      }}
      className={
        active
          ? "bg-orange h-28 w-16 rounded-full items-center justify-center shadow-lg text-white ml-2 cursor-pointer"
          : "bg-white h-28 w-16 rounded-full items-center justify-center shadow-lg hover:bg-orange cursor-pointer text-black hover:text-white ml-2"
      }
    >
      <p className="bg-lightGray rounded-full p-1 m-4 w-8 h-8">{emoji}</p>
      <p className="m-3">{title}</p>
    </motion.div>
  );
}

export default TravelOptions;
