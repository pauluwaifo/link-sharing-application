import { Email } from "../svgs";

interface Props {
  className?: string;
  name: string;
  type: string;
  id: string;
  placeholder: string;
}

const Input: React.FC<Props> = ({ className, name, type, id, placeholder }) => {
  return (
    <input
      className={`border-none outline-none basis-full text-[16px] font-[400] bg-transparent ${className}`}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

export default Input;
