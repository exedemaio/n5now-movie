import appSerieInstance from "../i18n";

const useSwitchLanguage = () => {
  return (languageId: any) => appSerieInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
