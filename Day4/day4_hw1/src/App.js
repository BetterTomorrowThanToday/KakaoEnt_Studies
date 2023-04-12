import './App.css';
// import Comment from './Component/Comment';
import Comment from "./Component/CommentList";

function App() {
  const userLog = [
    {id:1, name: "KimHeeChan", comment: "안녕하세요"},
    {id:2, name: "John", comment:"하이"},
    {id:3, name: "Gustav" ,comment:"할로"}
  ]
  return (
    <>
      {userLog.map( 
        (user) => (<Comment key={user.id} name={user.name} comment={user.comment}/>) 
      )}
    </>
  );
}

export default App;
