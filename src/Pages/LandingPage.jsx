import Content from "Components/LandingPage/Content";
import CreateButton from "Components/LandingPage/CreateButton";
import Image from "Components/LandingPage/Image";

const LandingPage = () => {
  return (
    <>
      {/* mobile and tab */}
      <div
        className="lg:hidden
      w-full min-h-full bg-secondary-1 flex flex-col gap-4 py-4 px-16"
      >
        <Content />
        <div className="flex flex-col w-2/3 gap-6 ml-auto mr-auto ">
          <Image />
          <CreateButton />
        </div>
      </div>

      {/* Desktop */}
      <div
        className="hidden lg:flex
      w-full min-h-full bg-secondary-1 gap-4 px-20 py-10 justify-between"
      >
        <Image />
        <div className="flex flex-col justify-center items-end gap-6">
          <div className="w-3/4">
            <Content />
          </div>
          <div className="w-2/3">
            <CreateButton fullWidth />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
