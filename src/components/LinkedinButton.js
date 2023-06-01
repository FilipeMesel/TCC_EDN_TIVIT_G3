import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function LinkedinButton(props) {
  const handleButtonClick = () => {
    let url = "https://br.linkedin.com/in/" + props.link
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleButtonClick}><LinkedInIcon color="primary" fontSize="large" data-testid="LinkedInIcon"/></button>
  );
}

export default LinkedinButton;
