import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import AboutMe from "./components/AboutMe";
import Github from "./components/Github";

function App() {
  const [data, setData] = useState([]);
  const [github, setGithub] = useState([]);

  const getData = () => {
    axios
      .get("https://api.lanyard.rest/v1/users/722901871001337968")
      .then((res) => setData([res.data]));
  };

  const getGithubData = () => {
    axios
      .get("https://api.github.com/users/keremduck/repos")
      .then((res) => setGithub(res.data));
  };

  useEffect(() => {
    getData();
    getGithubData();
  }, []);

  return (
    <>
      <Navbar discord={data} />
      <AboutMe discord={data} />
      <Github github={github} />
      <div className="container mt-4"></div>
    </>
  );
}

export default App;
