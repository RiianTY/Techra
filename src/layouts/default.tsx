import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 bg-background">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3 bg-background">
        <span className="text-default-600">
          © {new Date().getFullYear()} Techra. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
