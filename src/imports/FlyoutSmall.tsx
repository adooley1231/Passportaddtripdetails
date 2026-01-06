import svgPaths from "./svg-rd32hxase8";
import imgRectangle1 from "figma:asset/3c9d4710709b74814b3ba5060cdb4905533b8c51.png";

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

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

function Icons() {
  return (
    <Wrapper>
      <g id="Icon">
        <path d={svgPaths.p325a5800} id="Vector 294" stroke="var(--stroke-0, black)" strokeLinecap="round" />
      </g>
    </Wrapper>
  );
}

function FlyoutSmallHeader() {
  return (
    <div className="bg-white h-[71.761px] relative shrink-0 w-full" data-name="Flyout/Small/Header">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end pl-[64px] pr-[20px] py-0 relative size-full">
          <Icons />
        </div>
      </div>
    </div>
  );
}

function FlyoutHeader() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[729px]" data-name="Flyout Header">
      <FlyoutSmallHeader />
    </div>
  );
}

function FoundationIconsChevron() {
  return (
    <div className="relative size-full" data-name="Foundation/Icons/Chevron">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Foundation/Icons/Chevron">
          <path d={svgPaths.pd48d720} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative size-[16px]" data-name="Icons">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-[16px]">
          <FoundationIconsChevron />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-end ml-0 mt-0 relative">
      <div className="flex items-center justify-center relative shrink-0 size-[16px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Icons1 />
        </div>
      </div>
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">back</p>
    </div>
  );
}

function Eyebrow() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Eyebrow">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Eyebrow />
      <p className="font-['Canela:Thin',sans-serif] h-[53px] leading-[1.2] not-italic relative shrink-0 text-[44px] text-black w-[611px]">Update Passport</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e72] text-[14px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Diam arcu congue ullamcorper aliquam quam aliquet dis id. Elit euismod aliquet amet felis iaculis aliquam. Risus magna tellus imperdiet amet ante vestibulum nec.</p>
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

function FlexCol1() {
  return (
    <div className="bg-white relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Flex col">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative w-full">
          <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">Follow these steps:</p>
          <FlexRow />
        </div>
      </div>
    </div>
  );
}

function FlexCol2() {
  return (
    <div className="content-stretch flex flex-col font-['Gotham:Book',sans-serif] gap-[12px] items-start leading-[1.4] not-italic relative shrink-0 text-black w-full" data-name="Flex col">
      <p className="min-w-full relative shrink-0 text-[20px] w-[min-content]">Add your passport photo:</p>
      <p className="relative shrink-0 text-[16px] text-nowrap">Drag or upload an image of your passport*</p>
    </div>
  );
}

function ReactIconsAiAiOutlineCloudUpload() {
  return (
    <Wrapper>
      <g id="react-icons/ai/AiOutlineCloudUpload">
        <path d={svgPaths.p2fc24e80} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
        <path d={svgPaths.pf866100} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
      </g>
    </Wrapper>
  );
}

function UploadButton() {
  return (
    <div className="bg-white h-[156.667px] relative rounded-[4px] shrink-0 w-full" data-name="uploadButton">
      <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-dashed inset-0 pointer-events-none rounded-[4px] shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-center justify-center px-[24px] py-0 relative size-full">
          <ReactIconsAiAiOutlineCloudUpload />
          <p className="font-['Gotham:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-center text-nowrap">Upload photo</p>
          <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6e6e72] text-[12px] text-nowrap">PNG or JPG (Max 5MB)</p>
        </div>
      </div>
    </div>
  );
}

function FlexCol3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[297px] items-start p-[32px] relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-[611px]" data-name="Flex col">
      <FlexCol2 />
      <UploadButton />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <FlexCol1 />
      <FlexCol3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame1 />
      <Container />
    </div>
  );
}

function FoundationButtonPrimary() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Foundation/Button/Primary">
      <div aria-hidden="true" className="absolute border border-[#b4b6ba] border-solid inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">Cancel</p>
      </Wrapper1>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimary />
    </div>
  );
}

function TravelerForm() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Traveler Form">
      <Buttons />
    </div>
  );
}

function FoundationButtonPrimary1() {
  return (
    <div className="basis-0 bg-black grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Foundation/Button/Primary">
      <Wrapper1>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase">Next</p>
      </Wrapper1>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <FoundationButtonPrimary1 />
    </div>
  );
}

function PanelStickyCta() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start justify-center px-[68px] py-[32px] relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-[729px]" data-name="Panel/Sticky-CTA">
      <TravelerForm />
      <Buttons1 />
    </div>
  );
}

export default function FlyoutSmall() {
  return (
    <div className="bg-white relative size-full" data-name="Flyout Small">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[64px] py-0 relative size-full">
          <FlyoutHeader />
          <Frame3 />
          <PanelStickyCta />
        </div>
      </div>
    </div>
  );
}