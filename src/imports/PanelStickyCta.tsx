function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-row items-center justify-center size-full">
      <div className="content-stretch flex items-center justify-center pb-0 pt-px px-[24px] relative size-full">{children}</div>
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
        <p className="font-['Gotham:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase">Next</p>
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

export default function PanelStickyCta() {
  return (
    <div className="bg-white relative shadow-[10px_4px_34px_0px_rgba(0,0,0,0.05)] size-full" data-name="Panel/Sticky-CTA">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-start justify-center px-[68px] py-[32px] relative size-full">
          <TravelerForm />
          <Buttons1 />
        </div>
      </div>
    </div>
  );
}