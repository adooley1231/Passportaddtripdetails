import svgPaths from "./svg-2of2h7ozk9";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.4] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
      <p className="font-['Gotham:Medium',sans-serif] relative shrink-0 uppercase">Passport updated</p>
      <p className="font-['Gotham:Book',sans-serif] relative shrink-0">{`We have saved your new passport details `}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[20px] items-center px-0 py-[10px] relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1a333784} id="Vector 294" stroke="var(--stroke-0, white)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0" data-name="Action">
      <Icons />
    </div>
  );
}

function FoundationNavigationAlerts() {
  return (
    <div className="bg-[#5c9f5a] content-stretch flex h-[68px] items-center justify-between px-[70px] py-0 relative shrink-0 w-[1440px]" data-name="Foundation/Navigation/Alerts">
      <Frame />
      <Action />
    </div>
  );
}

export default function AlertsDefault() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Alerts/Default">
      <FoundationNavigationAlerts />
    </div>
  );
}