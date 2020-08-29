import React from "react";
import AuthContext from "../../servies/context";

const Districts = () => {
  const { districts, handleDistrict } = React.useContext(AuthContext);
  return (
    <select onChange={(e) => handleDistrict(e)}>
      <option value="">เลือกอำเภอ</option>
      {districts
        ? districts.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name_th}
            </option>
          ))
        : null}
    </select>
  );
};

export default Districts;
