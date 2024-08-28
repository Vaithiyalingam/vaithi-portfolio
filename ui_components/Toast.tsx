import { FC } from "react";

interface IToastProps {
  timer: number;
  placement: string;
}

export const Toast: FC<IToastProps> = ({ timer, placement }) => {
  return (
    <div className="absolute right-10 bottom-10 text-whiteBold border border-white py-2 px-4 rounded-xl">
      toast
    </div>
  );
};
