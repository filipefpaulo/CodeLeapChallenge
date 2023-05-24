import cx from 'classnames';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelName?: string;
  classNameLabel?: string;
}

export function Input({
  className,
  labelName,
  classNameLabel,
  ...inputElements
}: InputProps) {
  return (
    <label htmlFor={labelName} className={cx('block w-full', classNameLabel)}>
      {labelName}
      <input
        id={labelName}
        className={cx(
          'mt-2 mb-4 border-[1px] border-zinc-500 px-4 py-2 rounded-lg w-full',
          className,
        )}
        {...inputElements}
      />
    </label>
  );
}
