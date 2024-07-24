import { Email } from "../svgs";

interface Props {
  className?: string;
  name?: string;
  type: string;
  id?: string;
  placeholder: string;
  [key: string]: any;
}

const Input: React.FC<Props> = ({ className, name, type, id, placeholder, ...rest }) => {
  return (
    <input
      className={`border-none outline-none basis-full text-[16px] font-[400] bg-transparent w-full ${className}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
