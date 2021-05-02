import React from 'react';
import {AuthenticationProvider} from './Authentication';
import GuestUser from './GuestUser';

const Navigation = () => {
  return (
    <AuthenticationProvider>
      <GuestUser />
    </AuthenticationProvider>
  );
}

export default Navigation;