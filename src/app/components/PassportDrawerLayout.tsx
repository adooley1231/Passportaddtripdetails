import { ReactNode } from "react";

interface PassportDrawerLayoutProps {
  leftPanel: ReactNode;
  rightPanelHeader: ReactNode;
  rightPanelContent: ReactNode;
  rightPanelButtons: ReactNode;
}

export function PassportDrawerLayout({
  leftPanel,
  rightPanelHeader,
  rightPanelContent,
  rightPanelButtons,
}: PassportDrawerLayoutProps) {
  return (
    <div className="content-stretch flex items-center relative size-full">
      {/* Left Panel */}
      {leftPanel}
      
      {/* Right Panel with sticky buttons */}
      <div className="bg-white content-stretch flex flex-col h-full items-center relative shrink-0 w-[729px]" data-name="Flyout Small">
        {/* Header */}
        {rightPanelHeader}
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto w-full px-[64px]">
          {rightPanelContent}
        </div>
        
        {/* Sticky Buttons at Bottom */}
        <div className="sticky bottom-0 w-full">
          {rightPanelButtons}
        </div>
      </div>
    </div>
  );
}
