import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import { motion } from "framer-motion";
import Areapulse from "~/pages/projects/components/Areapulse";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center min-h-[calc(100vh_-_64px)] px-10">
        <motion.h1
          className="text-5xl mt-[200px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome. <br /> <br />
        </motion.h1>
        <motion.h2
          className="text-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Have a look around at some projects i've been apart of
        </motion.h2>
        <Areapulse />
      </section>
    </div>
  );
}
