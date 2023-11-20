import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ProfileStats from './components/ProfileStats';
import ProfileBio from './components/ProfileBio';

const profileData = {
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'URL_TO_AVATAR_IMAGE',
  // Other profile data
};

function App() {
  return (
    <div>
      <ProfileHeader {...profileData} />
      <ProfileStats {...profileData} />
      <ProfileBio {...profileData} />
      {/* Other profile components */}
    </div>
  );
}

export default App;
