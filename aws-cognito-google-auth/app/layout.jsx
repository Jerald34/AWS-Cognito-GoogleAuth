import "../app/globals.css"; // Import global styles
import AuthWrapper from "./components/AuthWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthWrapper>{children}</AuthWrapper>
      </body>
    </html>
  );
}
