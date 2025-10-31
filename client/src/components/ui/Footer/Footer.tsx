// components/Footer/Footer.tsx
import React from 'react';

export interface FooterLink {
  url: string;
  label: string;
}

export interface FooterProps {
  text: string;
  links: FooterLink[];
}

const Footer: React.FC<FooterProps> = ({ text, links }) => {
  return (
    <footer>
      <div>
        <p>{text}</p>
        <div>
          {links.map(link => (
            <a key={link.url} href={link.url}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
