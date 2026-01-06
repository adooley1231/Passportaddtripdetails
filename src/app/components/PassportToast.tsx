import svgPaths from "../../imports/svg-2of2h7ozk9";
import { X } from "lucide-react";

interface PassportToastProps {
  onClose?: () => void;
}

export function PassportToast({ onClose }: PassportToastProps) {
  return (
    <div className="bg-[#5c9f5a] flex items-center justify-between px-[70px] py-[10px] w-full rounded-none shadow-lg">
      <div className="flex flex-col gap-[4px] leading-[1.4] text-white">
        <p className="font-['Gotham:Medium',sans-serif] text-[12px] uppercase tracking-wide">
          Passport updated
        </p>
        <p className="font-['Gotham:Book',sans-serif] text-[12px]">
          We have saved your new passport details
        </p>
      </div>
      <button
        onClick={onClose}
        className="shrink-0 ml-[20px] p-1 hover:bg-white/10 rounded transition-colors"
        aria-label="Close notification"
      >
        <X className="size-[20px] text-white" strokeWidth={2} />
      </button>
    </div>
  );
}