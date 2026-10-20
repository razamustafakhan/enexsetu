import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

const inputBaseStyles =
  "block w-full rounded-[var(--radius-md)] border bg-white text-[var(--color-text)] shadow-sm outline-none transition-all duration-200 placeholder:text-[var(--color-text-muted)] focus:ring-2 focus:ring-offset-0 disabled:cursor-not-allowed disabled:bg-[var(--color-surface-alt)] disabled:opacity-60";

const inputNormalStyles =
  "border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-[var(--color-primary)]/20";

const inputErrorStyles =
  "border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-[var(--color-error)]/20";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      required,
      disabled,
      className = "",
      containerClassName = "",
      ...props
    },
    ref,
  ) => {
    const generatedId = React.useId();

    const inputId = id ?? generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const describedBy =
      [error ? errorId : "", !error && helperText ? helperId : ""]
        .filter(Boolean)
        .join(" ") || undefined;

    return (
      <div className={`w-full ${containerClassName}`}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-sm font-medium text-[var(--color-text)]"
          >
            {label}

            {required && (
              <span
                className="ml-1 text-[var(--color-error)]"
                aria-hidden="true"
              >
                *
              </span>
            )}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <span
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            className={[
              inputBaseStyles,
              error ? inputErrorStyles : inputNormalStyles,
              leftIcon ? "pl-10" : "px-3.5",
              rightIcon ? "pr-10" : "pr-3.5",
              "h-10",
              "text-sm",
              className,
            ]
              .filter(Boolean)
              .join(" ")}
            {...props}
          />

          {rightIcon && (
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]"
              aria-hidden="true"
            >
              {rightIcon}
            </span>
          )}
        </div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="mt-1.5 text-xs font-medium text-[var(--color-error)]"
          >
            {error}
          </p>
        )}

        {!error && helperText && (
          <p
            id={helperId}
            className="mt-1.5 text-xs text-[var(--color-text-muted)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
