import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl justify-center align-center`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/RD1ZCc0/logo-01.png"
            alt=""
            style={{width:"150px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/XfQ3Gzz/194716.png"
            style={{width:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/Nx5HHCT/atdoorz-fav.png"
            alt=""
            style={{width:"80px", objectFit:"contain"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.ibb.co/XfQ3Gzz/194716.png"
            style={{width:"80px", objectFit:"contain"}}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
