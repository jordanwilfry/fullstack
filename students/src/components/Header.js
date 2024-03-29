import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      <Button
        color={"black"}
        text={"Export"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Students Follow Up",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
