import GeneralInformation from "./components/GeneralInformation";
import EducationalForm from "./components/EducationalForm";
import JobsForm from "./components/JobsForm";
import './styles/App.css';

function App() {
  return (
    <div className="main-contianer">
        <GeneralInformation />
        <EducationalForm />
        <JobsForm />
    </div>
  );
}

export default App;
