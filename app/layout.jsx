import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Vyas Consultancy & Co. | CA Deepak Vyas',
  description: 'Chartered Accountants & Financial Consultants in Indore.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-[#fdfbf7] text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}