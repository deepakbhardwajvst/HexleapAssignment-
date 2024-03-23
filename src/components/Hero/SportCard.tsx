import Image from "next/image";
import { SportEvent } from "../../types/sport-event";

const SportCard: React.FC<{ item: SportEvent }> = ({ item }) => {
  return (
    <>
      <div className="bg-[#FFFFFF] dark:bg-[#3B3E47] lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-2">
        <Image
          width={1000}
          height={1000}
          alt="sports-person"
          src={item?.imgLink}
          className="object-cover h-96"
        />
        <div>
          <div className="font-bold text-lg inline-block dark:text-white py-3">
            {item?.title}
          </div>
          <div className="bg-[#F7F7F8] dark:bg-[#292B32] grid grid-flow-col p-3 justify-between">
            <div className="grid gap-1">
              <span className="text-[#525965] dark:text-[#DFDFDF]">
                Total Events
              </span>{" "}
              <span className="dark:text-white font-semibold">
                {item?.totalEvents} Events
              </span>
            </div>
            <div className="grid gap-1">
              <span className="text-[#525965] dark:text-[#DFDFDF]">Sport</span>{" "}
              <span className="dark:text-white font-semibold">
                {item?.sport}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportCard;
