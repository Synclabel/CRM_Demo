import React, { useEffect} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ToDashBoardKeyUpWrapper = (props) => {
  const navigate = useNavigate()

  useEffect(() => {
    function handleKeyDown(e) {
      if(e.keyCode === 192)
        navigate("/dashboard");
    }

    document.addEventListener('keydown', handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
  return (
    <div>
      {props.children}
    </div>
  )
}
export default ToDashBoardKeyUpWrapper;

ToDashBoardKeyUpWrapper.propTypes = {
  children: PropTypes.node,
};

