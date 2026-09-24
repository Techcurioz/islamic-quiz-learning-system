import './globals.css';
import { Navbar } from '@/components/nav';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Islamic Quiz & Knowledge Assessment',
  description: 'A modern Islamic quiz and learning system for Qur’an, Hadith, Seerah, and Fiqh.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <div className="min-h-screen">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
