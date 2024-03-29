import { Link, json, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }) => {
  const user = await getUser(request);
  return json({
    quotes: await db.quote.findMany(),
    user,
  });
};

export default function Index() {
  const { quotes, user } = useLoaderData();

  return (
    <div>
      hi
      {user?.id}
      <nav className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-500 w-full fixed top-0 left-0 px-5">
        <div className="w-full max-w-screen-lg mx-auto flex justify-between content-center py-3 ">
          <Link className="text-white text-3xl font-bold" to={"/"}>
            Quote Wall
          </Link>
          <div className="flex flex-row items-center justify-between gap-x-4 text-blue-50"></div>
        </div>
      </nav>
      <div className="grid lg:grid-flow-row grid-cols-1 lg:grid-cols-3">
        {quotes.map((q, i) => {
          const { id, quote, by } = q;
          return (
            <figure
              key={id}
              className="m-4 py-10 px-4 shadow-md shadow-sky-100"
            >
              <blockquote className="py-3">
                <p className="text-gray-800  text-xl">{quote}</p>
              </blockquote>
              <figcaption>
                <cite className="text-gray-600 text-md mb-4 text-right">
                  - {by}
                </cite>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
}
