import React, { useEffect, useState } from "react";
import { API_TOKEN } from "../Token/Token";
import axios from "axios";
import { Aside } from "../Aside/Aside";
import { useLoaderState } from "../zustand/useLoaderState";

export const Coditions = () => {
  const [conditons, setConditons] = useState("");
  const { setisLoading } = useLoaderState();

  const handleConditons = () => {
    let config = {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };
    let conditonData = new FormData();
    conditonData.append("accesskey", "90336");
    conditonData.append("settings", "1");
    conditonData.append("get_terms", "1");
    setisLoading(true);

    axios
      .post(
        "https://grocery.intelliatech.in/api-firebase/settings.php",
        conditonData,
        config
      )
      .then((res) => {
        console.log(res?.data?.terms);
        setConditons(res?.data?.terms);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  };
  useEffect(() => {
    handleConditons();
  }, []);

  function stripHTML(myString) {
    return myString.replace(/(<([^>]+)>)/gi, "");
  }

  return (
    <>
      <div className="flex flex-row justify-evenly mt-28">
        <div className="w-[35%] h-full ">
          <Aside />
        </div>

        <div class="w-[60%]">
          <div class="bg-white">
            <p class="md:text-md text-center  justify-center items-center">
              {stripHTML(conditons)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
