import { FunctionComponent, ReactNode } from "react";

interface ChatContainerProps {
  children: ReactNode;
}

const ChatContainer: FunctionComponent = (props: ChatContainerProps) => {
  const { children } = props;

  return (
    <div className="flex flex-col h-full bg-[#DAD3CC]">
      <div className="flex flex-col justify-between h-full">
      {children}
      </div>
    </div>
  );
};

export default ChatContainer;
