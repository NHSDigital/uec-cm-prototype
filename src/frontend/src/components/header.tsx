import React from 'react';
import { Header as NhsHeader } from "nhsuk-react-components";

const Header: React.FC = () => {
  return (
    <NhsHeader transactional>
      <NhsHeader.Container>
        <NhsHeader.Logo href="/" alt='Home Page' />
        <NhsHeader.ServiceName href="/"> Capacity management </NhsHeader.ServiceName>
      </NhsHeader.Container>
    </NhsHeader>
  );
}

export default Header;
