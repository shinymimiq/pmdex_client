const Footer = () => {
  return (
    <div className="Footer bg-coolDarkGray w-full h-20 flex-shrink justify-items-end">
      Footer
    </div>
  );
};

const WithFooter = (WrappedComponent) => {
  const com = ({ ...otherProps }) => (
    <div className="app-content w-full h-full overflow-y-auto flex-col">
      <WrappedComponent {...otherProps} />
      <Footer />
    </div>
  );
  return com;
};

export default WithFooter;
