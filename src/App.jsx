import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile page</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default App;



//import PropTypes from 'prop-types';

// const App = (props) => {
//   return <div>{props.name}</div>;
// };

// App.propTypes = {
//   name: PropTypes.string,
// };

// App.defaultProps = {
//   name: 'Zach',
// };

// export default App;

// export const CustomButton = ({ onClick }) => {
//   return (
//     <button onClick={onClick}>Click me</button> 
//   );
// };