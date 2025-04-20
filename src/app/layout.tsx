import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mini Storefront',
  description: 'A simple storefront using Fake Store API',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
