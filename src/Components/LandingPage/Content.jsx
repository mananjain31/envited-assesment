import "./Content.css";

const Content = () => {
  return (
    <div className="text-center lg:text-right">
      <h1 className="flex flex-col text-4xl md:text-6xl font-bold gap-0">
        <span className="text-primary-4">Imagine if</span>
        <span className="content-heading-gradient">Snapchat</span>
        <span className="text-primary-4">had events.</span>
      </h1>
      <p className="text-sm md:text-lg line-clip text-txt-6 font-light pt-2">
        Easily host and share events with your friends across any social media.
      </p>
    </div>
  );
};

export default Content;
