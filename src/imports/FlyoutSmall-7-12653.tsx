import svgPaths from "./svg-iije1g04tk";
import clsx from "clsx";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">{children}</div>
    </div>
  );
}

function Helper2() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="absolute inset-[-1px_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 273 1">
          <line id="Line 1" stroke="var(--stroke-0, #B4B6BA)" x2="273" y1="0.5" y2="0.5" />
        </svg>
      </div>
    </div>
  );
}
type Text2Props = {
  text: string;
};

function Text2({ text }: Text2Props) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[16px] text-black text-nowrap">{text}</p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap">{text}</p>
    </div>
  );
}

function Helper1() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 586 1" className="block size-full">
      <line id="Line 1" stroke="var(--stroke-0, #B4B6BA)" x2="586" y1="0.5" y2="0.5" />
    </svg>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("relative", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Foundation/Icons/Chevron">
          <path d={svgPaths.pd48d720} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p325a5800} id="Vector 294" stroke="var(--stroke-0, black)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
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
    <div className="content-stretch flex flex-col h-[60px] items-end relative shrink-0 w-full" data-name="Flyout Header">
      <FlyoutSmallHeader />
    </div>
  );
}

function Icons1() {
  return (
    <div className="relative size-[16px]" data-name="Icons">
      <div className="absolute flex inset-0 items-center justify-center">
        <div className="flex-none rotate-[180deg] size-[16px]">
          <Helper additionalClassNames="size-full" />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
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
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Eyebrow />
      <p className="font-['Canela:Thin',sans-serif] h-[53px] leading-[1.2] not-italic relative shrink-0 text-[44px] text-black w-[611px]">Review Passport Details</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame21 />
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#6e6e72] text-[14px] w-[min-content]">Lorem ipsum dolor sit amet consectetur. Diam arcu congue ullamcorper aliquam quam aliquet dis id. Elit euismod aliquet amet felis iaculis aliquam. Risus magna tellus imperdiet amet ante vestibulum nec.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
      <p className="[grid-area:1_/_1] font-['Gotham:Book',sans-serif] leading-[1.4] ml-0 mt-0 not-italic relative text-[16px] text-black text-nowrap">United States of America</p>
    </div>
  );
}

function SelectedTextIcon() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Selected text + icon">
      <Text />
      <Helper additionalClassNames="shrink-0 size-[16px]" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap">Passport Country*</p>
      <SelectedTextIcon />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame14 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]" style={{ "--stroke-0": "rgba(180, 182, 186, 1)" } as React.CSSProperties}>
          <Helper1 />
        </div>
      </div>
    </div>
  );
}

function DesktopDefaultDefault() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Desktop, Default, Default">
      <Frame15 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <DesktopDefaultDefault />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Passport Country*" />
      <Text2 text="United States of America" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <Helper1 />
        </div>
      </div>
    </div>
  );
}

function FoundationFormInputTextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <FoundationFormInputTextField />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Given Name*" />
      <Text2 text="John" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Helper2 />
    </div>
  );
}

function FoundationFormInputTextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame3 />
    </div>
  );
}

function Form2() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <FoundationFormInputTextField1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Surname*" />
      <Text2 text="Snow" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Helper2 />
    </div>
  );
}

function FoundationFormInputTextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame5 />
    </div>
  );
}

function Form3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <FoundationFormInputTextField2 />
    </div>
  );
}

function FlexRow() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="Flex row">
      <Form2 />
      <Form3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Passport Number*" />
      <Text2 text="F0000234" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <Helper1 />
        </div>
      </div>
    </div>
  );
}

function FoundationFormInputTextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame7 />
    </div>
  );
}

function Form4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <FoundationFormInputTextField3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Issue Date*" />
      <Text2 text="08/10/2018" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Helper2 />
    </div>
  );
}

function FoundationFormInputTextField4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Foundation/Form/Input/Text Field">
      <Frame9 />
    </div>
  );
}

function Form5() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <FoundationFormInputTextField4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Expiration Date*" />
      <Text2 text="12/10/2028" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Helper2 />
    </div>
  );
}

function FoundationFormInputTextField5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Foundation/Form/Input/Text Field">
      <Frame11 />
    </div>
  );
}

function Form6() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
      <FoundationFormInputTextField5 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Form5 />
      <Form6 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Nationality*" />
      <Text2 text="United States of America" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <Helper1 />
        </div>
      </div>
    </div>
  );
}

function FoundationFormInputTextField6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame13 />
    </div>
  );
}

function Form7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <FoundationFormInputTextField6 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Text1 text="Place of Birth*" />
      <Text2 text="United States of America" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame16 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <Helper1 />
        </div>
      </div>
    </div>
  );
}

function FoundationFormInputTextField7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0 w-full" data-name="Foundation/Form/Input/Text Field">
      <Frame17 />
    </div>
  );
}

function Form8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form">
      <FoundationFormInputTextField7 />
    </div>
  );
}

function FlexCol() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Flex col">
      <Form />
      <Form1 />
      <FlexRow />
      <Form4 />
      <Frame22 />
      <Form7 />
      <Form8 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <FlexCol />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[32px] relative w-full">
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[794px] items-start pb-[48px] pt-0 px-0 relative shrink-0 w-[650px]" data-name="Content">
      <Frame19 />
      <Container />
    </div>
  );
}

function FoundationButtonPrimary() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Foundation/Button/Primary">
      <div aria-hidden="true" className="absolute border border-[#b4b6ba] border-solid inset-0 pointer-events-none" />
      <Wrapper>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-black text-nowrap uppercase">Cancel</p>
      </Wrapper>
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
      <Wrapper>
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase">Save</p>
      </Wrapper>
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
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Flyout Small">
      <FlyoutHeader />
      <Content />
      <PanelStickyCta />
    </div>
  );
}