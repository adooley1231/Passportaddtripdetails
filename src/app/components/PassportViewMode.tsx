import Frame627939 from "../../imports/Frame627939";
import { useEffect, useRef, ReactNode } from "react";
import { PassportDrawerLayout } from "./PassportDrawerLayout";

export function PassportViewMode() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Render the original component into a temporary container
    const tempDiv = document.createElement("div");
    document.body.appendChild(tempDiv);
    
    // Import and render Frame627939 to extract its parts
    import("react-dom/client").then(({ createRoot }) => {
      const root = createRoot(tempDiv);
      root.render(<Frame627939 />);

      // Wait for render
      setTimeout(() => {
        // Extract the left panel (Content)
        const leftPanel = tempDiv.querySelector('[data-name="Content"]');
        if (leftPanel && leftPanelRef.current) {
          leftPanelRef.current.appendChild(leftPanel.cloneNode(true));
        }

        // Extract header (Flyout Header)
        const header = tempDiv.querySelector('[data-name="Flyout Header"]');
        if (header && headerRef.current) {
          headerRef.current.appendChild(header.cloneNode(true));
        }

        // Extract content (Content within Flyout Small)
        const content = tempDiv.querySelector('[data-name="Flyout Small"] > [data-name="Content"]');
        if (content && contentRef.current) {
          contentRef.current.appendChild(content.cloneNode(true));
        }

        // Extract buttons (Panel/Sticky-CTA)
        const buttons = tempDiv.querySelector('[data-name="Panel/Sticky-CTA"]');
        if (buttons && buttonsRef.current) {
          buttonsRef.current.appendChild(buttons.cloneNode(true));
        }

        // Clean up
        root.unmount();
        document.body.removeChild(tempDiv);
      }, 100);
    });
  }, []);

  return (
    <div ref={containerRef} className="size-full">
      <PassportDrawerLayout
        leftPanel={<div ref={leftPanelRef} />}
        rightPanelHeader={<div ref={headerRef} />}
        rightPanelContent={<div ref={contentRef} />}
        rightPanelButtons={<div ref={buttonsRef} />}
      />
    </div>
  );
}
