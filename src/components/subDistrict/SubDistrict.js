import React from "react";
import AuthContext from "../../servies/context";

const SubDistrict = () => {
  const { substricts } = React.useContext(AuthContext);
  return (
    <select>
      <option value="">เลือกตำบล</option>
      {substricts
        ? substricts.map((substrict) => (
            <option key={substrict.id} value={substrict.id}>
              {substrict.name_th}
            </option>
          ))
        : null}
    </select>
  );
};

export default SubDistrict;
