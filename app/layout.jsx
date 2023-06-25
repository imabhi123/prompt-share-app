import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import "@/styles/globals.css";

export const metadata = {
  title: "Prompts",
  description: "share ai prompts here",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradiant" />
        </div>
        <Nav />
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
