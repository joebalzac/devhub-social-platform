import type { Language } from '../types';

interface LanguagePickerProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

interface LanguagePickerProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languageOptions: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

const LanguagePicker = ({
  selectedLanguage,
  onLanguageChange,
}: LanguagePickerProps) => {
  return (
    <div className="language-picker">
      <select
        value={selectedLanguage}
        name="language"
        id=""
        onChange={(e) => onLanguageChange(e.target.value as Language)}
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.name}
          </option>
        ))}
      </select>
      <p>Language picker not implemented yet</p>
    </div>
  );
};

export default LanguagePicker;
