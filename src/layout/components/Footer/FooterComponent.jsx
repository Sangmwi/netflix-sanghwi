import { Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";
import logo from "@/assets/notflix.svg";
import "./FooterComponent.style.css";


const FooterComponent = () => {
  return (
    
    <Footer container>
      <div className="w-full text-center bg-black py-5 px-3">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <FooterBrand
            href="/"
            src={logo}
            alt="Notflix Logo"
            name="Notflix"
          />
          <FooterLinkGroup>
            <FooterLink href="/">About</FooterLink>
            <FooterLink href="/">Privacy Policy</FooterLink>
            <FooterLink href="/">Licensing</FooterLink>
            <FooterLink href="/">Contact</FooterLink>
          </FooterLinkGroup>
        </div>
        <FooterDivider />
        <FooterCopyright href="/" by="Notflix" year={2025} />
      </div>
    </Footer>
   
  );
}

export default FooterComponent;
