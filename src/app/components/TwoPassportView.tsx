import svgPaths from "../../imports/svg-dbu2qe0iqf";
import { useState, useRef, useEffect } from "react";

type PassportData = {
  country: string;
  surname: string;
  givenName: string;
  passportNumber: string;
  issueDate: string;
  expirationDate: string;
};

type TwoPassportViewProps = {
  passports: PassportData[];
  selectedPassportIndex: number;
  onPassportSelect?: (index: number) => void;
  onDeletePassport?: (index: number) => void;
};

function Wrapper9({ children, additionalClassNames = "" }: React.PropsWithChildren<{ additionalClassNames?: string }>) {
  return (
    <div className={`size-[16px] ${additionalClassNames}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        {children}
      </svg>
    </div>
  );
}

function Dropdown() {
  return (
    <Wrapper9 additionalClassNames="relative shrink-0">
      <g id="Foundation/Icons/Chevron">
        <path d={svgPaths.pd48d720} id="Icon/Arrow/Small" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </Wrapper9>
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

function FlexRow() {
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
      <FlexRow />
      <div className="flex flex-col font-['Gotham:Book',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6e6e72] text-[12px] w-full">
        <p className="leading-[1.4]">••••••••</p>
      </div>
    </div>
  );
}

export function TwoPassportView({ passports, selectedPassportIndex, onPassportSelect, onDeletePassport }: TwoPassportViewProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const selectedPassport = passports[selectedPassportIndex] || passports[0];
  
  // Format expiration date for display
  const formatExpirationDate = (date: string) => {
    // Assuming date is in format MM/DD/YYYY
    const parts = date.split('/');
    if (parts.length === 3) {
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const month = monthNames[parseInt(parts[0]) - 1];
      const year = parts[2];
      return `Expires ${month} ${year}`;
    }
    return date;
  };

  const passportLabel = `${selectedPassport.country} Passport — ${formatExpirationDate(selectedPassport.expirationDate)}`;
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  const handlePassportSelect = (index: number) => {
    if (onPassportSelect) {
      onPassportSelect(index);
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-white content-stretch flex flex-col h-full items-center px-[64px] py-0 relative shrink-0 w-[729px]" data-name="Flyout Small">
      {/* Header with close button placeholder */}
      <div className="content-stretch flex flex-col h-[60px] items-end relative shrink-0 w-[729px]" data-name="Flyout Header">
        <div className="bg-white h-[71.761px] relative shrink-0 w-full" data-name="Flyout/Small/Header">
          <div className="flex flex-row items-center justify-end size-full">
            <div className="content-stretch flex items-center justify-end pl-[64px] pr-[20px] py-0 relative size-full">
              {/* Close icon placeholder - handled by parent */}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-stretch flex flex-col gap-[32px] h-[794px] items-start pb-[48px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
        {/* Title */}
        <div className="bg-white content-stretch flex items-start relative shrink-0 w-[600px]" data-name="Flyout/Small/Title">
          <p className="basis-0 font-['Canela:Thin',sans-serif] grow leading-[1.2] min-h-px min-w-px not-italic relative shrink-0 text-[44px] text-black">Passport Details</p>
        </div>

        {/* Passport selector dropdown */}
        <div className="content-stretch flex gap-[32px] items-end relative shrink-0 w-full">
          <div ref={dropdownRef} className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Form">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Desktop, Default, Default">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <p className="font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[12px] text-black text-nowrap">Passports</p>
                  <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full cursor-pointer" data-name="Selected text + icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="text">
                      <p className="[grid-area:1_/_1] font-['Gotham:Book',sans-serif] leading-[1.4] ml-0 mt-0 not-italic relative text-[16px] text-black text-nowrap">{passportLabel}</p>
                    </div>
                    <Dropdown />
                  </div>
                  
                  {/* Dropdown menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-[8px] bg-white border border-[#e6e6e6] rounded-[4px] shadow-lg z-10">
                      {passports.map((passport, index) => {
                        const label = `${passport.country} Passport — ${formatExpirationDate(passport.expirationDate)}`;
                        const isSelected = index === selectedPassportIndex;
                        
                        return (
                          <div
                            key={index}
                            className={`px-[16px] py-[12px] cursor-pointer hover:bg-[#f8f8f8] ${isSelected ? 'bg-[#f0f0f0]' : ''}`}
                            onClick={() => handlePassportSelect(index)}
                          >
                            <p className="font-['Gotham:Book',sans-serif] leading-[1.4] text-[16px] text-black">{label}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
                <div className="h-0 relative shrink-0 w-full">
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 524 1">
                      <line id="Line 1" stroke="var(--stroke-0, #4E738A)" x2="524" y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Gotham:Book',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#e02b00] text-[14px] text-center text-nowrap underline cursor-pointer" onClick={() => onDeletePassport && onDeletePassport(selectedPassportIndex)}>{`Delete `}</p>
        </div>

        {/* Important notice */}
        <div className="content-stretch flex flex-col font-['Gotham:Book',sans-serif] gap-[8px] items-start leading-[1.4] not-italic relative shrink-0 text-[#6e6e72] text-[12px] w-full" data-name="Flex col">
          <p className="relative shrink-0 w-full">{`Your passport information will make traveling even more seamless. `}</p>
          <p className="relative shrink-0 w-full">IMPORTANT: Please verify your passport is valid for at least 6 months from your departure date. Many destinations require this for entry.</p>
        </div>

        {/* Passport details */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Flex col">
          <FlexCol1 text="Passport Country" text1={selectedPassport.country} />
          <FlexCol7Helper />
          <FlexCol1 text="Surname" text1={selectedPassport.surname} />
          <FlexCol7Helper />
          <FlexCol1 text="Given Name" text1={selectedPassport.givenName} />
          <FlexCol7Helper />
          <FlexCol2 />
          <FlexCol7Helper />
          <FlexCol1 text="Issue Date" text1={selectedPassport.issueDate} />
          <FlexCol7Helper />
          <FlexCol1 text="Expiration Date" text1={selectedPassport.expirationDate} />
          <FlexCol7Helper />
        </div>
      </div>
    </div>
  );
}