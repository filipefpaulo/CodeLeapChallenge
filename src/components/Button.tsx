import cx from 'classnames';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, className, ...ButtonElements }: ButtonProps) {
  return (
    <button
      className={cx(
        'w-fit rounded-lg bg-defaultBlue px-8 py-[6px] font-bold uppercase text-zinc-50 disabled:cursor-not-allowed disabled:bg-zinc-400',
        className,
      )}
      {...ButtonElements}
    >
      {children}
    </button>
  );
}
