"use client";

import * as React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({ id, ...props }: CheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        className="w-5 h-5 text-primary border border-border rounded focus:ring-2 focus:ring-primary focus:outline-none"
        {...props}
      />
      <label htmlFor={id} className="text-foreground text-sm">
        {props.children}
      </label>
    </div>
  );
}
