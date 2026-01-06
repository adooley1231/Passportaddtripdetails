import imgRectangle1 from "figma:asset/3c9d4710709b74814b3ba5060cdb4905533b8c51.png";

function FlexColHelper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 266 1">
          <line id="Line 162" stroke="var(--stroke-0, #E6E6E6)" x2="266" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}

function FlexCol() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[24px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Flex col">
      <ol className="block font-['Gotham:Book',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[16px] text-black w-full" start="1">
        <li className="ms-[24px]">
          <span className="leading-[1.4]">Passport on plain background</span>
        </li>
      </ol>
      <FlexColHelper />
      <ol className="block font-['Gotham:Book',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[16px] text-black w-full" start="2">
        <li className="ms-[24px]">
          <span className="leading-[1.4]">All four(4) corners are visible</span>
        </li>
      </ol>
      <FlexColHelper />
      <ol className="block font-['Gotham:Book',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[16px] text-black w-full" start="3">
        <li className="ms-[24px]">
          <span className="leading-[1.4]">No glares or shadows</span>
        </li>
      </ol>
      <FlexColHelper />
      <ol className="block font-['Gotham:Book',sans-serif] leading-[0] list-decimal not-italic relative shrink-0 text-[16px] text-black w-full" start="4">
        <li className="ms-[24px]">
          <span className="leading-[1.4]">Text is readable</span>
        </li>
      </ol>
    </div>
  );
}

function FlexRow() {
  return (
    <div className="content-stretch flex gap-[33px] items-start relative shrink-0 w-full" data-name="Flex row">
      <div className="h-[232px] relative shrink-0 w-[248px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-[#d9d9d9] inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[139.38%] left-0 max-w-none top-[-39.74%] w-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
      <FlexCol />
    </div>
  );
}

export default function FlexCol1() {
  return (
    <div className="bg-white relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] size-full" data-name="Flex col">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">Follow these steps:</p>
          <FlexRow />
        </div>
      </div>
    </div>
  );
}