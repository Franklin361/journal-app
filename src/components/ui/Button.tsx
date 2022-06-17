import { Icon } from "../../assets";
import { NameIcon } from "../../interfaces";

interface ButtonProps {
  label?: string;
  icon: NameIcon
  primary?: boolean;
  secondary?: boolean;
  className?:string;
  onClick?: () => void;
  [x:string]: any;
  
}

export const Button = ({ label, icon, primary = false,secondary = false , className, ...rest }: ButtonProps) => {
  return (
    <button 
    {...rest}
      className={`
        btn flex-1 w-full  lg:w-auto flex justify-center items-center gap-3 
        ${primary ? 'btn-primary' : ''} 
        ${secondary ? 'btn-error' : ''} 
        ${className}`}
    >
      {label && label}
      <Icon name={icon} className="text-xl" />
    </button>
  )
}