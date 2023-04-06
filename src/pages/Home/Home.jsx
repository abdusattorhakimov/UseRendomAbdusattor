import React, { useEffect } from "react";
import "./Home.css";
import Search from "../Search/Search";
import Recipe from "../recipe/Recipe";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [url, setUrl] = useState("https://randomuser.me/api/?results=9");
  console.log(url);
  const { data, error, IsPending, setRefresh, refresh } = useFetch(url);
  const [dataa, setDataa] = useState(data);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setDataa(data);
    console.log("salom");
  }, [data]);

  return (
    <div>
      <main className="main">
        <div className="container">
          <div className="middle">
            <Search
              setUrl={setUrl}
              data={dataa}
              setDataa={setDataa}
              setRefresh={setRefresh}
              refresh={refresh}
              setSearch={setSearch}
              search={search}
            />
            <Recipe dataa={dataa} setDataa={setDataa} search={search} />
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            by
            <a href="https://github.com/abdusattorhakimov/AbdusattorCoocking.git">
              Hakimov Abdusattor
            </a>
          </p>
        </div>
      </footer>
      <div className="overlay hidden" id="overlay">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
