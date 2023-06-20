import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const Add = () => { 
    console.log("add Products")
   }

   const Flush = () => { 
    console.log("Flush products")
   }
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
          color={'green'}
          text={'Add'}
          onClick={Add}
        />
        <Button
          color={'red'}
          text={'flush'}
          onClick={Flush}
        />
    </header>
  );
};

Header.defaultProps = {
  title: "Happy Birthday",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
