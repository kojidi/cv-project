import GeneralInformation from "./components/GeneralInformation";
import EducationalInformation from "./components/EducationalInformation";
import './styles/App.css';

function App() {
  return (
    <div className="main-contianer">
        <GeneralInformation />
        <EducationalInformation />
    </div>
  );
}

export default App;
