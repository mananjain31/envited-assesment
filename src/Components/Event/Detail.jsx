import { useMemo } from "react";
import { FaAngleRight, FaCalendar, FaLocationArrow } from "react-icons/fa";
const Detail = ({ type, heading, subHeading, redirect }) => {
  let icon = useMemo(() => {
    switch (type) {
      case "date":
        return <FaCalendar className="w-6 h-6" />;
      case "location":
        return <FaLocationArrow className="w-6 h-6" />;
      default:
        return <FaCalendar className="w-6 h-6" />;
    }
  }, [type]);

  const body = useMemo(() => {
    switch (type) {
      case "date":
        return (
          <>
            to <b>{subHeading}</b> UTC +10
          </>
        );
      case "location":
        return <>{subHeading}</>;
      default:
        return <>{subHeading}</>;
    }
  }, [type, subHeading]);

  return (
    <div className="flex gap-4 items-center">
      <div className="p-2 w-10 h-10 bg-white rounded-md shadow-sm grid place-items-center">
        {icon}
      </div>
      <section>
        <header className="text-primary-4 font-bold">{heading}</header>
        <main className="text-txt-6 font-normal">{body}</main>
      </section>
      <a href={redirect} className="ml-auto">
        <FaAngleRight className="w-5 h-5 text-txt-4" />
      </a>
    </div>
  );
};

export default Detail;
