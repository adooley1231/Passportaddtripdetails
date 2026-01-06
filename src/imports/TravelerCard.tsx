import svgPaths from "./svg-aehr75nnq2";
import imgEllipse148 from "figma:asset/192e7961494d12649e70321fc4c4638bd886ca40.png";

function TravelerCardInfo() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Traveler Card Info">
      <div className="font-['Gotham:Book',sans-serif] leading-[0] not-italic relative shrink-0 text-[#77777d] text-[0px] text-nowrap">
        <p className="leading-[1.4] mb-0 text-[16px] text-black">Lily Williams</p>
        <p className="leading-[1.4] text-[16px]">
          <span className="text-[#77777d]">Primary</span>
          <span>{` traveler`}</span>
        </p>
      </div>
    </div>
  );
}

function TravelerCardContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Traveler Card Container">
      <div className="relative shrink-0 size-[60px]">
        <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse148} width="60" />
      </div>
      <TravelerCardInfo />
    </div>
  );
}

function TravelerCardContainer1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Traveler Card Container">
      <TravelerCardContainer />
    </div>
  );
}

function FoundationNotificationCallout() {
  return (
    <div className="bg-[#4e738a] content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[40px] shrink-0 size-[24px]" data-name="Foundation/Notification callout">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white uppercase">2</p>
    </div>
  );
}

function FoundationIconsChevron() {
  return (
    <div className="relative size-[24px]" data-name="Foundation/Icons/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Foundation/Icons/Chevron">
          <path d={svgPaths.p5feee80} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[93.5px]">
      <FoundationNotificationCallout />
      <div className="flex items-center justify-center relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <FoundationIconsChevron />
        </div>
      </div>
    </div>
  );
}

export default function TravelerCard() {
  return (
    <div className="bg-[rgba(78,115,138,0.12)] relative size-full" data-name="Traveler Card">
      <div aria-hidden="true" className="absolute border-[#4e738a] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative size-full">
          <TravelerCardContainer1 />
          <Frame />
        </div>
      </div>
    </div>
  );
}