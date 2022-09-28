import Chat from "./components/Chat";
import SignIn from "./components/SignIn";
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from './firebase'

function App() {
  const [user]=useAuthState(auth)
  return (
    <div className="App">
      <div className="backgroundImg"></div>
      {user? <Chat/> : <SignIn/> }
    </div>
  );
}

export default App;
