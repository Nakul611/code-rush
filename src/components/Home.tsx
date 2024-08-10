import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../utils/firebase";
import { Topbar } from "./Navbar";
import { Card } from "./Card";

const Home = () => {
    const [user, setUser] = useState({
        loading: true,
        email: null,
    });

    const auth = getAuth(app);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser && firebaseUser.email) {
                setUser({
                    loading: false,
                    email: firebaseUser.email,
                });
            } else {
                navigate('/'); // Redirect to sign-up page if user is not logged in
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [auth, navigate]);

    async function onSignOut() {
        try {
            await signOut(auth);
            console.log('User signed out');
            navigate('/'); // Redirect to sign-up page after sign-out
        } catch (error) {
            console.error("Error during sign-out:", error.code, error.message);
        }
    }

    if (user.loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col">
            <Topbar />
              <div>Welcome,<span className="text-xl"> {user.email} </span></div>
              <button onClick={onSignOut} className="bg-red-700 px-1 text-white border-black border-2 shadow-xl">Logout</button>
          <div className="flex ml-64 mt-4">
          <Card>Hello There</Card>
          </div>
        </div>
    );
}

export default Home;
