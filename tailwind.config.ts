import type { Config } from "tailwindcss";

const config: Config = {
  content: [
     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "main-chapter":"64px",
        "chapter":"48px",
        "low-chapter":"40px",
        "font30":"30px",
        "font24":"24px",
        "font22": "22px",
        "font20":"20px",
        "font18": "18px",
        "font16":"16px",
        "font14":"14px",
        "font13":"13px",
        "font12":"12px",
        "font11": "11px",
        "font10":"10px",       
    
      }
    },
  },
  plugins: [],
};
export default config;
