import { Link } from '@inertiajs/react';

export default function PrimaryButton({
  className = '',
  disabled,
  children,
  type,
  as,
  ...props
}) {
  let classButton =
    'bg-primary hover:bg-primary-dark focus:ring-primary-dark active:bg-primary-dark text-white';
  if (type === 'secondary') {
    classButton =
      'bg-secondary hover:bg-secondary-dark focus:ring-secondary-dark active:bg-secondary-dark text-white';
  } else if (type === 'danger') {
    classButton =
      'bg-red-500 hover:bg-red-600 focus:ring-red-700 active:bg-red-700 text-white';
  } else if (type === 'lightSecondary') {
    classButton =
      'bg-lightSecondary hover:opacity-80 focus:ring-lightSecondary-dark active:bg-lightSecondary-dark text-gray-600';
  } else if (type === 'lightPrimary') {
    classButton =
      'bg-lightPrimary hover:opacity-80  focus:ring-lightPrimary-dark active:bg-lightPrimary-dark text-gray-600';
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
