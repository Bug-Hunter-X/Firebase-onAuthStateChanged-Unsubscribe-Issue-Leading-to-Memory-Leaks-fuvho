import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from 'firebase/auth'; // Ensure this import is correct

const auth = getAuth(); // Initialize Firebase authentication instance

function MyComponent() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user ? <p>User is signed in: {user.uid}</p> : <p>User is signed out</p>}
    </div>
  );
}

export default MyComponent; 