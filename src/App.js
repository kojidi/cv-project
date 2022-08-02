import GeneralInformation from "./components/GeneralInformation";
import EducationalForm from "./components/EducationalForm";
import JobsForm from "./components/JobsForm";
import SkillsForm from "./components/SkillsForm";
import './styles/App.css';

function App() {
  return (
    <div className="main-contianer">
        <GeneralInformation />
        <EducationalForm />
        <JobsForm />
        <SkillsForm />
    </div>
  );
}

export default App;
