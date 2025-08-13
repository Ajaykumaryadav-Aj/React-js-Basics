import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function handleClick() {
    alert("Clicked button");
  }

  function mouseHover() {
    alert("Jaldi waha se hatto over ho gya hai");
  }

  function handleInputChange(e) {
    console.log("value till now:", e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // I am writing my custom behaviour down
    alert("From submit krdu kya bro");
  }

  return (
    <div>

      <button onClick={() => alert("Button click hua ab")}>Click Here</button>

      {/* <form onSubmit={handleSubmit}>
  <input type="text" onChange={handleInputChange} />
  <input type="submit" />
</form> */}

      {/* <button onClick={handleClick}>Click me</button>
      <p style={{border:"solid 1px blue"}} onMouseOver={mouseHover}>
        I am Paragraph
      </p> */}
    </div>
  );
}

export default App;
