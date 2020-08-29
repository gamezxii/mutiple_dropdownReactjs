import React, { useEffect, useState } from "react";
import Spinner from "./components/Spinner/index";
import AuthContext from "./servies/context";
import Province from "./components/Province/Province";
import Districts from "./components/Districts/Districts";
import SubDistrict from "./components/subDistrict/SubDistrict";
import { provincesAPI } from "./servies/until";
import "./App.css";


function App() {
  const [provinces, setProvinces] = useState(null);
  const [districts, setDistricts] = useState(null);
  const [substricts, setSubstricts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProvice = async () => {
    setIsLoading(true);
    try {
      let result = await fetch(`${provincesAPI}provinces`)
        .then((response) => response.json())
        .catch((err) => {
          console.log(err);
        });
      const { message } = result;
      setProvinces(message);
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const fetchDistricts = async () => {
    let result = await fetch(`${provincesAPI}districts`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    const { message } = result;
    setDistricts(message);
  };

  const fetchsubDistricts = async () => {
    let result = await fetch(`${provincesAPI}subdistricts`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    const { message } = result;
    setSubstricts(message);
  };

  const fetchDistrictId = async (id) => {
    const result = await fetch(`${provincesAPI}districtId&id=${id}`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    const { message } = result;
    setDistricts(message);
  };

  const fetchsubDistrictId = async (id) => {
    const result = await fetch(`${provincesAPI}subdistrictId&id=${id}`)
      .then((response) => response.json())
      .catch((err) => {
        console.log(err);
      });
    const { message } = result;
    setSubstricts(message);
  };

  const handleProvince = (e) => {
    let id = e.target.value;
    console.log(id);
    fetchDistrictId(id);
  };

  const handleDistrict = (e) => {
    let id = e.target.value;
    fetchsubDistrictId(id);
  };

  useEffect(() => {
    fetchProvice();
    fetchDistricts();
    fetchsubDistricts();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        provinces,
        districts,
        substricts,
        handleProvince,
        handleDistrict,
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <div className="App__header">
            <h4>Multiple Dropdown React Js</h4>
          </div>
          <div className="row">
            <Province />
            <Districts />
            <SubDistrict />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
