import React, { useState } from "react";
import "../style/compstyle.css";
import Modelcomponent from "../modelComponent";

function Maincomponent() {
  const [openmodel, setopenmodel] = useState(false);
  const [getALLData, setgetALLData] = useState([]);
  console.log("getALLData", getALLData);

  const handleClick = () => {
    setopenmodel(true);
  };
  const hidemodel = () => {
    setopenmodel(false);
  };
  const getdatafromuser = (data) => {
    let copydata = [...getALLData];
    copydata.push(data);
    setgetALLData(copydata);
  };
  return (
    <div className="main_continar">
      <Modelcomponent
        openmodel={openmodel}
        hidemodel={hidemodel}
        getdatafromuser={getdatafromuser}
      />

      <div className="header_continer">
        <div className="h1_Continer">
          <h1>Library</h1>
        </div>
        <div>
          <button className="Btn_continer" onClick={handleClick}>
            New blog
          </button>
        </div>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <th>Cover Iamge</th>
          <th>launch date</th>
          <th> Title</th>
          <th>Author</th>
        </thead>
        <tbody>
          {getALLData.map((value) => {
            console.log(value);
            return (
              <tr style={{fontfamily:'Roboto',fontsize: "22px"}}>
                <td>
                  <img   src={value.Imageurl} width="50px" height="50px" /></td>
                <td >{value.launchdate}</td>
                <td style={{color:"#009BE9"}}>{value.Title}</td>
                <td>{value.Author}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Maincomponent;
