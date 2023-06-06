import { forwardRef, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default forwardRef(function SelectInput(
  {
    options,
    placeholder,
    className = '',
    isFocused = false,
    value,
    labelData = 'label',
    valueData = 'value',
    ...props
  },
  ref
) {
  const input = ref ? ref : useRef();

  const { t } = useTranslation();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);
  return (
    <select
      {...props}
      ref={input}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      value={value}
    >
      {placeholder && <option>{t(placeholder)}</option>}
      {options?.map(option => (
        <option value={option[valueData]}>{option[labelData]}</option>
      ))}
    </select>
  );
});
