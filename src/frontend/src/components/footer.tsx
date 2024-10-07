import React from 'react';
import { Footer as NhsFooter } from "nhsuk-react-components";

interface FooterProps {
  buildDate: string;
}

const Footer: React.FC<FooterProps> = ({ buildDate }) => {
  return (
    <NhsFooter>
      <p className="nhsuk-body-s" data-testid='build-details'>{buildDate}</p>
    </NhsFooter>
  );
};

export default Footer;
