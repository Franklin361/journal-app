import { Icon } from "../../assets";
import { NameIcon } from "../../interfaces";

interface ButtonProps {
  label: string;
  icon: NameIcon
  primary?: boolean;
  className?:string;
  onClick?: () => void;
}

export const Button = ({ label, icon, primary = false, className, ...rest }: ButtonProps) => {
  return (
    <button className={`btn flex-1 w-full  lg:w-auto flex justify-center items-center gap-3 ${primary ? 'btn-primary' : ''} ${className}`}>
      {label}
      <Icon name={icon} className="text-xl" />
    </button>
  )
}