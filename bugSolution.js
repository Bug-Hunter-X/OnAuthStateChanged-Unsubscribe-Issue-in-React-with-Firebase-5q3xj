const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log('User is signed in:', user.uid);
  } else {
    console.log('User is signed out');
  }
});

useEffect(() => {
  // Cleanup function to unsubscribe when the component unmounts
  return () => {
    unsubscribe();
  };
}, []);