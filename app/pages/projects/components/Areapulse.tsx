import { motion } from "framer-motion";

const Areapulse = () => {
  return (
    <section>
      <motion.h3
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="text-5xl mt-60"
      >
        Areapulse
      </motion.h3>
      <motion.p
        initial="hidden"
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="text-3xl mt-10"
      >
        This is product designed for the real esate agent in mind. <br />A
        product that produced market reports and agent home pages, that were
        used to send reports to potential customers
      </motion.p>
    </section>
  );
};

export default Areapulse;
