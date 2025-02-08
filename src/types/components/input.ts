type InputProps = {
  label?: string;
  type?: string;
  h?: number;
  w?: number;
  name: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  error?: string;
};

export default InputProps;
