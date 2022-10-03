const Hidden = ({ on = [], children }) => {
  const className = on.map((breakpoint) => `hidden-${breakpoint}`).join(" ");
  return (
    <>
      {on.map((breakpoint) => {
        return <div className={`hidden-${breakpoint}`}>{children}</div>;
      })}
    </>
  );
};

export default Hidden;
