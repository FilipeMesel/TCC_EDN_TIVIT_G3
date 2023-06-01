import React from "react";
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

function CurriculumButton() {
  const handleButtonClick = () => {
    let url = "https://br.linkedin.com/in/"
    window.open(url, "_blank");
  };

  return (
    <button onClick={handleButtonClick} className="App-button-download"><SimCardDownloadIcon color="error" fontSize="large" data-testid="SimCardDownloadIcon"/></button>
  );
}

export default CurriculumButton;
