import type {Metadata} from 'next';
import { Oswald, Roboto } from 'next/font/google';
import './globals.css';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'JNS Fitness Club | Best Gym in Rajarhat, Kolkata',
  description: 'Build Strength. Build Confidence. Join the biggest gym in Rajarhat, Kolkata. Modern equipment, affordable pricing, and expert trainers.',
  keywords: ['Gym in Rajarhat Kolkata', 'Best gym in Bhatenda Kolkata', 'Fitness Club Rajarhat', 'Weight loss program Kolkata'],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${oswald.variable} ${roboto.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-[#0F0F0F] text-white font-roboto">
        {children}
      </body>
    </html>
  );
}
