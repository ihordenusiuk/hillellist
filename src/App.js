import StudentBlock from './Components/StudentBlock';
import './App.css';
import {users} from "./Components/list"

function App() {
  let userList = users.map((elem, i)=>{
    i++
    return <StudentBlock 
    key = {i}
    name = {elem.name}
    img = {elem.img}
    homeworks = {elem.homeworks}
    score = {elem.homeworks.reduce((q,w)=>q + w, 0)}
    />
  }).sort((a, b)=> b.props.score - a.props.score)
    
  
  return (
    <div className='wrapper'>
      <h3 className='heading'>Рейтинг групи</h3>
      <div className='columns'>
        <div className='studets_text'>Студент</div>
        <div className='studets_hw'>Домашки/бали</div>
      </div>
      <table className='students_list'>
        <tbody>{userList}</tbody>
      </table>
    </div>
  );
}

export default App;
