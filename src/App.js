import "./App.css";
import Profile from "./components/Profile/Profile";

import RegistrationForm from "./components/RegistrationForm";
import UserGallery from "./components/UserGallery/UserGallery";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <RegistrationForm />
      <UserGallery />
    </div>
  );
}

export default App;
