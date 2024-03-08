import type { MetaFunction } from "@remix-run/node";
import Navbar from "~/components/Navbar";
import { motion } from "framer-motion";
import Areapulse from "~/pages/projects/components/Areapulse";
import { json, useLoaderData } from "@remix-run/react";
import { getUser } from "~/utils/session.server";
import { db } from "~/utils/db.server";
import { Input } from "@nextui-org/react";
import { ScrollEffect } from "~/pages/projects/components/ScrollEffect";

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
      <section className="flex flex-col items-center min-h-[calc(100vh_-_64px)]">
        <Input label="Character name" />
        <Areapulse />
        <ScrollEffect />
      </section>
    </div>
  );
}
