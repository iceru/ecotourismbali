import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput(
  {
    type = 'text',
    className = '',
    typeForm = 'input',
    isFocused = false,
    ...props
  },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return typeForm === 'input' ? (
    <input
      {...props}
      type={type}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={input}
    />
  ) : (
    <textarea
      rows={7}
      {...props}
      type={type}
      className={
        'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ' +
        className
      }
      ref={input}
    />
  );
});
