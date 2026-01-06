import svgPaths from "./svg-7r005vsorn";
import clsx from "clsx";
import imgEllipse148 from "figma:asset/192e7961494d12649e70321fc4c4638bd886ca40.png";
import { TwoPassportView } from "../app/components/TwoPassportView";
import FoundationNotificationCallout from "./FoundationNotificationCallout";
import { useState } from "react";

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

export const TRAVELERS: Record<string, TravelerData> = {
  joyce: {
    id: "joyce",
    name: "Joyce Williams",
    type: "Primary",
    passports: [
      {
        country: "United States",
        surname: "Williams",
        givenName: "Joyce",
        passportNumber: "••••••••",
        issueDate: "03/15/2019",
        expirationDate: "03/14/2029",
      }
    ], // Single passport only
  },
  brian: {
    id: "brian",
    name: "Brian Williams",
    type: "Secondary",
    passports: [
      {
        country: "United States",
        surname: "Williams",
        givenName: "Brian",
        passportNumber: "••••••••",
        issueDate: "07/22/2020",
        expirationDate: "07/21/2030",
      }
    ], // Single passport only
  },
  sarah: {
    id: "sarah",
    name: "Sarah Chen",
    type: "Secondary",
    passports: [
      {
        country: "United States",
        surname: "Chen",
        givenName: "Sarah",
        passportNumber: "••••••••",
        issueDate: "05/10/2018",
        expirationDate: "05/09/2028",
      },
      {
        country: "Canada",
        surname: "Chen",
        givenName: "Sarah",
        passportNumber: "••••••••",
        issueDate: "08/22/2020",
        expirationDate: "08/21/2030",
      }
    ], // Multiple passports - shows TwoPassportView with dropdown
  },
};

type Frame627939Props = {
  selectedTravelerId?: string;
  travelers?: Record<string, TravelerData>;
};

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">{children}</div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative size-[24px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}

function FlexCol7Helper() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 601 1">
          <line id="Line 166" stroke="var(--stroke-0, #E6E6E6)" x2="601" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type FlexCol1Props = {
  text: string;
  text1: string;
};

function FlexCol1({ text, text1 }: FlexCol1Props) {
  return (
    <div className="content-stretch flex flex-col font-['Gotham:Book',sans-serif] gap-[4px] items-start not-italic relative shrink-0 w-full">
      <p className="leading-[1.4] relative shrink-0 text-[16px] text-black w-full">{text}</p>
      <div className="flex flex-col justify-center leading-[0] relative shrink-0 text-[#6e6e72] text-[14px] w-full">
        <p className="leading-[1.4]">{text1}</p>
      </div>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex items-center justify-center relative shrink-0 size-[24px]">
      <div className="flex-none rotate-[270deg]">
        <FoundationIconsChevron />
      </div>
    </div>
  );
}

function FoundationIconsChevron() {
  return (
    <Wrapper>
      <g id="Foundation/Icons/Chevron">
        <path d={svgPaths.p5feee80} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper>
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

function Frame1() {
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

type DynamicTravelerCardProps = {
  traveler: TravelerData;
  isFirst: boolean;
};

function DynamicTravelerCard({ traveler, isFirst }: DynamicTravelerCardProps) {
  const hasMultiplePassports = traveler.passports.length > 1;
  
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
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Traveler Profile">
                  <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[60px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
                      <circle cx="30" cy="30" fill="var(--fill-0, #4E738A)" id="Ellipse 148" r="30" />
                    </svg>
                  </div>
                  <div className="[grid-area:1_/_1] ml-[9px] mt-[8.5px] relative size-[43px]" data-name="Profile">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
                      <g id="Profile">
                        <path d={svgPaths.p30daf880} fill="var(--fill-0, white)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              )}
              <TravelerCardInfo text={traveler.name} text1={traveler.type} />
            </div>
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
            {hasMultiplePassports && (
              <div className="bg-[#4e738a] content-stretch flex flex-col items-center justify-center px-[4px] py-0 relative rounded-[40px] shrink-0 size-[24px]" data-name="Foundation/Notification callout">
                <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white uppercase">{traveler.passports.length}</p>
              </div>
            )}
            <Helper />
          </div>
        </div>
      </div>
    </div>
  );
}

type TravelerGroupProps = {
  travelers: Record<string, TravelerData>;
};

function TravelerGroup({ travelers }: TravelerGroupProps) {
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

type ContentProps = {
  travelers: Record<string, TravelerData>;
};

function Content({ travelers }: ContentProps) {
  return (
    <div className="bg-[#f8f8f8] content-stretch flex flex-col gap-[32px] h-full items-start pb-[48px] pt-[60px] px-[40px] relative shrink-0 w-[459px]" data-name="Content">
      <Frame1 />
      <TravelerGroup travelers={travelers} />
    </div>
  );
}

function Icons() {
  return (
    <Wrapper additionalClassNames="shrink-0">
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
    <div className="content-stretch flex flex-col h-[60px] items-end relative shrink-0 w-[729px]" data-name="Flyout Header">
      <FlyoutSmallHeader />
    </div>
  );
}

function FlyoutSmallTitle() {
  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-[600px]" data-name="Flyout/Small/Title">
      <p className="basis-0 font-['Canela:Thin',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[44px] text-black">Passport Details</p>
    </div>
  );
}

function FoundationIconsHelp() {
  return (
    <div className="h-[20px] relative shrink-0 w-[19px]" data-name="Foundation/Icons/Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
        <g id="Help">
          <g id="Vector"></g>
          <path d={svgPaths.p19d0fb80} id="Vector_2" stroke="var(--stroke-0, #6E6E72)" strokeLinejoin="round" />
          <path d={svgPaths.p1d89ac0} id="Vector_3" stroke="var(--stroke-0, #6E6E72)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2f076b00} fill="var(--fill-0, #6E6E72)" id="Vector_4" stroke="var(--stroke-0, #6E6E72)" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
}

function FlexRow() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Flex row">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">Your Passport</p>
      <FoundationIconsHelp />
    </div>
  );
}

function FlexRow1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Flex row">
      <FlexRow />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e02b00] text-[14px] text-center text-nowrap underline">{`Delete `}</p>
    </div>
  );
}

function FlexCol() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Flex col">
      <FlexRow1 />
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6e6e72] text-[12px] w-full">{`Your passport information will make traveling even more seamless. `}</p>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6e6e72] text-[12px] w-full">IMPORTANT: Please verify your passport is valid for at least 6 months from your departure date. Many destinations require this for entry.</p>
    </div>
  );
}

function FoundationIconsInfo() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Foundation/Icons/Info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Info">
          <g id="Vector"></g>
          <path d={svgPaths.p1f0a5b80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p3d4bb800} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2cb1e180} fill="var(--fill-0, black)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function FlexRow2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Flex row">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Passport Number</p>
      <FoundationIconsInfo />
    </div>
  );
}

function FlexCol2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Flex col">
      <FlexRow2 />
      <div className="flex flex-col font-['Gotham:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e72] text-[12px] w-full">
        <p className="leading-[1.4]">••••••••</p>
      </div>
    </div>
  );
}

type FlexCol3Props = {
  travelerData: TravelerData;
};

function FlexCol3({ travelerData }: FlexCol3Props) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Flex col">
      <FlexCol1 text="Passport Country" text1={travelerData.passports[0].country} />
      <FlexCol7Helper />
      <FlexCol1 text="Surname" text1={travelerData.passports[0].surname} />
      <FlexCol7Helper />
      <FlexCol1 text="Given Name" text1={travelerData.passports[0].givenName} />
      <FlexCol7Helper />
      <FlexCol2 />
      <FlexCol7Helper />
      <FlexCol1 text="Issue Date" text1={travelerData.passports[0].issueDate} />
      <FlexCol7Helper />
      <FlexCol1 text="Expiration Date" text1={travelerData.passports[0].expirationDate} />
      <FlexCol7Helper />
    </div>
  );
}

type Content1Props = {
  travelerData: TravelerData;
  hasTwoPassports: boolean;
};

function Content1({ travelerData, hasTwoPassports }: Content1Props) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[794px] items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <FlyoutSmallTitle />
      <FlexCol />
      <FlexCol3 travelerData={travelerData} />
    </div>
  );
}

function FoundationButtonPrimary1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[288px]" data-name="Foundation/Button/Primary">
      <div aria-hidden="true" className="absolute border border-[#b4b6ba] border-solid inset-0 pointer-events-none" />
      <Wrapper1>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">Add another</p>
      </Wrapper1>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[288px]" data-name="Buttons">
      <FoundationButtonPrimary1 />
    </div>
  );
}

function TravelerForm() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[288px]" data-name="Traveler Form">
      <Buttons1 />
    </div>
  );
}

function FoundationButtonPrimary2() {
  return (
    <div className="bg-black h-[60px] relative shrink-0 w-[288px]" data-name="Foundation/Button/Primary">
      <Wrapper1>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase">Update</p>
      </Wrapper1>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[288px]" data-name="Buttons">
      <FoundationButtonPrimary2 />
    </div>
  );
}

function TravelerForm1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[288px]" data-name="Traveler Form">
      <Buttons2 />
    </div>
  );
}

function PanelStickyCta() {
  return (
    <div className="bg-white relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] shrink-0 w-full" data-name="Panel/Sticky-CTA">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center px-[68px] py-[32px] relative">
          <TravelerForm />
          <TravelerForm1 />
        </div>
      </div>
    </div>
  );
}

type FlyoutSmallProps = {
  travelerData: TravelerData;
  hasTwoPassports: boolean;
};

function FlyoutSmall({ travelerData, hasTwoPassports }: FlyoutSmallProps) {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-center py-0 relative shrink-0 w-[729px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" data-name="Flyout Small" style={{ paddingLeft: '64px', paddingRight: '64px' }}>
      <FlyoutHeader />
      <Content1 travelerData={travelerData} hasTwoPassports={hasTwoPassports} />
    </div>
  );
}

export { PanelStickyCta };

export default function Frame({ selectedTravelerId = "joyce", travelers }: Frame627939Props) {
  const [travelersData, setTravelersData] = useState(() => travelers || TRAVELERS);
  const travelerData = travelersData[selectedTravelerId] || travelersData.joyce;
  const hasTwoPassports = travelerData && travelerData.passports && travelerData.passports.length >= 2;
  const [selectedPassportIndex, setSelectedPassportIndex] = useState(0);
  
  const handleDeletePassport = (passportIndex: number) => {
    setTravelersData(prev => {
      // Create a completely new object to ensure React detects the change
      const updatedPassports = [...prev[selectedTravelerId].passports];
      updatedPassports.splice(passportIndex, 1);
      
      return {
        ...prev,
        [selectedTravelerId]: {
          ...prev[selectedTravelerId],
          passports: updatedPassports
        }
      };
    });
    
    // Reset selected index if needed
    setSelectedPassportIndex(0);
  };
  
  return (
    <div className="content-stretch flex items-center relative size-full">
      <Content travelers={travelersData} />
      {hasTwoPassports ? (
        <TwoPassportView 
          passports={travelerData.passports} 
          selectedPassportIndex={selectedPassportIndex} 
          onPassportSelect={setSelectedPassportIndex}
          onDeletePassport={handleDeletePassport}
        />
      ) : (
        <FlyoutSmall travelerData={travelerData} hasTwoPassports={hasTwoPassports} />
      )}
    </div>
  );
}