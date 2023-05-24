import cx from 'classnames';
import React from 'react';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export function Box({ children, className }: BoxProps) {
  return (
    <div
      className={cx('p-6 rounded-2xl border-[1px] border-zinc-400 bg-white', className)}
    >
      {children}
    </div>
  );
}
