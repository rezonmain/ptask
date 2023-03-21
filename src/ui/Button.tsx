import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import Rif from "./Rif";
import Spinner from "./Spinner";

interface Base extends ComponentPropsWithoutRef<"button"> {
  isLoading?: boolean;
  children?: ReactNode;
}

type Props = Base;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ isLoading, children, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        type="button"
        className="text-white w-full bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 data-[variant='alt']:text-gray-500 data-[variant='alt']:bg-white data-[variant='alt']:hover:bg-gray-100 data-[variant='alt']:focus:ring-orange-300 data-[variant='alt']:border data-[variant='alt']:border-gray-200 data-[variant='alt']:hover:text-gray-900 data-[variant='alt']:focus:z-10 data-[variant='alt']:dark:bg-gray-700 data-[variant='alt']:dark:text-gray-300 data-[variant='alt']:dark:border-gray-500 data-[variant='alt']:dark:hover:text-white data-[variant='alt']:dark:hover:bg-gray-600 data-[variant='alt']:dark:focus:ring-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Rif _if={!isLoading} render={children} otherwise={<Spinner />} />
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
