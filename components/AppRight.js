import { useState } from "react";
import Header from "./Header";
import TravelOptions from "./TravelOptions";

function AppRight() {
  const [places, setPlaces] = useState("Popular");

  return (
    <div className="p-10">
      <Header />

      <h1 className="text-blue font-semibold text-4xl">Discover</h1>
      <div className="flex w-64 justify-evenly mt-10">
        <p
          onClick={() => setPlaces("Popular")}
          className={
            places === "Popular"
              ? "text-orange text-xl border-b-[2px] border-orange"
              : "text-gray text-xl hover:text-orange cursor-pointer hover:border-b-[2px] border-orange delay-75 duration-100"
          }
        >
          Popular
        </p>
        <p
          onClick={() => setPlaces("Adventure")}
          className={
            places === "Adventure"
              ? "text-orange text-xl border-b-[2px] border-orange"
              : "text-gray text-xl hover:text-orange cursor-pointer hover:border-b-[2px] border-orange delay-75 duration-100"
          }
        >
          Adventure
        </p>
        <p
          onClick={() => setPlaces("Tour")}
          className={
            places === "Tour"
              ? "text-orange text-xl border-b-[2px] border-orange"
              : "text-gray text-xl hover:text-orange cursor-pointer hover:border-b-[2px] border-orange delay-75 duration-100"
          }
        >
          Tour
        </p>
      </div>
      <div className="flex overflow-scroll hidescrollbar mt-5">
        {places === "Popular" ? (
          <>
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="hot air balloons"
            />
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1531101860752-fdad86cec994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="mountains"
            />{" "}
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1593176507419-1cb51a633c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="Paris"
            />
          </>
        ) : (
          <></>
        )}
        {places === "Adventure" ? (
          <>
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1560205318-8747e073c3d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="Surfing"
            />
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
              alt="mountains"
            />
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1541542684-be0c46417a12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=358&q=80"
              alt="mountains"
            />
          </>
        ) : (
          <></>
        )}
        {places === "Tour" ? (
          <>
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1612017123334-ad2ed827ab4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="lake"
            />
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1595688736300-a2541c0c3f26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
              alt="mountains"
            />
            <img
              className="w-60 h-80 mx-2 rounded-xl"
              src="https://images.unsplash.com/photo-1532370731809-bbe1661d7bf5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <h1 className="text-blue font-bold text-4xl mt-5">Types of Travel</h1>
      <div className="flex justify-evenly mt-2">
        <TravelOptions emoji="⭐" title="Luxury" active />
        <TravelOptions emoji="🦁" title="Safari" />
        <TravelOptions emoji="🚄" title="Train" />
        <TravelOptions emoji="👪" title="Family" />
        <TravelOptions emoji="👨" title="Alone" />
      </div>
    </div>
  );
}

export default AppRight;
