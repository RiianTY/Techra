import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar className="relative z-10" />
      <main className="relative z-0 container mx-auto max-w-7xl px-8 flex-grow bg-background">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-background">
        <span className="text-default-600">
          © {new Date().getFullYear()} Rivara. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
