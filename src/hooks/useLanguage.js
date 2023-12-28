import { useState } from "react";

const useLanguage = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(
    JSON.parse(localStorage.getItem("ekg:selectedLanguage")) || languages[0]
  );
  return [languages, selectedLanguage, setSelectedLanguage];
};

export default useLanguage;
