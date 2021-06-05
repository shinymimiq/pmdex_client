const Footer = () => {
  return <div className="Footer bg-coolDarkGray w-full h-20">Footer</div>;
};

const WithFooter = (WrappedComponent) => {
  const com = ({ ...otherProps }) => (
    <div className="app-content w-full h-full">
      <WrappedComponent {...otherProps} />
      <Footer />
    </div>
  );
  return com;
};

export default WithFooter;
