import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Category from './components/category/Category';

function App() {
  return ( 
    <div
      className="w-full min-h-screen font-bodyFont bg-gradient-to-t from-purple-600
      via-purple-400 h-full pt-4 to-purple-300  text-white px-4 flex flex-col gap-10 justify-center items-center"
    >
         <Category/>
      <div className="w-full lgl:w-[850px] h-full bg-bodyColor p-6
       lgl:p-10 flex flex-col gap-10">
     
        <Form />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
