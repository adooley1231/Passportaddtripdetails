import { TripDetailsPage } from "./components/TripDetailsPage";
import { Toaster } from "sonner";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white">
      <TripDetailsPage />
      <Toaster 
        position="top-center" 
        expand={false} 
        richColors 
        toastOptions={{
          unstyled: true,
          classNames: {
            toast: 'w-screen',
          },
        }}
      />
      <style>{`
        [data-sonner-toaster] {
          width: 100vw !important;
          max-width: 100vw !important;
          left: 0 !important;
          right: 0 !important;
          top: 0 !important;
          transform: none !important;
        }
        [data-sonner-toaster] [data-sonner-toast] {
          width: 100vw !important;
          max-width: 100vw !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
    </div>
  );
}