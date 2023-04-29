export const metadata = {
  title: "CheetahLabs",
  description: "A CheetahLabs Project",
  themeColor: "#222",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
