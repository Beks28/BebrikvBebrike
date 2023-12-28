import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

export default function Translation({
  languages,
  setSelectedLanguage,
  selectedLanguage,
  i18n,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (e) => {
    const code = e.target.getAttribute("data-lang-code");
    const newLanguage = languages.find((el) => el.code === code);
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage.code);
    localStorage.setItem("ekg:selectedLanguage", JSON.stringify(newLanguage));
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {selectedLanguage.label}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {languages.map((el) => (
          <MenuItem
            key={el.code}
            onClick={handleLanguageChange}
            data-lang-code={el.code}
          >
            {el.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
