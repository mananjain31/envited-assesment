import { AppContext } from "App";
import React from "react";
import Detail from "./Detail";

const EventDetailsCard = () => {
  const { event } = React.useContext(AppContext);
  return (
    <div className="p-4 md:p-0">
      <h2 className="text-primary-4 font-bold text-2xl md:text-5xl">
        {event.heading}
      </h2>
      <h3 className="text-txt-5 font-normal text-sm md:text-lg">
        Hosted by <span>{event.by}</span>
      </h3>
      <div className="pt-4 flex flex-col gap-2">
        <Detail
          type="date"
          heading={event?.details?.date?.from}
          subHeading={event?.details?.date?.to}
          redirect="https://www.google.com"
        />
        <Detail
          type="location"
          heading={"Street Name"}
          subHeading={event?.details?.streetName}
          redirect="htps://www.google.com"
        />
      </div>
    </div>
  );
};

export default EventDetailsCard;
