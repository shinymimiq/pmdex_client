import "./WithSpinner.styles.css";
// this is a higher order component(HOC), takes a component and will return a component
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="SpinOverlay">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
