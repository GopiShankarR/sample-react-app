import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  }

  return (<div>
    <Link to="/"> HOME </Link>
    {!user ? <Link to="/login"> LOGIN </Link> : (
      <Link to="/createpost"> CREATE POST </Link>
    )}
    
    <div>
      {user &&
        (<>
          <p>{user?.displayName} - {auth.currentUser?.email}</p>
          <img src={user?.photoURL || ""} width="100" height="100" />
          <button onClick={signUserOut}> Log Out </button>
          </>
        )}
    </div>
  </div>
  );
}