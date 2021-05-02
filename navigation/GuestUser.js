import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {auth} from '../firebase';
import {Authentication} from './Authentication';
import AuthenticationBranch from './AuthenticationNavigator';
import MainStack from './MainNavigator';

const GuestUser = () => {
  const {user, setUser} = useContext(Authentication);

  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onAuthStateChanged);
    return unsubscribe;
  }, []);
 
  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthenticationBranch />}
    </NavigationContainer>
  );
};

export default GuestUser;