import type { Metadata } from "next";
import { AuthProvider } from "@/auth/AuthContext";

export const metadata: Metadata = {
  title: "Undici 🤌",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
