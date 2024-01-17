import type { Metadata } from 'next';
import './globals.css';

/**
 * Components
 */
import LeftNav from '@/components/LeftNav';
import { Provider } from '@/utils/Provider';

export const metadata: Metadata = {
  title: 'Clay Music Donations',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="w-full max-w-[1250px] mx-auto mt-9">
            <div className="flex">
              <LeftNav />
              {children}
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
