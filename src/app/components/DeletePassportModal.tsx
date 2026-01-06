import { X } from "lucide-react";

interface DeletePassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  onUpdate?: () => void;
  travelerName: string;
  isPrimary: boolean;
}

export function DeletePassportModal({
  isOpen,
  onClose,
  onConfirm,
  onUpdate,
  travelerName,
  isPrimary,
}: DeletePassportModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[rgba(37,37,37,0.7)]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white shadow-xl max-w-[520px] w-full mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8">
          {isPrimary ? (
            <>
              {/* Primary Traveler - Encourage Update */}
              <div className="mb-6">
                <h2 className="font-['Gotham:Medium',sans-serif] text-[24px] mb-3 text-[#252525]">
                  Update passport instead?
                </h2>
                <p className="font-['Gotham:Book',sans-serif] text-[16px] text-[#252525] leading-[1.5] mb-4">
                  As the primary traveler, we recommend keeping your passport information up to date rather than removing it. This helps ensure smooth travel arrangements.
                </p>
                <p className="font-['Gotham:Book',sans-serif] text-[14px] text-[#666] leading-[1.5]">
                  Would you like to update {travelerName}'s passport information instead?
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={onConfirm}
                  className="font-['Gotham:Medium',sans-serif] text-[14px] px-6 py-3 text-[#4e738a] hover:bg-gray-50 transition-colors uppercase tracking-wide"
                >
                  Remove Anyway
                </button>
                <button
                  onClick={onUpdate}
                  className="font-['Gotham:Medium',sans-serif] text-[14px] px-6 py-3 bg-[#4e738a] text-white hover:bg-[#3d5c6e] transition-colors uppercase tracking-wide"
                >
                  Keep & Update
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Secondary Traveler - Confirm Delete */}
              <div className="mb-6">
                <h2 className="font-['Canela',serif] text-[24px] mb-3 text-[#252525]">
                  Remove passport?
                </h2>
                <p className="font-['Gotham:Book',sans-serif] text-[16px] text-[#252525] leading-[1.5] mb-4">
                  Are you sure you want to remove the passport information for {travelerName}?
                </p>
                <p className="font-['Gotham:Book',sans-serif] text-[14px] text-[#666] leading-[1.5]">
                  You can always add it back later if needed.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end">
                <button
                  onClick={onClose}
                  className="font-['Gotham:Medium',sans-serif] text-[12px] px-6 py-3 bg-white text-black border border-black border-[0.5px] hover:bg-gray-50 transition-colors uppercase tracking-wide"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="font-['Gotham:Medium',sans-serif] text-[12px] px-6 py-3 bg-black text-white hover:bg-[#1a1a1a] transition-colors uppercase tracking-wide"
                >
                  Remove Passport
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}