import { ReactNode } from "react";

interface CustomButtonProps {
  onClick: Function;
  children: ReactNode;
  onHover?: Function,
  className?: string;
}

const CustomButton = (props: CustomButtonProps) => {
  const { children, onClick, className } = props;
  return <button className={`p-2 cursor ml-2 mr-2 ${className}`} onClick={(e) => onClick(e)}>{children}</button>;
};

export default CustomButton;
