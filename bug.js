const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/user-properties
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// unsubscribe from onAuthStateChanged listener when component unmounts to prevent memory leak
useEffect(() => {
  return () => {
    unsubscribe();
  };
}, []);