import { ReactNode, useState } from "react";
import CustomButton from "../../Custom/CustomButton/CustomButton";

interface NavItemOptions {
  href: string;
  label: string;
}

interface NavItemProps {
  handleNavigation: Function;
  href: string;
  children: ReactNode;
  options?: Array<NavItemOptions>;
  className?: string;
}

const NavItem = (props: NavItemProps) => {
  const { children, handleNavigation, className, href, options } = props;

  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <CustomButton
        onClick={() => handleNavigation(href)}
        className={className}
      >
        {children}
      </CustomButton>
      {isHover && options?.length > 0 && (
        <div className="flex flex-col absolute">
          {options.map((option) => (
            <CustomButton onClick={() => handleNavigation(option.href)}>
              {option.label}
            </CustomButton>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavItem;
