import React from 'react';

const VARIANT_STYLES = {
  primary: 'bg-indigo-500 text-white',
  secondary: 'bg-gray-500 text-white',
};

export const Button = ({ variant = 'primary', children, ...props }) => {
  const variantClasses = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

  return (
    <button
      type="submit"
      className={`${variantClasses} text-sm leading-6 font-medium py-2 px-5 rounded-full transition ease-in-out duration-150`}
      {...props}
    >
      {children}
    </button>
  );
};
