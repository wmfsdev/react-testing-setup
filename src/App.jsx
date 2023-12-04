import React from 'react';
import PropTypes from 'prop-types';


const App = (props) => {
  return <div>{props.name}</div>;
};

App.propTypes = {
  name: PropTypes.string,
};

App.defaultProps = {
  name: 'Zach',
};

export default App;

// export const CustomButton = ({ onClick }) => {
//   return (
//     <button onClick={onClick}>Click me</button> 
//   );
// };