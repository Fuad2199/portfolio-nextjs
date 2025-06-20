import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import React from "react";

interface RoutLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RoutLayoutProps) => {
  return <div>
    <Header/>
    <div className="min-h-screen mt-24">
    {children}
    </div>
    <Footer/>
    </div>;
};

export default RootLayout;
