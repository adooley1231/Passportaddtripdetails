import svgPaths from "./svg-zm2mpjf4sz";
import clsx from "clsx";
import imgEllipse148 from "figma:asset/192e7961494d12649e70321fc4c4638bd886ca40.png";
import imgRectangle1 from "figma:asset/3c9d4710709b74814b3ba5060cdb4905533b8c51.png";
import imgPassportExample from "figma:asset/9de377155c27e0e485a9ff65742185d83b2fab63.png";
import { PassportReviewContent } from "../app/components/PassportReviewContent";

export type PassportData = {
  country: string;
  surname: string;
  givenName: string;
  passportNumber: string;
  issueDate: string;
  expirationDate: string;
};

export type TravelerData = {
  id: string;
  name: string;
  type: "Primary" | "Secondary";
  passports: PassportData[]; // Changed from single passport to array
};

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">{children}</div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className={clsx("flex items-center justify-center relative shrink-0", additionalClassNames)}>
      <div className="flex-none rotate-[270deg]">{children}</div>
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

function Helper() {
  return (
    <Wrapper additionalClassNames="size-[24px]">
      <FoundationIconsChevron />
    </Wrapper>
  );
}

function FoundationIconsChevron() {
  return (
    <Wrapper1>
      <g id="Foundation/Icons/Chevron">
        <path d={svgPaths.p5feee80} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper1>
  );
}
type TravelerCardInfoProps = {
  text: string;
  text1: string;
};

function TravelerCardInfo({ text, text1 }: TravelerCardInfoProps) {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <div className="font-['Gotham:Book',sans-serif] leading-[0] not-italic relative shrink-0 text-[#77777d] text-[0px] text-nowrap">
        <p className="leading-[1.4] mb-0 text-[16px] text-black">{text}</p>
        <p className="leading-[1.4] text-[16px]">
          <span className="text-[#77777d]">{text1}</span>
          <span>{` traveler`}</span>
        </p>
      </div>
    </div>
  );
}

function FoundationButtonPrimary() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-center min-w-[90px] px-[24px] py-0 relative shrink-0" data-name="Foundation/Button/Primary">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">Add new</p>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative shrink-0" data-name="Buttons">
      <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none" />
      <FoundationButtonPrimary />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-black text-nowrap uppercase">Current Travelers</p>
      <Buttons />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Gotham:Book',sans-serif] leading-[1.4] ml-0 mt-0 not-italic relative text-[14px] text-black text-nowrap">Passports Uploaded</p>
    </div>
  );
}

function TravelerGroupHeader() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Traveler Group Header">
      <Group />
    </div>
  );
}

function TravelerCardContainer() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Traveler Card Container">
      <div className="relative shrink-0 size-[60px]">
        <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse148} width="60" />
      </div>
      <TravelerCardInfo text="Joyce Williams" text1="Primary" />
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

function TravelerCard() {
  return (
    <div className="bg-[rgba(78,115,138,0.12)] relative shrink-0 w-full" data-name="Traveler Card" data-traveler-id="joyce">
      <div aria-hidden="true" className="absolute border-[#4e738a] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <TravelerCardContainer1 />
          <Helper />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="[grid-area:1_/_1] ml-[9px] mt-[8.5px] relative size-[43px]" data-name="Profile">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="Profile">
          <path d={svgPaths.p30daf880} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TravelerProfile() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Traveler Profile">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
          <circle cx="30" cy="30" fill="var(--fill-0, #4E738A)" id="Ellipse 148" r="30" />
        </svg>
      </div>
      <Profile />
    </div>
  );
}

function TravelerCardContainer2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Traveler Card Container">
      <TravelerProfile />
      <TravelerCardInfo text="Brian Williams" text1="Secondary" />
    </div>
  );
}

function TravelerCardContainer3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Traveler Card Container">
      <TravelerCardContainer2 />
    </div>
  );
}

function TravelerCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Traveler Card" data-traveler-id="brian">
      <div aria-hidden="true" className="absolute border-[#4e738a] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <TravelerCardContainer3 />
          <Helper />
        </div>
      </div>
    </div>
  );
}

type DynamicTravelerCardProps = {
  traveler: TravelerData;
  isFirst: boolean;
};

function DynamicTravelerCard({ traveler, isFirst }: DynamicTravelerCardProps) {
  return (
    <div className="relative shrink-0 w-full" data-name="Traveler Card" data-traveler-id={traveler.id}>
      <div aria-hidden="true" className="absolute border-[#4e738a] border-[0px_0px_0px_6px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[8px] relative w-full">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Traveler Card Container">
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Traveler Card Container">
              {isFirst && traveler.id === "joyce" ? (
                <div className="relative shrink-0 size-[60px]">
                  <img alt="" className="block max-w-none size-full" height="60" src={imgEllipse148} width="60" />
                </div>
              ) : (
                <TravelerProfile />
              )}
              <TravelerCardInfo text={traveler.name} text1={traveler.type} />
            </div>
          </div>
          <Helper />
        </div>
      </div>
    </div>
  );
}

type TravelerGroupDynamicProps = {
  travelers: Record<string, TravelerData>;
};

function TravelerGroupDynamic({ travelers }: TravelerGroupDynamicProps) {
  const travelerList = Object.values(travelers);

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Traveler Group">
      <TravelerGroupHeader />
      {travelerList.map((traveler, index) => (
        <DynamicTravelerCard key={traveler.id} traveler={traveler} isFirst={index === 0} />
      ))}
    </div>
  );
}

function TravelerGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Traveler Group">
      <TravelerGroupHeader />
      <TravelerCard />
      <TravelerCard1 />
    </div>
  );
}

type ContentProps = {
  travelers?: Record<string, TravelerData>;
};

function Content({ travelers }: ContentProps) {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[32px] h-full items-start pb-[48px] pt-[60px] px-[40px] relative shrink-0 w-[459px]" data-name="Content">
      <Frame2 />
      {travelers ? <TravelerGroupDynamic travelers={travelers} /> : <TravelerGroup />}
    </div>
  );
}

function Icons() {
  return (
    <Wrapper1 additionalClassNames="shrink-0">
      <g id="Icon">
        <path d={svgPaths.p325a5800} id="Vector 294" stroke="var(--stroke-0, black)" strokeLinecap="round" />
      </g>
    </Wrapper1>
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

function FoundationIconsChevron1() {
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
          <FoundationIconsChevron1 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] items-end ml-0 mt-0 relative">
      <Wrapper additionalClassNames="size-[16px]">
        <Icons1 />
      </Wrapper>
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">back</p>
    </div>
  );
}

function Eyebrow() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start sticky top-0 z-20 bg-white py-[16px] w-full" data-name="Eyebrow">
      <Frame />
    </div>
  );
}

function Frame3() {
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
      <Frame3 />
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
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">Add your passport photo:</p>
      <p className="relative shrink-0 text-[16px] text-nowrap">Drag or upload an image of your passport*</p>
    </div>
  );
}

function ReactIconsAiAiOutlineCloudUpload() {
  return (
    <Wrapper1 additionalClassNames="shrink-0">
      <g id="react-icons/ai/AiOutlineCloudUpload">
        <path d={svgPaths.p2fc24e80} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
        <path d={svgPaths.pf866100} fill="var(--fill-0, black)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.4" />
      </g>
    </Wrapper1>
  );
}

function UploadButton() {
  return (
    <div className="bg-white h-[156.667px] relative rounded-[4px] shrink-0 w-full cursor-pointer hover:border-[#4e738a] transition-colors" data-name="uploadButton">
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

function FlexCol3({ isPassportUploaded }: { isPassportUploaded?: boolean }) {
  if (isPassportUploaded) {
    return (
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[32px] relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-[611px]" data-name="Flex col">
        <FlexCol2 />
        <div className="bg-white relative rounded-[4px] shrink-0 w-full overflow-hidden border border-[#4e738a] border-solid">
          <img alt="Uploaded passport" className="block w-full h-auto" src={imgPassportExample} />
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[297px] items-start p-[32px] relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-[611px]" data-name="Flex col">
      <FlexCol2 />
      <UploadButton />
    </div>
  );
}

function Container({ isPassportUploaded }: { isPassportUploaded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
      <FlexCol1 />
      <FlexCol3 isPassportUploaded={isPassportUploaded} />
    </div>
  );
}

function Frame4({ isPassportUploaded }: { isPassportUploaded?: boolean }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame1 />
      <Container isPassportUploaded={isPassportUploaded} />
    </div>
  );
}

function FoundationButtonPrimary1() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Foundation/Button/Primary">
      <div aria-hidden="true" className="absolute border border-[#b4b6ba] border-solid inset-0 pointer-events-none" />
      <Wrapper2>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">Cancel</p>
      </Wrapper2>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimary1 />
    </div>
  );
}

function TravelerForm() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-center min-h-px min-w-px relative shrink-0" data-name="Traveler Form">
      <Buttons1 />
    </div>
  );
}

function FoundationButtonPrimary2({ isReviewMode }: { isReviewMode?: boolean }) {
  return (
    <div className="basis-0 bg-black grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Foundation/Button/Primary">
      <Wrapper2>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase">{isReviewMode ? "Save" : "Next"}</p>
      </Wrapper2>
    </div>
  );
}

function Buttons2({ isReviewMode }: { isReviewMode?: boolean }) {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Buttons">
      <FoundationButtonPrimary2 isReviewMode={isReviewMode} />
    </div>
  );
}

function PanelStickyCta({ isReviewMode }: { isReviewMode?: boolean }) {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start justify-center px-[68px] py-[32px] relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Panel/Sticky-CTA">
      <TravelerForm />
      <Buttons2 isReviewMode={isReviewMode} />
    </div>
  );
}

function FlyoutSmall({ isPassportUploaded, isReviewMode }: { isPassportUploaded?: boolean, isReviewMode?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-center px-[64px] relative shrink-0 w-[729px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-[124px]" data-name="Flyout Small">
      <FlyoutHeader />
      {isReviewMode ? <PassportReviewContent /> : <Frame4 isPassportUploaded={isPassportUploaded} />}
    </div>
  );
}

export { PanelStickyCta };

export default function PassportModal({ isPassportUploaded, isReviewMode, travelers }: { isPassportUploaded?: boolean, isReviewMode?: boolean, travelers?: Record<string, TravelerData> }) {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="Passport Modal">
      <Content travelers={travelers} />
      <FlyoutSmall isPassportUploaded={isPassportUploaded} isReviewMode={isReviewMode} />
    </div>
  );
}