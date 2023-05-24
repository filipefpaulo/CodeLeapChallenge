import cx from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...ButtonElements }: ButtonProps) {
  return (
    <button
      className={cx(
        'px-8 py-[6px] w-fit bg-defaultBlue rounded-lg uppercase font-bold text-zinc-50 disabled:bg-zinc-400 disabled:cursor-not-allowed',
        className,
      )}
      {...ButtonElements}
    >
      {children}
    </button>
  );
}
