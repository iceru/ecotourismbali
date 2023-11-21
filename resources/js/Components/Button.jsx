import { Link } from '@inertiajs/react';

export default function Button({
  className = '',
  disabled,
  children,
  color,
  as,
  ...props
}) {
  let classButton =
    'bg-primary hover:bg-opacity-80 active:bg-primary-dark text-white focus:ring-primary ';
  if (color === 'secondary') {
    classButton =
      'bg-secondary hover:bg-opacity-80 active:bg-secondary-dark text-white focus:ring-secondary ';
  } else if (color === 'danger') {
    classButton =
      'bg-red-500 hover:bg-red-600 focus:ring-red-700 active:bg-red-700 text-white ';
  } else if (color === 'lightSecondary') {
    classButton =
      'bg-lightSecondary hover:bg-opacity-80 focus:ring-lightSecondary active:bg-lightSecondary text-gray-600';
  } else if (color === 'lightPrimary') {
    classButton =
      'bg-lightPrimary hover:bg-opacity-80  focus:ring-lightPrimary active:bg-lightPrimary text-gray-600';
  } else if (color === 'gray') {
    classButton =
      'bg-gray-400 hover:gray-600 focus:ring-gray-400 active:bg-gray-400 text-white';
  } else if (color === 'altPrimary') {
    classButton =
      'bg-white hover:bg-primary text-primary hover:text-white focus:ring-white active:bg-white !border-primary';
  } else if (color === 'altSecondary') {
    classButton =
      'bg-white hover:bg-secondary text-secondary hover:text-white focus:ring-white active:bg-white !border-secondary';
  }
  return as === 'link' ? (
    <Link
      {...props}
      className={
        `inline-flex items-center px-4 py-2 border ${classButton} border-transparent rounded-md font-semibold text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ` + className
      }
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={
        `inline-flex items-center px-4 py-2 border ${classButton} border-transparent rounded-md font-semibold text-[14px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
          disabled && 'opacity-25'
        } ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
