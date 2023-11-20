// src/components/ProfileStats.js
import React from 'react';
import styled from 'styled-components';

const StatsWrapper = styled.div`
  /* Add styles for the stats wrapper */
`;

const StatItem = styled.div`
  /* Add styles for each stat item */
`;

const ProfileStats = ({ posts, followers, following }) => {
  return (
    <StatsWrapper>
      <StatItem>
        <strong>{posts}</strong>
        <span>Posts</span>
      </StatItem>
      <StatItem>
        <strong>{followers}</strong>
        <span>Followers</span>
      </StatItem>
      <StatItem>
        <strong>{following}</strong>
        <span>Following</span>
      </StatItem>
      {/* Add more stat items as needed */}
    </StatsWrapper>
  );
};

export default ProfileStats;
