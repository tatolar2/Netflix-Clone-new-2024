import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Row from "../../Components/Rows/Row";
import requests from "../../Components/Utility/requests";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Row
        title="Netflix Orginals"
        fetchurl={requests.fetchNetflexOrginals}
        isLargeRow={true}
      />
      <Row title="Trendings" fetchurl={requests.fetchTrending} />
      <Row title="Top Rated " fetchurl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchurl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchurl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchurl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchurl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchurl={requests.fetchDocumentaries} />
      <Footer />
    </>
  );
}
export default Home;
