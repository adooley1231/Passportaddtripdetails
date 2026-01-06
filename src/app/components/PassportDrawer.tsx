import { X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Frame627939, { PanelStickyCta, TRAVELERS, TravelerData, PassportData } from "../../imports/Frame627939";
import PassportModal, { PanelStickyCta as PassportModalCta } from "../../imports/PassportModal";
import PassportReview from "../../imports/FlyoutSmall-7-12653";
import { toast } from "sonner";
import { PassportToast } from "./PassportToast";
import { DeletePassportModal } from "./DeletePassportModal";
import { TwoPassportView } from "./TwoPassportView";

interface PassportDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PassportDrawer({ isOpen, onClose }: PassportDrawerProps) {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [selectedTravelerId, setSelectedTravelerId] = useState("joyce");
  const [isPassportUploaded, setIsPassportUploaded] = useState(false);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isAddingPassport, setIsAddingPassport] = useState(false); // New state for "Add Another" flow
  const [selectedPassportIndex, setSelectedPassportIndex] = useState(0); // Track which passport is selected in TwoPassportView
  const [travelers, setTravelers] = useState<Record<string, TravelerData>>(TRAVELERS);
  const [newTravelerCounter, setNewTravelerCounter] = useState(1);
  const contentRef = useRef<HTMLDivElement>(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Reset to view mode when drawer closes
  useEffect(() => {
    if (!isOpen) {
      setIsUpdateMode(false);
      setSelectedTravelerId("joyce");
      setIsPassportUploaded(false);
      setIsReviewMode(false);
      setShowDeleteModal(false);
      setIsAddMode(false);
      setTravelers(TRAVELERS);
      setNewTravelerCounter(1);
      setIsAddingPassport(false); // Reset "Add Another" flow
      setSelectedPassportIndex(0); // Reset passport index
    }
  }, [isOpen]);

  // Listen for UPDATE and BACK button clicks
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const text = target.textContent?.trim().toLowerCase();
      
      // Check if we clicked on ADD NEW button
      if (text === "add new" && target.closest('[data-name="Foundation/Button/Primary"]') && !isUpdateMode) {
        e.preventDefault();
        e.stopPropagation();
        
        // Create a new traveler
        const newId = `new-${newTravelerCounter}`;
        const newTraveler: TravelerData = {
          id: newId,
          name: "New Traveler",
          type: "Secondary",
          passports: [], // Empty passports array for new traveler
        };
        
        // Add to travelers list
        setTravelers(prev => ({ ...prev, [newId]: newTraveler }));
        setNewTravelerCounter(prev => prev + 1);
        
        // Select the new traveler and go to update mode
        setSelectedTravelerId(newId);
        setIsAddMode(true);
        setIsUpdateMode(true);
        return;
      }
      
      // Check if we clicked on NEXT button (in upload mode)
      if (text === "next" && target.closest('[data-name="Foundation/Button/Primary"]') && isUpdateMode && !isReviewMode) {
        e.preventDefault();
        e.stopPropagation();
        
        // If we're adding a new traveler OR adding a passport, populate mock passport data
        if ((isAddMode && selectedTravelerId.startsWith('new-')) || isAddingPassport) {
          const mockPassportData: PassportData = {
            country: "United States",
            surname: "Anderson",
            givenName: "Taylor",
            passportNumber: "534628192",
            issueDate: "01/15/2021",
            expirationDate: "01/14/2031",
          };
          
          setTravelers(prev => {
            const traveler = prev[selectedTravelerId];
            
            // If adding a new traveler (no passports yet), update the name
            if (isAddMode && selectedTravelerId.startsWith('new-')) {
              return {
                ...prev,
                [selectedTravelerId]: {
                  ...traveler,
                  passports: [mockPassportData],
                  name: `${mockPassportData.givenName} ${mockPassportData.surname}`,
                },
              };
            }
            
            // If adding another passport to existing traveler
            if (isAddingPassport) {
              return {
                ...prev,
                [selectedTravelerId]: {
                  ...traveler,
                  passports: [...traveler.passports, mockPassportData],
                },
              };
            }
            
            return prev;
          });
        }
        
        setIsReviewMode(true);
        return;
      }
      
      // Check if we clicked on SAVE button (in review mode)
      if (text === "save" && target.closest('[data-name="Foundation/Button/Primary"]') && isReviewMode) {
        e.preventDefault();
        e.stopPropagation();
        
        // If we're adding a new traveler, finalize the add mode
        if (isAddMode && selectedTravelerId.startsWith('new-')) {
          setIsAddMode(false);
        }
        
        // If we're adding another passport, finalize that mode
        if (isAddingPassport) {
          setIsAddingPassport(false);
        }
        
        // Save and return to view mode
        setIsReviewMode(false);
        setIsUpdateMode(false);
        setIsPassportUploaded(false);
        // Show custom toast notification
        toast.custom((t) => <PassportToast onClose={() => toast.dismiss(t)} />, {
          duration: 5000,
          position: "top-center",
        });
        return;
      }
      
      // Check if we clicked on upload button
      const uploadButton = target.closest('[data-name="uploadButton"]');
      if (uploadButton && isUpdateMode && !isReviewMode) {
        e.preventDefault();
        e.stopPropagation();
        setIsPassportUploaded(true);
        return;
      }
      
      // Check if we clicked on a traveler card
      const travelerCard = target.closest('[data-name="Traveler Card"]');
      if (travelerCard) {
        const travelerId = travelerCard.getAttribute('data-traveler-id');
        if (travelerId) {
          // If we're in update/add mode and selecting a different traveler, exit those modes
          if (isUpdateMode || isAddMode) {
            // If we're adding a new traveler and they select someone else without saving, remove the new traveler
            if (isAddMode && selectedTravelerId.startsWith('new-') && travelerId !== selectedTravelerId) {
              setTravelers(prev => {
                const newTravelers = { ...prev };
                delete newTravelers[selectedTravelerId];
                return newTravelers;
              });
              setIsAddMode(false);
            }
            setIsUpdateMode(false);
            setIsReviewMode(false);
            setIsPassportUploaded(false);
          }
          
          setSelectedTravelerId(travelerId);
          return;
        }
        
        // Fallback to text matching for existing travelers
        const cardText = travelerCard.textContent || "";
        if (cardText.includes("Joyce Williams")) {
          // Exit modes if switching travelers
          if (isUpdateMode || isAddMode) {
            if (isAddMode && selectedTravelerId.startsWith('new-')) {
              setTravelers(prev => {
                const newTravelers = { ...prev };
                delete newTravelers[selectedTravelerId];
                return newTravelers;
              });
              setIsAddMode(false);
            }
            setIsUpdateMode(false);
            setIsReviewMode(false);
            setIsPassportUploaded(false);
          }
          setSelectedTravelerId("joyce");
          return;
        } else if (cardText.includes("Brian Williams")) {
          // Exit modes if switching travelers
          if (isUpdateMode || isAddMode) {
            if (isAddMode && selectedTravelerId.startsWith('new-')) {
              setTravelers(prev => {
                const newTravelers = { ...prev };
                delete newTravelers[selectedTravelerId];
                return newTravelers;
              });
              setIsAddMode(false);
            }
            setIsUpdateMode(false);
            setIsReviewMode(false);
            setIsPassportUploaded(false);
          }
          setSelectedTravelerId("brian");
          return;
        }
      }
      
      // Check if we clicked on UPDATE button
      if (text === "update" && target.closest('[data-name="Foundation/Button/Primary"]')) {
        e.preventDefault();
        e.stopPropagation();
        setIsUpdateMode(true);
        return;
      }
      
      // Check if we clicked on ADD ANOTHER button
      if (text === "add another" && target.closest('[data-name="Foundation/Button/Primary"]')) {
        e.preventDefault();
        e.stopPropagation();
        setIsAddingPassport(true);
        setIsUpdateMode(true);
        return;
      }
      
      // Check if we clicked on CANCEL button (in upload or review mode)
      if (text === "cancel" && target.closest('[data-name="Foundation/Button/Primary"]')) {
        e.preventDefault();
        e.stopPropagation();
        if (isReviewMode) {
          setIsReviewMode(false);
        } else {
          // If we're adding a new traveler and they cancel, remove it from the list
          if (isAddMode && selectedTravelerId.startsWith('new-')) {
            setTravelers(prev => {
              const newTravelers = { ...prev };
              delete newTravelers[selectedTravelerId];
              return newTravelers;
            });
            setSelectedTravelerId("joyce");
            setIsAddMode(false);
          }
          setIsUpdateMode(false);
          setIsPassportUploaded(false);
        }
        return;
      }
      
      // Check if we clicked on BACK button or back text
      if ((text === "back" || text?.includes("back")) && !isUpdateMode) {
        return;
      }
      
      // Check for back button in review mode
      const eyebrow = target.closest('[data-name="Eyebrow"]');
      if (eyebrow && isReviewMode) {
        e.preventDefault();
        e.stopPropagation();
        setIsReviewMode(false);
        return;
      }
      
      // Check for back button in update mode (not review)
      if (eyebrow && isUpdateMode && !isReviewMode) {
        e.preventDefault();
        e.stopPropagation();
        setIsUpdateMode(false);
        setIsPassportUploaded(false);
      }
      
      // Check if we clicked on DELETE button
      if (text === "delete" && target.closest('[data-name="Foundation/Button/Primary"]')) {
        e.preventDefault();
        e.stopPropagation();
        setShowDeleteModal(true);
        return;
      }
      
      // Check if we clicked on the "Delete" link (text with underline)
      if (text === "delete" && !isUpdateMode) {
        e.preventDefault();
        e.stopPropagation();
        setShowDeleteModal(true);
        return;
      }
    };

    const content = contentRef.current;
    content.addEventListener("click", handleClick, true);
    return () => content.removeEventListener("click", handleClick, true);
  }, [isOpen, isUpdateMode, isReviewMode, newTravelerCounter, isAddMode, selectedTravelerId, travelers]);

  // Apply selected state to traveler cards
  useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const travelerCards = contentRef.current.querySelectorAll('[data-name="Traveler Card"]');
    
    travelerCards.forEach((card) => {
      const cardElement = card as HTMLElement;
      const travelerId = cardElement.getAttribute('data-traveler-id');
      
      // Remove selected state from all cards
      cardElement.removeAttribute('data-selected');
      
      // Add selected state to the matching card
      if (travelerId === selectedTravelerId) {
        cardElement.setAttribute('data-selected', 'true');
      }
    });
  }, [isOpen, selectedTravelerId, isUpdateMode, isReviewMode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(37,37,37,0.7)]"
        onClick={onClose}
      />
      
      {/* Drawer Panel - Right aligned with two columns */}
      <div 
        ref={contentRef}
        className={`absolute right-0 top-0 h-full w-[1188px] shadow-xl overflow-hidden passport-drawer flex flex-col ${isUpdateMode ? 'update-mode' : ''} ${isReviewMode ? 'review-mode' : ''}`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 rounded-full transition-colors bg-white"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        
        {/* Two column content from Figma */}
        <div className="flex-1 overflow-hidden flex">
          <div className="flex-1">
            {isUpdateMode ? (
              <PassportModal isPassportUploaded={isPassportUploaded} isReviewMode={isReviewMode} travelers={travelers} />
            ) : (
              <Frame627939 selectedTravelerId={selectedTravelerId} travelers={travelers} />
            )}
          </div>
        </div>
        
        {/* Sticky buttons aligned with right column only */}
        {!isUpdateMode && (
          <div className="absolute bottom-0 right-0 w-[729px] z-10">
            <PanelStickyCta />
          </div>
        )}
        
        {/* Sticky buttons aligned with right column only in update mode */}
        {isUpdateMode && (
          <div className="absolute bottom-0 right-0 w-[729px] z-10">
            <PassportModalCta isReviewMode={isReviewMode} />
          </div>
        )}
      </div>
      
      <style>{`
        .passport-drawer [data-name="Flyout Small"] {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow-y: auto;
          overflow-x: hidden;
          /* Hide scrollbar */
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
          padding-bottom: 124px; /* Space for sticky footer */
          padding-top: 32px; /* Space for close button */
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .passport-drawer [data-name="Flyout Small"]::-webkit-scrollbar {
          display: none;
        }
        
        .passport-drawer [data-name="Flyout Header"] {
          flex-shrink: 0;
          background: white;
        }
        
        /* Hide the close icon from Figma components since we have our own */
        .passport-drawer [data-name="Flyout/Small/Header"] #Icon {
          display: none;
        }
        
        /* Hide back button on Update Passport screen (not review) */
        .passport-drawer.update-mode:not(.review-mode) [data-name="Eyebrow"] {
          display: none;
        }
        
        .passport-drawer [data-name="Panel/Sticky-CTA"] {
          flex-shrink: 0;
          position: sticky;
          bottom: 0;
          z-index: 10;
        }
        
        /* Ensure content within the scrollable area fits properly */
        .passport-drawer [data-name="Flyout Small"] * {
          max-width: 100%;
        }
        
        /* Traveler card styling - remove default selection from all cards */
        .passport-drawer [data-name="Traveler Card"] {
          cursor: pointer !important;
          position: relative !important;
          background: transparent !important;
        }
        
        /* Remove default border styling */
        .passport-drawer [data-name="Traveler Card"] > div[aria-hidden="true"] {
          border: none !important;
        }
        
        /* Normalize padding for all traveler cards */
        .passport-drawer [data-name="Traveler Card"][data-traveler-id="joyce"] > div > div,
        .passport-drawer [data-name="Traveler Card"][data-traveler-id="brian"] > div > div {
          padding: 8px 16px !important;
        }
        
        /* Normalize padding for new travelers */
        .passport-drawer [data-name="Traveler Card"] > div > div {
          padding: 8px 16px !important;
        }
        
        /* Apply selection background to selected card */
        .passport-drawer [data-name="Traveler Card"][data-selected="true"] {
          background: rgba(78, 115, 138, 0.12) !important;
        }
        
        /* Add left border to selected card */
        .passport-drawer [data-name="Traveler Card"][data-selected="true"] > div[aria-hidden="true"] {
          border: none !important;
          border-left: 6px solid #4e738a !important;
        }
      `}</style>
      
      {/* Delete Passport Modal */}
      {showDeleteModal && (
        <DeletePassportModal
          isOpen={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          onUpdate={() => {
            // For primary traveler: "Keep & Update" button - go to update mode
            setShowDeleteModal(false);
            setIsUpdateMode(true);
          }}
          onConfirm={() => {
            const selectedTraveler = travelers[selectedTravelerId];
            
            // If it's a new traveler, remove them from the list
            if (selectedTravelerId.startsWith('new-')) {
              setTravelers(prev => {
                const newTravelers = { ...prev };
                delete newTravelers[selectedTravelerId];
                return newTravelers;
              });
              // Select the primary traveler
              setSelectedTravelerId("joyce");
            }
            
            // Remove passport and show toast
            setShowDeleteModal(false);
            toast.custom((t) => (
              <div className="bg-[#4e738a] flex items-center justify-between px-[70px] py-[10px] w-full rounded-none shadow-lg">
                <div className="flex flex-col gap-[4px] leading-[1.4] text-white">
                  <p className="font-['Gotham:Medium',sans-serif] text-[12px] uppercase tracking-wide">
                    PASSPORT REMOVED
                  </p>
                  <p className="font-['Gotham:Book',sans-serif] text-[12px]">
                    The passport has been successfully removed
                  </p>
                </div>
                <button
                  onClick={() => toast.dismiss(t)}
                  className="shrink-0 ml-[20px] p-1 hover:bg-white/10 rounded transition-colors"
                  aria-label="Close notification"
                >
                  <X className="size-[20px] text-white" strokeWidth={2} />
                </button>
              </div>
            ), {
              duration: 5000,
              position: "top-center",
            });
          }}
          travelerName={travelers[selectedTravelerId]?.name || ""}
          isPrimary={travelers[selectedTravelerId]?.type === "Primary"}
        />
      )}
    </div>
  );
}