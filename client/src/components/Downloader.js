import Header from '../components/Header'
import { React, useState, useEffect } from 'react'
import Head from 'next/head';
//import Modal from '../components/generic/Modal';
import Popup from '../components/Popup'
import parseCookie from '../utils/cookie'
import FormatCombo from '../components/pages/downloader/format/container/FormatCombo';
import InternetSpeed from './InternetSpeed';

export async function getServerSideProps(context) {

  const cookie = parseCookie(context);
  console.log("cookie", cookie);
  var res = await fetch('http://localhost:3000/api/utils/tokenVerify', {
    headers: {
      cookie: cookie
    },
    method: "POST"
  });

  const json = await res.json();
  if (!json.authorized) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  } else {
    return {
      props: {
        loggedIn: true
      }
    }
  }
}

const downloader = ({ loggedIn }) => {
  // const [file, setFile] = useState({});
  const [url, setUrl] = useState("");
  const [formatType, setFormatType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  //TODO: Rinominare in "handleConvertClick"
  const handleConvertClick = () => {
    console.log("formatType", formatType);
    console.log("url", url);
    if (formatType == "") {
      setErrorMessage("Nessun formato selezionato");
    } else if (url == "") {
      setErrorMessage("Inserire un url valido");
    } else {
      //dividerle in due chiamate
      // 1. search effettiva dell'url del video
      // 2. download
      window.open(`http://localhost:3000/api/download?url=${url}&format=${formatType}`);
      setUrl("");
    }
  }

  const handleSearchboxChange = (event) => setUrl(event.target.value);

  const handlePopupClose = () => setErrorMessage("");

  const showErrorMessageModal = errorMessage ? true : false;
  return (
    <div>
      <Head>
        <title>Downloader</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header loggedIn={loggedIn} />
      <h1 className="align-center justify-center flex inline-block align-middle title-font text-7xl mt-24">Youtube Downloader</h1>
      <div className="w-full pl-80 pr-80 container mx-auto w-24 flex items-center justify-center mt-24 h-20">
        <FormatCombo setFormat={setFormatType} selectedFormat={formatType}/>
        <input
          value={url}
          onChange={handleSearchboxChange}
          type="text"
          id="searchbox"
          name="searchbox"
          className="h-16 w-2/3 pl-4 ml-0 bg-gray-300 bg-opacity-50 focus:bg-gray-100 text-base outline-none focus:outline-none text-2xl text-gray-700 py-1 px-3 leading-8"
        />
        <button
          id="convert"
          onClick={handleConvertClick}
          className="w-44 h-16 justify-center text-white bg-indigo-500 align-middle px-6 focus:outline-none hover:bg-indigo-700 rounded-r-lg text-xl">Convert now</button>
      </div>

      {/* Ho fatto un calcolo personale per determinare, in base alla connessione dell'utente, la qualità di download del video */}
      <InternetSpeed />
      <br />

      <Popup text={errorMessage} isOpen={showErrorMessageModal} onClose={handlePopupClose}></Popup>
    </div>
  );
}
export default downloader