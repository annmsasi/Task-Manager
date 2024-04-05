import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, user,onAdd,showAdd }) => {
  return (
    <header className = 'header'>
      <h1 >
        Welcome to {user}'s {title}
      </h1>
      <Button 
        text = {showAdd? 'Close': 'Add'}
        onClick={onAdd}/>
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
  user: 'Ann',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
}

export default Header;
