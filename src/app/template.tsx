import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import React from "react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[--whitish]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default template;
