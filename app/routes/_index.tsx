import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import { motion } from "framer-motion";

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
      <section className="flex justify-center min-h-[calc(100vh_-_64px)]">
        <motion.h1
          className="text-5xl mt-[200px]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Tristans Premium Shirts
        </motion.h1>
      </section>
    </div>
  );
}
