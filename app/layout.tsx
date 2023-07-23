import "./globals.css";
import Navbar from "@/app/(shared)/Navbar";
import Footer from "@/app/(shared)/Footer";


export const metadata = {
  title: "Blog AI App",
  description: "Blog built in Next JS that uses AI ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
