"use client";
import { useState } from "react";
import { SportEvent } from "../../types/sport-event";
import SportCard from "./SportCard";
import SportsAds from "./SportsAds";

const SportContainer: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const cartData: SportEvent[] = [
    {
      imgLink: "/Sports/sports-1.jpeg",
      title: "Sacramento River Cats",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 48,
    },
    {
      imgLink: "/Sports/sports-2.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 28,
    },
    {
      imgLink: "/Sports/sports-3.jpeg",
      title: "New Jersey Devils",
      event: "Total Events",
      sport: "Ice Hockey",
      totalEvents: 15,
    },
    {
      imgLink: "/Sports/sports-4.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 28,
    },
    {
      imgLink: "/Sports/sports-5.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 22,
    },
    {
      imgLink: "/Sports/sports-6.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 15,
    },
    {
      imgLink: "/Sports/sports-7.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 34,
    },
    {
      imgLink: "/Sports/sports-8.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 16,
    },
    {
      imgLink: "/Sports/sports-9.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 28,
    },
  ];
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <main className="grid md:grid-cols-2 lg:flex gap-2 pb-5">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
          {cartData
            ?.slice(0, showAll ? cartData.length : 4)
            .map((item, idx) => (
              <SportCard key={idx} item={item} />
            ))}
        </div>
        <SportsAds />
      </main>

      <div className="w-full flex justify-center pt-2 pb-5">
        <div
          className="px-4 py-2 relative rounded group text-white font-medium inline-block"
          onClick={toggleShowAll}
        >
          <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-[#2C9CF0]"></span>
          <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 filter group-active:opacity-0 rounded opacity-50 bg-[#2C9CF0]"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-blue-400 to-blue-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-[#2C9CF0]"></span>
          <span className="relative">
            {" "}
            {showAll ? "Show Less" : "Show More"}
          </span>
        </div>
      </div>
    </>
  );
};

export default SportContainer;
