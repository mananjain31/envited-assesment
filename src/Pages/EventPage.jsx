import EventDetailsCard from "Components/Event/EventDetailsCard";
import Image from "Components/Event/Image";

const Event = () => {
  return (
    <div className="min-h-full bg-[#FBFAFF] gap-4 grid place-items-center">
      <div
        className="
          w-full md:w-1/2 min-h-full md:min-h-0
          flex flex-col md:gap-6
          lg:flex-row-reverse 
        "
      >
        <div className="lg:flex-1">
          <Image />
        </div>
        <div className="lg:flex-1">
          <EventDetailsCard />
        </div>
      </div>
    </div>
  );
};

export default Event;
