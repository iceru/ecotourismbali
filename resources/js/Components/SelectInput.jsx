import { forwardRef, useEffect, useRef, useState } from 'react';
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
    children,
    selectedLabel,
    ...props
  },
  ref
) {
  const input = ref ? ref : useRef();
  const [labelSelected, setLabelSelected] = useState();

  const { t } = useTranslation();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }

    if (selectedLabel && options) {
      const selected = options.find(item => {
        return item.name === selectedLabel;
      });
      selected && setLabelSelected(selected[valueData]);
    }
  }, [options]);

  return (
    <select
      {...props}
      ref={input}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      value={value || labelSelected}
    >
      {children}
      {placeholder && <option>{t(placeholder)}</option>}
      {options?.map(option => (
        <option value={option[valueData]}>{option[labelData]}</option>
      ))}
    </select>
  );
});
