import logo from "./logo.svg";
import "./App.css";
import Chatbot from "./Design/Chatbot";
import Chat2 from "./Design/Chat2";
import ChatIdList from "./Design/ChatIdList";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Chatbot />
      {/* <Chat2 /> */}
      <ChatIdList />
    </div>
  );
}

export default App;