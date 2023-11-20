// src/components/ProfileHeader.js
import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  // Add styles for header
`;

const ProfileHeader = ({ name, username, avatar }) => {
  return (
    <Header>
      {/* Display profile header content */}
      <img src={avatar} alt="Profile Avatar" />
      <h1>{name}</h1>
      <p>@{username}</p>
    </Header>
  );
};

export default ProfileHeader;
