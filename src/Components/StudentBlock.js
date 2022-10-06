function StudentBlock({name, img, homeworks, score, key}) {
    let i = 0
  return <tr className="student">
      <td>{i+1}</td>
      <td><img src={img}/></td>
      <td>{name}</td>
      <td className="markBlock">
          <div className="hmwkNum">{homeworks.length}</div>
          <div className="hmwkSum">{score}</div>
      </td>
      <div className="mark"></div>
  </tr>
}

export default StudentBlock;
