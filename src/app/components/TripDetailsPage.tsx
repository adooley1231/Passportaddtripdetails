import { useState, useEffect } from "react";
import TripDetailsAddPassport from "../../imports/TripDetailsAddPassport";
import { PassportDrawer } from "./PassportDrawer";

export function TripDetailsPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Find and attach click handler to the "Manage Passports" button
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if clicked element or its parent contains the "Manage Passports" text
      const button = target.closest('[data-name="Buttons"]');
      if (button && button.textContent?.includes("Manage Passports")) {
        e.preventDefault();
        setIsDrawerOpen(true);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <TripDetailsAddPassport />
      <PassportDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
      />
    </>
  );
}
