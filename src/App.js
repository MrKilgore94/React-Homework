import logo from './logo.svg';
import './App.css';
import FlashCard from './FlashCard'
import MainContainer from './MainContainer';
import KeyBoard1, {x,y} from './keyboard.js'
import TodoList from './ToDoList';




function App() {

  return (
    <div>
      <h1>React HomeWork</h1>
      <MainContainer header='Questions'>
        <FlashCard question='Is the Enfield l86 LSW a bullpup style gun?' answer='Yes'/>
        <FlashCard question='What is the MP5 chambered in?' answer='9x19 Parabellum'/>
        <FlashCard question='Where did the FN Five-seven originate?' answer='Belgium'/>
      </MainContainer>

      <MainContainer class='keyCenter' header='Keyboard'>

        <KeyBoard1 />


         
      </MainContainer>

      <MainContainer header='make todo list'>

       
   
      </MainContainer>
    </div>
  );
}

export default App;