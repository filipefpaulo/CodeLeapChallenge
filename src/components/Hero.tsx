import cx from 'classnames';

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  colorMode: 'light' | 'dark';
}

export function Hero({ children, colorMode, className, ...divProps }: HeroProps) {
  return (
    <div
      className={cx(
        'text-[22px] font-bold',
        colorMode === 'light' ? 'text-white' : 'text-black',
        className,
      )}
      {...divProps}
    >
      {children}
    </div>
  );
}
