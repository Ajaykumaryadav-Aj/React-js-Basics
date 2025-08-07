import UserCard from "./components/UserCard"
import "./App.css"
import person1 from "./assets/person1.png";
import google from "./assets/google.png";
function App() {

  return (
    <div className="container">
      <UserCard name = 'Ajay Yadav' desc = "Des1" image={person1} style={{"border-radius":"20px"}} />
      <UserCard name = 'Rahul Yadav' desc = "Des2" image={google} />
      <UserCard name = 'Ashish Yadav' desc = "Des3" image={person1} />
    </div>
  )
}

export default App
