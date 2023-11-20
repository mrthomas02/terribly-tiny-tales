// src/components/ProfileBio.js
import React from 'react';
import styled from 'styled-components';

const BioWrapper = styled.div`
  /* Add styles for the bio wrapper */
`;

const ProfileBio = ({ bio }) => {
  return (
    <BioWrapper>
      <h2>Bio</h2>
      <p>{bio}</p>
    </BioWrapper>
  );
};

export default ProfileBio;
