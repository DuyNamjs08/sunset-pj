import { Link } from "react-router-dom";
import IconRight from "../../Icon/Right";
import IconChevronLeft from "../../Icon/Left";

const DrawerItem = ({
  children,
  showIcon,
  onClickShowChildren,
  linkUrl,
  icon,
  onClick,
  active,
}) => {
  return (
    <div
      className={` ${
        active ? "bg-[#a0abe9ccc]" : ""
      } flex  text-[#000] justify-between items-center border-t border-b border-[#ccc] uppercase

       `}
      onClick={onClick && onClick}
    >
      <Link
        className={` flex w-full text-[12px]  ${
          showIcon || icon ? "p-[14px_0_14px_17px]" : "p-[14px_17px]"
        } `}
        to={linkUrl}
      >
        {children}
      </Link>
      {icon ? (
        <div className="min-w-10">{icon}</div>
      ) : (
        showIcon && (
          <div className="w-10 " onClick={onClickShowChildren}>
            <IconRight />
          </div>
        )
      )}
    </div>
  );
};

export default DrawerItem;
