import React from 'react';

const Header = (props) => {
  return(
      <div>
        <i className="fa fa-free-code-camp"></i><span> </span>{props.text}
      </div>
  );
}

export default Header;
