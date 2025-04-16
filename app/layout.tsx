import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* 似乎第一次加载/时不会加载，入了子路由才会出现，从子路由回退到主路由才会出现 */}
        <p>Layout from ROOT</p>
        {/* children可以是layout也可以page */}
        {children}
      </body>
    </html>
  );
}
