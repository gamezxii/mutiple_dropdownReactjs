import React from "react";
import AuthContext from "../../servies/context";

const Province = () => {
  const { provinces, handleProvince } = React.useContext(AuthContext);

  return (
    <select onChange={(e) => handleProvince(e)}>
      <option value="">เลือกจังหวัด</option>
      {provinces
        ? provinces.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name_th}
            </option>
          ))
        : null}
    </select>
  );
};

export default Province;
