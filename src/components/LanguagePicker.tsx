import type { Language } from '../types';

interface LanguagePickerProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

/**
 * PART 2A: Implement LanguagePicker component
 *
 * Requirements:
 * 1. Display English (default) and Spanish options
 * 2. Allow users to switch between languages
 * 3. Show language flags and names
 * 4. Handle language selection
 */

const LanguagePicker = ({
  selectedLanguage,
  onLanguageChange,
}: LanguagePickerProps) => {
  // TODO: Define language options with flags and names
  // TODO: Create language selection UI
  // TODO: Handle language change events

  return (
    <div className="language-picker">
      {/* TODO: Implement language picker UI */}
      <p>Language picker not implemented yet</p>
    </div>
  );
};

export default LanguagePicker;
