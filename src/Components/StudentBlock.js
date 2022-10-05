import {users} from "./list";

function StudentBlock({name, img, homeworks, score}) {

  return <tr className="student">
      <td className="num"></td>
      <td><img src={img}/></td>
      <td>{name}</td>
      <td className="markBlock">
          <div className="hmwkNum">{homeworks.length}</div>
          <div className="hmwkSum">{score}</div>
      </td>
      <td className="mark"></td>
  </tr>



}

export default StudentBlock;
