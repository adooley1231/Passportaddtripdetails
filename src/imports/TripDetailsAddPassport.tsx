import svgPaths from "./svg-rts5xe4ad7";
import clsx from "clsx";
import imgEllipse147 from "figma:asset/383dd4785ef4ad3117ea77e90a1236c8ab577e6e.png";
import imgEllipse148 from "figma:asset/3d2da6f65d6dab686c423f2c2871c925c9fe66c7.png";
import imgLeftSideImageBg from "figma:asset/1976dde743b0016da3bd4b635296ec2e643e9c44.png";
import imgLeftSideImageBg1 from "figma:asset/bf7967b3b4a805ec8feb0dab373259d6a3249eec.png";

function Label8({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#777] text-[14px] text-nowrap">{children}</p>
    </div>
  );
}
type Wrapper5Props = {
  additionalClassNames?: string;
};

function Wrapper5({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper5Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.181 48.8293">
        {children}
      </svg>
    </div>
  );
}

function Wrapper4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#6e6e72] text-[14px] text-nowrap">{children}</p>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="size-full">
      <div className="content-stretch flex flex-col gap-[25px] items-start pb-0 pt-[32px] px-[32px] relative size-full">{children}</div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        {children}
      </svg>
    </div>
  );
}
type Text4Props = {
  text: string;
  additionalClassNames?: string;
};

function Text4({ text, children, additionalClassNames = "" }: React.PropsWithChildren<Text4Props>) {
  return (
    <div className={clsx("content-stretch flex flex-col gap-[12px] opacity-70 relative shrink-0", additionalClassNames)}>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[14px] text-black text-nowrap">{text}</p>
      <Wrapper1>{children}</Wrapper1>
    </div>
  );
}

function Tab4({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1>
      <g id="tab" opacity="0">
        {children}
      </g>
    </Wrapper1>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <Wrapper2>{children}</Wrapper2>
    </div>
  );
}

function RequestUiHelper() {
  return (
    <div className="h-0 relative shrink-0 w-[531px]">
      <div className="absolute inset-[-0.5px_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 531 1">
          <path d="M0 0.5H531" id="Vector 327" stroke="var(--stroke-0, #B4B6BA)" />
        </svg>
      </div>
    </div>
  );
}
type Text3Props = {
  text: string;
  additionalClassNames?: string;
};

function Text3({ text, additionalClassNames = "" }: Text3Props) {
  return (
    <div className={clsx("content-stretch flex gap-[48px] relative shrink-0", additionalClassNames)}>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">{text}</p>
    </div>
  );
}
type FoundationButtonPrimaryTextProps = {
  text: string;
  additionalClassNames?: string;
};

function FoundationButtonPrimaryText({ text, additionalClassNames = "" }: FoundationButtonPrimaryTextProps) {
  return (
    <div className={clsx("basis-0 grow min-h-px min-w-px relative shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#b4b6ba] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">
          <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">{text}</p>
        </div>
      </div>
    </div>
  );
}
type Image1Props = {
  text: string;
  text1: string;
};

function Image1({ text, text1 }: Image1Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]">
        <img alt="" className="block max-w-none size-full" height="48" src={imgEllipse148} width="48" />
      </div>
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
type Helper1Props = {
  text: string;
  text1: string;
};

function Helper1({ text, text1 }: Helper1Props) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Text2 text="J" />
      <div className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#77777d] text-[0px] text-[16px] text-nowrap">
        <p className="mb-0 text-black">{text}</p>
        <p>{text1}</p>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="bg-[#4e738a] content-stretch flex flex-col items-center justify-center px-[10px] py-[11px] relative rounded-[24px] shrink-0 size-[48px]">
      <p className="font-['Gotham:Medium',sans-serif] h-[24px] leading-[1.4] not-italic relative shrink-0 text-[20px] text-center text-white w-[28px]">{text}</p>
    </div>
  );
}

function Helper() {
  return (
    <div style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties} className="flex h-[19px] items-center justify-center relative shrink-0 w-0">
      <div className="flex-none rotate-[90deg]">
        <div className="h-0 relative w-[19px]">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 1">
              <line id="Line 901" stroke="var(--stroke-0, #E6E6E6)" x2="19" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type Text1Props = {
  text: string;
  additionalClassNames?: string;
};

function Text1({ text, additionalClassNames = "" }: Text1Props) {
  return (
    <div className={clsx("content-stretch flex items-start relative shrink-0", additionalClassNames)}>
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#77777d] text-[12px] text-nowrap uppercase">{text}</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start not-italic relative shrink-0 text-black text-nowrap">
      <p className="font-['Canela:Thin',sans-serif] leading-[1.2] relative shrink-0 text-[36px]">1 N Kaniku Dr, # 1048</p>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] relative shrink-0 text-[20px]">Punta Mita, Mexico, 96743</p>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper3 additionalClassNames="inset-0 overflow-clip">
      <g id="Icon">
        <path d={svgPaths.p124c2d00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d={svgPaths.p8323940} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
        <path d={svgPaths.p92eb600} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" />
      </g>
    </Wrapper3>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Icon />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Icons />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap underline">Get directions</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap underline">View residence</p>
      <Helper />
      <Frame28 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start justify-center ml-0 mt-0 relative w-[407px]">
      <Text1 text="Where" additionalClassNames="w-[407px]" />
      <Frame27 />
      <Frame30 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame31 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[407px]">
      <Group1 />
    </div>
  );
}

function Where() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[406px]" data-name="Where">
      <Frame23 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Canela:Thin',sans-serif] leading-[1.2] relative shrink-0 text-[36px] w-[410px]">{`Fri, Mar 8, 2023    `}</p>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] relative shrink-0 text-[20px] w-[212.918px]">3:00pm</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#77777d] text-[12px] uppercase w-[121.416px]">Check - in</p>
      <Frame58 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame62 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-start not-italic relative shrink-0 text-black">
      <p className="font-['Canela:Thin',sans-serif] leading-[1.2] relative shrink-0 text-[36px] w-[403.536px]">{`Mon, Mar 12, 2023 `}</p>
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] relative shrink-0 text-[20px] w-[218.221px]">11:00 am</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start ml-0 mt-0 relative">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#77777d] text-[12px] uppercase w-[143.749px]">Check - out</p>
      <Frame60 />
    </div>
  );
}

function CheckOut() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Check out">
      <Frame61 />
    </div>
  );
}

function TripDetailsRow() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="Trip details - Row 1">
      <Where />
      <Frame59 />
      <CheckOut />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[295px]">
      <Text1 text="Reservation Cost" additionalClassNames="flex-col" />
    </div>
  );
}

function InputArea() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Input area">
      <div className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="mb-0">{`3 plan days, `}</p>
        <p>2 advanced tokens</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <InputArea />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame51 />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Foundation/Icons/Chevron"></g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame52 />
      <Icons1 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[295px]">
      <Frame45 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black underline w-[464px]">View contract balance</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[295px]">
      <Frame21 />
      <Frame24 />
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[116px] items-start ml-0 mt-0 relative w-[406px]">
      <Frame44 />
    </div>
  );
}

function ReservationCost() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Reservation cost">
      <Frame />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[296px]">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#77777d] text-[12px] uppercase w-[91px]">Card on file</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[170px] py-0 relative shrink-0 w-[296px]">
      <Frame25 />
    </div>
  );
}

function ReactIconsSiSiVisa() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="react-icons/si/SiVisa">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="react-icons/si/SiVisa">
          <path d={svgPaths.pe9c3c80} fill="var(--fill-0, #1334CB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col font-['Gotham:Book',sans-serif] gap-[5px] items-start justify-center leading-[1.4] not-italic relative shrink-0 text-nowrap">
      <p className="relative shrink-0 text-[20px] text-black">ending in 2934</p>
      <p className="relative shrink-0 text-[#77777d] text-[14px]">Expires 08/2026</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <ReactIconsSiSiVisa />
      <Frame57 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame49 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[296px]">
      <Frame55 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black underline w-[464px]">Edit payment method</p>
    </div>
  );
}

function CardOnFile() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[117px] items-start relative shrink-0 w-[409px]" data-name="Card on file">
      <Frame22 />
      <Frame26 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center ml-[54px] mt-[91px] relative w-[260px]">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap underline">Smith@Exclusiveresorts.com</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap underline">941-234-2421</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start ml-[54px] mt-[124px] relative w-[146px]">
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[44px]">
        <img alt="" className="block max-w-none size-full" height="44" src={imgEllipse147} width="44" />
      </div>
      <div className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[20px] text-black text-nowrap">
        <p className="mb-0">Caroline Smith</p>
        <p>Member services</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame35 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-start ml-0 mt-[32px] relative w-[364.5px]">
      <Frame3 />
    </div>
  );
}

function Conceirge() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Conceirge">
      <Frame32 />
      <Frame29 />
      <Frame5 />
      <p className="[grid-area:1_/_1] font-['Gotham:Medium',sans-serif] leading-[1.2] ml-0 mt-0 not-italic relative text-[#77777d] text-[12px] uppercase w-[228.981px]">Your trip conceirge</p>
    </div>
  );
}

function Icons2() {
  return (
    <Wrapper3 additionalClassNames="left-[548.5px] size-[16px] top-[-2px]">
      <g id="Info">
        <g id="Vector"></g>
        <path d={svgPaths.p39933f40} id="Vector_2" stroke="var(--stroke-0, #77777D)" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 7.5H8V11H8.5" id="Vector_3" stroke="var(--stroke-0, #77777D)" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p19cf5970} fill="var(--fill-0, #77777D)" id="Vector_4" />
      </g>
    </Wrapper3>
  );
}

function TripDetailsRow1() {
  return (
    <div className="content-stretch flex gap-[43px] items-start relative shrink-0" data-name="Trip details - Row 2">
      <ReservationCost />
      <CardOnFile />
      <Conceirge />
      <Icons2 />
    </div>
  );
}

function TripDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0" data-name="Trip details">
      <TripDetailsRow />
      <TripDetailsRow1 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[0px] text-[20px] text-black text-nowrap">
        Travelers<span className="text-[#77777d]"> </span>
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return <Wrapper4>{`2 Guests `}</Wrapper4>;
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame40 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Helper1 text="Joyce WiIlliams" text1="Primary traveler" />
    </div>
  );
}

function Frame8() {
  return <div className="content-stretch flex items-center shrink-0" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[344px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Image1 text="Brian Williams" text1="Secondary" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[306px]">
      <Frame9 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame13 />
      <Frame47 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimaryText text="Manage travelers" additionalClassNames="h-[60px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col h-[202px] items-start justify-between relative shrink-0 w-full">
      <Frame65 />
      <Buttons />
    </div>
  );
}

function FoundationDesktopUtilityUiTravelers() {
  return (
    <Wrapper>
      <Frame1 />
      <Frame54 />
    </Wrapper>
  );
}

function UtilityUi() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[324px] items-start justify-self-stretch relative shrink-0" data-name="Utility UI">
      <FoundationDesktopUtilityUiTravelers />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Text3 text="Passports" additionalClassNames="items-center" />
    </div>
  );
}

function Frame41() {
  return <Wrapper4>{`3 Added `}</Wrapper4>;
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame41 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Helper1 text="Joyce WiIlliams" text1="Primary traveler" />
    </div>
  );
}

function Frame14() {
  return <div className="content-stretch flex items-center shrink-0" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame12 />
      <Frame14 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] text-nowrap underline">View</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Image1 text="Brian Williams" text1="Secondary" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame16 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[14px] text-nowrap underline">View</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame15 />
      <Frame48 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimaryText text="Manage Passports" additionalClassNames="h-[60px]" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col h-[202px] items-start justify-between relative shrink-0 w-full">
      <Frame67 />
      <Buttons1 />
    </div>
  );
}

function FoundationDesktopUtilityUiTravelers1() {
  return (
    <Wrapper>
      <Frame2 />
      <Frame56 />
    </Wrapper>
  );
}

function UtilityUi1() {
  return (
    <div className="content-stretch flex flex-col h-[324px] items-start relative shrink-0 w-full" data-name="Utility UI">
      <FoundationDesktopUtilityUiTravelers1 />
    </div>
  );
}

function UtilityUi2() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start justify-end place-self-stretch relative shrink-0" data-name="Utility UI">
      <UtilityUi1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col font-['Gotham:Book',sans-serif] gap-[4px] items-start leading-[1.4] not-italic relative shrink-0">
      <p className="relative shrink-0 text-[16px] text-black w-[343px]">No listings requested</p>
      <p className="relative shrink-0 text-[#77777d] text-[14px] w-[306px]">Add or adjust before July 2nd, 2023.</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0">
      <Text3 text="Plan your stay" additionalClassNames="items-start w-[344px]" />
      <Frame42 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col h-[172px] items-start relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimaryText text="Browse all listings" additionalClassNames="h-[60px]" />
    </div>
  );
}

function FoundationDesktopUtilityUiItinerary() {
  return (
    <div className="bg-white h-[324px] relative shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Foundation/ Desktop/ Utility UI / Itinerary">
      <Wrapper2>
        <Frame18 />
        <Buttons2 />
      </Wrapper2>
    </div>
  );
}

function UtilityUi3() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col items-start relative shrink-0" data-name="Utility UI">
      <FoundationDesktopUtilityUiItinerary />
    </div>
  );
}

function Group10() {
  return (
    <div className="font-['Gotham:Book',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.4] not-italic place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] ml-0 mt-[27px] relative text-[#77777d] text-[14px] w-[306px]">Start from an existing list or create a new list. Add or adjust before July 2nd, 2023.</p>
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-[16px] text-black w-[306px]">Not started yet</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[49px] items-start relative shrink-0">
      <Text3 text="Grocery Request" additionalClassNames="items-start w-[344px]" />
      <Group10 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col h-[147px] items-start relative shrink-0 w-full">
      <Frame19 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Buttons">
      <FoundationButtonPrimaryText text="Add items" additionalClassNames="h-[60px]" />
    </div>
  );
}

function TileGroceries() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Tile / Groceries">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[35px] pt-[32px] px-[32px] relative size-full">
          <Frame20 />
          <Buttons3 />
        </div>
      </div>
    </div>
  );
}

function FoundationDesktopUtilityUiGrocery() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-end min-h-px min-w-px relative shrink-0" data-name="Foundation/ Desktop/ Utility UI / Grocery">
      <TileGroceries />
    </div>
  );
}

function UtilityUi4() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex h-[324px] items-start justify-self-stretch relative shrink-0" data-name="Utility UI">
      <FoundationDesktopUtilityUiGrocery />
    </div>
  );
}

function Frame68() {
  return (
    <div className="basis-0 gap-[40px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] grow min-h-px min-w-px relative shrink-0">
      <UtilityUi />
      <UtilityUi2 />
      <UtilityUi3 />
      <UtilityUi4 />
    </div>
  );
}

function UtilityTiles() {
  return (
    <div className="content-end flex flex-wrap gap-[40px] h-[737px] items-end relative shrink-0 w-full" data-name="Utility tiles">
      <Frame68 />
    </div>
  );
}

function Group9() {
  return (
    <Wrapper5 additionalClassNames="inset-[68.31%_11.75%_21.48%_85.01%]">
      <g id="Group 626879">
        <path d={svgPaths.p367fbe00} fill="var(--fill-0, #4E738A)" id="Vector" />
        <path d={svgPaths.p32596380} fill="var(--fill-0, white)" id="Vector_2" />
      </g>
    </Wrapper5>
  );
}

function Group8() {
  return (
    <Wrapper5 additionalClassNames="inset-[13.72%_25.1%_76.07%_71.65%]">
      <g id="Group 626878">
        <path d={svgPaths.p367fbe00} fill="var(--fill-0, black)" id="Vector" />
        <path d={svgPaths.p5de6f00} fill="var(--fill-0, white)" id="Vector_2" />
      </g>
    </Wrapper5>
  );
}

function Map() {
  return (
    <div className="absolute contents left-[604px] top-[32px]" data-name="Map">
      <div className="absolute bottom-[32px] left-[604px] opacity-50 top-[32px] w-[665px]" data-name="Left Side Image BG">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[226.23%] left-[-81.98%] max-w-none top-[-50.99%] w-[182.23%]" src={imgLeftSideImageBg} />
          </div>
          <div className="absolute bg-[rgba(192,210,220,0.25)] inset-0" />
        </div>
      </div>
      <Group9 />
      <Group8 />
    </div>
  );
}

function Group11() {
  return (
    <div className="font-['Gotham:Book',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.4] not-italic place-items-start relative shrink-0 text-[16px]">
      <p className="[grid-area:1_/_1] ml-0 mt-[25px] relative text-[#77777d] w-[306px]">Add before July 2nd, 2023.</p>
      <p className="[grid-area:1_/_1] ml-0 mt-0 relative text-black w-[306px]">Transportation and flight information</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Group11 />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-[107px]" data-name="Buttons">
      <FoundationButtonPrimaryText text="ADD" additionalClassNames="h-[40px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[118px] items-center relative shrink-0">
      <Frame43 />
      <Buttons4 />
    </div>
  );
}

function RequestUi() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[32px] top-[351px]" data-name="request UI">
      <RequestUiHelper />
      <Frame46 />
      <RequestUiHelper />
    </div>
  );
}

function AirportIcon() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="airport icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="airport icon">
          <circle cx="30" cy="30" fill="var(--fill-0, #4E738A)" id="Ellipse 148" r="30" />
          <path d={svgPaths.p37dbf680} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0005 14.0003">
        <g id="Group 626756">
          <path d={svgPaths.p1defb070} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3ff101f0} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Group3 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-black text-nowrap underline">Copy address</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[14px] text-black text-nowrap underline">3.1 mile</p>
      <Helper />
      <Frame34 />
    </div>
  );
}

function AirportDetails() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start justify-center relative shrink-0" data-name="Airport details">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap">Daniel K. Inouye Intl Airport</p>
      <Frame36 />
    </div>
  );
}

function AirportAddress() {
  return (
    <div className="absolute content-stretch flex gap-[24px] items-center left-[32px] top-[246px]" data-name="Airport address">
      <AirportIcon />
      <AirportDetails />
    </div>
  );
}

function UtilityUi5() {
  return (
    <div className="bg-white h-[478px] relative shadow-[0px_4px_40px_0px_rgba(0,0,0,0.1)] shrink-0 w-[1301px]" data-name="Utility UI">
      <p className="absolute font-['Gotham:Book',sans-serif] leading-[1.4] left-[32px] not-italic text-[20px] text-black top-[32px] w-[531px]">Transportation</p>
      <Map />
      <RequestUi />
      <AirportAddress />
      <p className="absolute font-['Gotham:Book',sans-serif] leading-[1.4] left-[32px] not-italic text-[#77777d] text-[16px] top-[84px] w-[463px]">Take the stress out of travel by ordering transport to take you to and from the airport. There will be extra cost of $XX.00 for this request. Hodie mihi. Cras tibi. Sit transit gloria mundi. Hodie mihi. Cras tibi. Sit transit gloria mundi. Hodie mihi. Cras tibi. Sit transit gloria mundi. Hodie mihi. Cras tibi. Sit transit gloria mundi. Hodie mihi. Cras tibi.</p>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Gotham:Book',sans-serif] leading-[1.4] ml-[29.38px] mt-0 not-italic relative text-[0px] text-[16px] text-black w-[569px]">
        <span>{`Changed your mind? cancel by `}</span>
        <span className="font-['Gotham:Medium',sans-serif]">June 5th 2023</span>
      </p>
      <div className="[grid-area:1_/_1] ml-0 mt-[2px] relative size-[19px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.5" cy="9.5" id="Ellipse 177" r="9" stroke="var(--stroke-0, black)" />
        </svg>
      </div>
      <p className="[grid-area:1_/_1] font-['Gotham:Medium',sans-serif] leading-[1.4] ml-[8px] mt-[4px] not-italic relative text-[12px] text-black text-nowrap">i</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] inset-[22.86%_10.91%_22.86%_2.46%] items-start justify-center leading-[0] pl-0 pr-[66px] py-0">
      <Group6 />
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#77777d] text-[0px] text-[14px] w-[738px]">
        <span>{`If you need to change the dates of your reservation please contact your Ambassador. Please refer to our `}</span>
        <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid text-black underline">Cancellation policy</span>
        <span>{` for any other terms. Nullam quis risus eget urna mollis ornare vel eu leo.`}</span>
      </p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[22.86%_10.91%_22.86%_2.46%]">
      <Frame38 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1302 140">
        <path d="M0 0H1302V140H0V0Z" fill="var(--fill-0, #F8F8F8)" id="Rectangle 3841" />
      </svg>
      <Group2 />
    </div>
  );
}

function Buttons5() {
  return (
    <div className="absolute content-stretch flex inset-[31.43%_2.15%_25.71%_86.79%] items-center justify-center px-[30px] py-[23px]" data-name="buttons">
      <div aria-hidden="true" className="absolute border border-[#c8c8c8] border-solid inset-0 pointer-events-none" />
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#2f2e31] text-[12px] text-nowrap uppercase">Cancel trip</p>
    </div>
  );
}

function UtilityUi6() {
  return (
    <div className="h-[140px] relative shrink-0 w-[1302px]" data-name="Utility UI">
      <Group5 />
      <Buttons5 />
    </div>
  );
}

function UtilityTiles1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0" data-name="Utility Tiles">
      <UtilityTiles />
      <UtilityUi5 />
      <UtilityUi6 />
    </div>
  );
}

function TripDetails1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] items-start left-[66px] top-[841px]" data-name="Trip details">
      <TripDetails />
      <UtilityTiles1 />
    </div>
  );
}

function Logos() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Logos">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Logos">
          <path d={svgPaths.p2dec0c00} fill="var(--fill-0, black)" id="path12" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <circle cx="12" cy="12" fill="var(--fill-0, #4E738A)" id="Ellipse 143" r="12" />
      </svg>
      <p className="absolute font-['Gotham:Medium',sans-serif] leading-[1.2] left-[calc(50%-0.5px)] not-italic text-[12px] text-center text-nowrap text-white top-[calc(50%-6px)] translate-x-[-50%] uppercase">J</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Icon">
      <Icon1 />
    </div>
  );
}

function FoundationIconsAvatar() {
  return (
    <div className="absolute content-stretch flex inset-0 items-start" data-name="Foundation/Icons/Avatar">
      <Icon2 />
    </div>
  );
}

function Icons3() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[12px]" data-name="Icons">
      <FoundationIconsAvatar />
    </div>
  );
}

function FoundationNotificationCallout() {
  return (
    <div className="absolute bg-[#e32b2e] content-stretch flex flex-col h-[15px] items-center justify-center left-[calc(50%+10.5px)] px-[4px] py-0 rounded-[40px] top-[5px] translate-x-[-50%]" data-name="Foundation/Notification callout">
      <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[10px] text-center text-nowrap text-white uppercase">2</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Avatar">
      <Icons3 />
      <FoundationNotificationCallout />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Action">
      <Avatar />
    </div>
  );
}

function Compass() {
  return (
    <div className="absolute inset-[12.5%]" data-name="Compass">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Compass">
            <path d={svgPaths.p1ff05e00} id="Vector" stroke="var(--stroke-0, #7B7E83)" strokeMiterlimit="10" />
            <path d={svgPaths.p3b9ff500} id="Vector_2" stroke="var(--stroke-0, #7B7E83)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Icons4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <Compass />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Label">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#7b7e83] text-[14px] text-nowrap">Explore</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Label">
      <Icons4 />
      <Label />
    </div>
  );
}

function Tab() {
  return (
    <Tab4>
      <line id="tab_2" stroke="var(--stroke-0, #7B7E83)" x1="2" x2="78" y1="-0.5" y2="-0.5" />
    </Tab4>
  );
}

function TabItemGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Tab Item Group">
      <Label1 />
      <Tab />
    </div>
  );
}

function FoundationNavivationTab() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[48px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Foundation/Navivation/Tab">
      <TabItemGroup />
      <div className="absolute bg-[#77777d] inset-0" data-name="Color Overlay" />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="Navigation">
      <FoundationNavivationTab />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute inset-[12.5%_12.51%_15.79%_16.67%]" data-name="icon">
      <div className="absolute inset-[0_-4.41%_-4.36%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.8324 11.9731">
          <g id="icon">
            <circle cx="4.80586" cy="4.80586" id="Ellipse 14" r="4.30586" stroke="var(--stroke-0, white)" />
            <path d={svgPaths.pbea6f80} id="Vector 7" stroke="var(--stroke-0, white)" strokeLinecap="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FoundationIconsSearch() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foundation/Icons/Search">
      <Icon3 />
    </div>
  );
}

function Icons5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <FoundationIconsSearch />
    </div>
  );
}

function Label2() {
  return <Label8>{`Search & Book`}</Label8>;
}

function Label3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Label">
      <Icons5 />
      <Label2 />
    </div>
  );
}

function Tab1() {
  return (
    <Tab4>
      <line id="tab_2" stroke="var(--stroke-0, #7B7E83)" x1="2" x2="126" y1="-0.5" y2="-0.5" />
    </Tab4>
  );
}

function TabItemGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Tab Item Group">
      <Label3 />
      <Tab1 />
    </div>
  );
}

function FoundationNavivationTab1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[48px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Foundation/Navivation/Tab">
      <TabItemGroup1 />
      <div className="absolute bg-[#77777d] inset-0" data-name="Color Overlay" />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="Navigation">
      <FoundationNavivationTab1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.67%_12.5%_20.83%_12.5%]">
      <div className="absolute inset-[-4%_-3.33%_-3.99%_-3.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 10.8">
          <g id="Group 626611">
            <path d={svgPaths.p10ad5100} id="Ellipse 154" stroke="var(--stroke-0, #7B7E83)" strokeLinejoin="round" strokeWidth="0.8" />
            <rect height="8.66667" id="Rectangle 3791" rx="1.50583" stroke="var(--stroke-0, #7B7E83)" strokeLinejoin="round" strokeWidth="0.8" width="12" x="0.4" y="1.73333" />
            <line id="Line 159" stroke="var(--stroke-0, #7B7E83)" strokeLinecap="round" strokeWidth="0.8" x1="4.8" x2="8" y1="4" y2="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FoundationIconsMyTrips() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="Foundation/Icons/My Trips">
      <Group />
    </div>
  );
}

function Icons6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <FoundationIconsMyTrips />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0" data-name="Label">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[14px] text-nowrap text-white">My trips</p>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Label">
      <Icons6 />
      <Label4 />
    </div>
  );
}

function Tab2() {
  return (
    <div className="h-0 relative shrink-0 w-full" data-name="tab">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 1">
          <g id="tab">
            <line id="tab_2" stroke="var(--stroke-0, white)" x1="2" x2="80" y1="0.5" y2="0.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TabItemGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Tab Item Group">
      <Label5 />
      <Tab2 />
    </div>
  );
}

function FoundationNavivationTab2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[48px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Foundation/Navivation/Tab">
      <TabItemGroup2 />
      <div className="absolute bg-black inset-0" data-name="Color Overlay" />
    </div>
  );
}

function Navigation2() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="Navigation">
      <FoundationNavivationTab2 />
    </div>
  );
}

function Destinations() {
  return (
    <div className="absolute inset-[81.25%_17.73%_86%_17.73%]" data-name="Destinations">
      <div className="absolute inset-[-4.65%_-4.84%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3273 11.7603">
          <g id="Destinations">
            <path d={svgPaths.p39a40c00} id="Vector 297" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pb1b5700} id="Vector 297_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p35381100} id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" />
            <circle cx="1.75411" cy="1.75411" id="Ellipse 180" r="1.25411" stroke="var(--stroke-0, black)" transform="matrix(1 0 0 -1 3.90954 9.59147)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FoundationIconsArrowLeft() {
  return (
    <div className="overflow-clip relative size-full" data-name="Foundation/Icons/Arrow Left">
      <Destinations />
    </div>
  );
}

function Icons7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons">
      <div className="absolute flex inset-[0_0_200%_0] items-center justify-center">
        <div className="flex-none rotate-[180deg] scale-y-[-100%] size-[16px]">
          <FoundationIconsArrowLeft />
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return <Label8>Destinations</Label8>;
}

function Label7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Label">
      <Icons7 />
      <Label6 />
    </div>
  );
}

function Tab3() {
  return (
    <Tab4>
      <line id="tab_2" stroke="var(--stroke-0, #7B7E83)" x1="2" x2="111" y1="-0.5" y2="-0.5" />
    </Tab4>
  );
}

function TabItemGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Tab Item Group">
      <Label7 />
      <Tab3 />
    </div>
  );
}

function FoundationNavivationTab3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[48px] items-center justify-center px-[8px] py-0 relative shrink-0" data-name="Foundation/Navivation/Tab">
      <TabItemGroup3 />
      <div className="absolute bg-[#77777d] inset-0" data-name="Color Overlay" />
    </div>
  );
}

function Navigation3() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center relative shrink-0" data-name="Navigation">
      <FoundationNavivationTab3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start justify-center left-1/2 top-[16px] translate-x-[-50%]">
      <Navigation />
      <Navigation1 />
      <Navigation2 />
      <Navigation3 />
    </div>
  );
}

function FoundationNavigationHeaderNav() {
  return (
    <div className="content-stretch flex h-[80px] items-start justify-between pb-0 pt-[16px] px-[70px] relative shrink-0 w-[1440px]" data-name="Foundation/Navigation/Header Nav">
      <Logos />
      <Action />
      <Frame37 />
    </div>
  );
}

function Navigation4() {
  return (
    <div className="content-stretch flex h-[80px] items-start justify-between relative shrink-0 w-[1440px]" data-name="Navigation">
      <FoundationNavigationHeaderNav />
    </div>
  );
}

function Navigation5() {
  return (
    <div className="content-stretch flex h-[80px] items-start justify-between relative shrink-0 w-[1440px]" data-name="Navigation">
      <Navigation4 />
    </div>
  );
}

function PointerCursor() {
  return (
    <div className="absolute left-[1207px] size-[64px] top-[103px]" data-name="Pointer Cursor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Pointer Cursor">
          <path d={svgPaths.p391f700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1551f700} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex font-['Gotham:Medium',sans-serif] gap-[8px] items-center leading-[1.2] not-italic pb-0 pt-[3px] px-0 relative shrink-0 text-[#77777d] text-[12px] text-nowrap uppercase" data-name="text">
      <p className="relative shrink-0">{`Punta mita, mexico `}</p>
      <p className="relative shrink-0">•</p>
      <p className="relative shrink-0">RESIDENCE</p>
    </div>
  );
}

function Icons8() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" data-name="icons" />;
}

function EyebrowWithIcons() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex gap-[8px] h-[17px] items-center ml-[2px] mt-0 relative" data-name="Eyebrow with icons">
      <Text />
      <Icons8 />
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] font-['Canela:Thin',sans-serif] leading-[1.2] ml-0 mt-[31px] not-italic relative text-[0px] text-[72px] text-black w-[600px]">
        <p className="mb-0">Real Del Mar</p>
        <p className="text-[#77777d]">NA Hale 1048</p>
      </div>
      <EyebrowWithIcons />
    </div>
  );
}

function Frame53() {
  return <div className="[grid-area:1_/_1] h-[20px] ml-[2px] mt-[161px] w-[629px]" />;
}

function UpcomingTrip() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative" data-name="Upcoming trip">
      <Group4 />
      <Frame53 />
    </div>
  );
}

function Plus() {
  return <div className="mr-[-16px] shrink-0 size-[16px]" data-name="Plus" />;
}

function Frame50() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[28px] items-center ml-[307px] mt-0 pl-0 pr-[16px] py-0 relative">
      <Plus />
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] mr-[-16px] not-italic relative shrink-0 text-[#4e738a] text-[14px] text-nowrap">View destination</p>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[216px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Gotham:Book',sans-serif] leading-[1.4] ml-0 mt-[4px] not-italic relative text-[14px] text-black w-[431px]">{`Discover all the offerings at this destination `}</p>
      <Frame50 />
    </div>
  );
}

function HeaderType() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Header type">
      <UpcomingTrip />
      <Group7 />
    </div>
  );
}

function SlideshowIndicator() {
  return (
    <div className="[grid-area:1_/_1] h-0 ml-[267px] mt-[405px] relative w-[99.019px]" data-name="Slideshow Indicator">
      <div className="absolute inset-[-0.92px_-0.93%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100.864 1.8449">
          <g id="Slideshow Indicator">
            <path d="M0.922449 0.922449H13.0243" id="Vector 23" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
            <path d="M21.6338 0.922449H33.7357" id="Vector 24" opacity="0.6" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
            <path d="M42.3452 0.922449H54.447" id="Vector 25" opacity="0.6" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
            <path d="M63.0566 0.922449H75.1584" id="Vector 26" opacity="0.6" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
            <path d="M83.7679 0.922449H89.8189" id="Vector 27" opacity="0.6" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
            <path d="M98.4284 0.922449H99.9411" id="Vector 28" opacity="0.6" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="1.8449" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Image">
      <div className="[grid-area:1_/_1] h-[429px] ml-0 mt-0 relative w-[631.536px]" data-name="Left Side Image BG">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLeftSideImageBg1} />
      </div>
      <SlideshowIndicator />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[43px] items-center leading-[0] px-[68px] py-[48px] relative shrink-0 w-[1440px]" data-name="Header">
      <HeaderType />
      <Image />
    </div>
  );
}

function TripDetails2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Trip details">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.2] not-italic opacity-70 relative shrink-0 text-[14px] text-black text-nowrap">Trip details</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Selected line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 1">
            <line id="Selected line" stroke="var(--stroke-0, #54575A)" x2="77" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PlanYourStay() {
  return (
    <Text4 text="Plan your stay" additionalClassNames="items-center">
      <line id="Selected line" opacity="0" stroke="var(--stroke-0, #54575A)" x2="98" y1="-0.5" y2="-0.5" />
    </Text4>
  );
}

function ExtendYourStay() {
  return (
    <Text4 text="Extend your trip" additionalClassNames="items-center">
      <line id="Selected line" opacity="0" stroke="var(--stroke-0, #54575A)" x2="113" y1="-0.5" y2="-0.5" />
    </Text4>
  );
}

function PlanYourTrip() {
  return (
    <Text4 text="For your trip" additionalClassNames="items-start">
      <line id="Selected line" opacity="0" stroke="var(--stroke-0, #54575A)" x2="88" y1="-0.5" y2="-0.5" />
    </Text4>
  );
}

function MemberReviews() {
  return (
    <Text4 text="Member reviews" additionalClassNames="items-start">
      <line id="Selected line" opacity="0" stroke="var(--stroke-0, #54575A)" x2="114" y1="-0.5" y2="-0.5" />
    </Text4>
  );
}

function KnowBeforeYouGo() {
  return (
    <Text4 text="Know before you go" additionalClassNames="items-start">
      <line id="Selected line" opacity="0" stroke="var(--stroke-0, #54575A)" x2="142" y1="-0.5" y2="-0.5" />
    </Text4>
  );
}

function Jumplinks() {
  return (
    <div className="absolute content-stretch flex gap-[30px] h-[29px] items-start justify-center left-[70px] top-[35px]" data-name="Jumplinks">
      <TripDetails2 />
      <PlanYourStay />
      <ExtendYourStay />
      <PlanYourTrip />
      <MemberReviews />
      <KnowBeforeYouGo />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="share">
          <circle cx="20" cy="20" id="avatar" opacity="0.65" r="19.5" stroke="var(--stroke-0, #C8C8C8)" />
          <g id="np_share-button_4939913_000000 1">
            <path clipRule="evenodd" d={svgPaths.p7af6c80} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icons9() {
  return (
    <div className="absolute content-stretch flex h-[50px] items-center left-[calc(91.67%+11px)] top-[17px]" data-name="Icons">
      <Share />
    </div>
  );
}

function NavigationSecondaryLarge() {
  return (
    <div className="bg-white h-[88px] relative shrink-0 w-[1440px]" data-name="Navigation / secondary / Large">
      <div className="absolute h-0 left-[66px] top-[89px] w-[1308px]" data-name="DIV">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1308 1">
            <path d="M0 0.5H1308" id="DIV" opacity="0.5" stroke="var(--stroke-0, #B4B6BA)" />
          </svg>
        </div>
      </div>
      <Jumplinks />
      <Icons9 />
    </div>
  );
}

function TopOfPage() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0" data-name="Top of page">
      <Navigation5 />
      <PointerCursor />
      <Header />
      <NavigationSecondaryLarge />
    </div>
  );
}

export default function TripDetailsAddPassport() {
  return (
    <div className="bg-white relative size-full" data-name="Trip Details_Add Passport">
      <TripDetails1 />
      <TopOfPage />
    </div>
  );
}