import React from "react";

interface IInputProps {
  value: string;
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input
    type="text"
    placeholder="name"
    value={value}
    onChange={onChange}
  ></input>
);

interface IFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormProps> = ({
  children,
  onSubmit,
}) => <form onSubmit={onSubmit}>{children}</form>;
