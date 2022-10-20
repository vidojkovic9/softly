import React, { useState, useEffect, useContext } from 'react';
import './Dropdown.style.scss';
import CustomLink from '../CustomLink/CustomLink.component';
import '../Navbar/Navbar.style.scss';
import LoginContext from '../../providers/General/Login.context';

const Dropdown = ({
  options,
  children,
}: {
  options: { to: string; value: string }[];
  children: JSX.Element;
}) => {
  const [isActive, setIsActive] = useState(false);

  const { logout } = useContext(LoginContext);

  useEffect(() => {
    if (!isActive) return;

    const onClick = () => {
      setIsActive(false);
    };

    document.body.addEventListener('click', onClick);

    return () => {
      document.body.removeEventListener('click', onClick);
    };
  }, [isActive]);

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} className="dropdown__item">
        <CustomLink to={option.to}>{option.value}</CustomLink>
      </div>
    );
  });

  return (
    <div className="dropdown">
      <div
        className="dropdown__btn"
        onClick={(event) => {
          event.stopPropagation();
          setIsActive(!isActive);
        }}
      >
        {children}
      </div>
      {isActive && (
        <div className="dropdown__content">
          <div> {renderedOptions} </div>
          <div
            className="dropdown__item"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
