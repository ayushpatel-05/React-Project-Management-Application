import SideBar from "./components/Sidebar";
import Content from "./components/Content";


function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex">
      <SideBar></SideBar>
      <Content></Content>
      </div>
    </>
  );
}

export default App;
