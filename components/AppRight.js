import AppsIcon from "@material-ui/icons/Apps";
import Image from "next/image";
import TravelOption from "./TravelOption";

function AppRight() {
  return (
    <div className="flex flex-col font-poppins p-5 h-screen">
      <header className="flex justify-between items-center w-full h-16 ">
        <AppsIcon className="font-semibold text-blue" />
        <div className="flex justify-around items-center w-6/12">
          <h3 className="font-semibold text-blue">Gallery</h3>
          <h3 className="font-semibold text-blue">Stories</h3>
          <Image
            width={40}
            height={40}
            className="rounded-full text-center"
            src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622777589/ben-sweet-2LowviVHZ-E-unsplash_1_nud97c.jpg"
            alt=""
          />
        </div>
      </header>
      <h2 className="text-3xl text-blue p-4">Discover</h2>
      <div className="flex justify-evenly w-80 p-4">
        <h2 className="text-xl text-orange border-b-[2px] border-orange">
          Popular
        </h2>
        <h2 className="text-xl text-gray">Adventure</h2>
        <h2 className="text-xl text-gray">Tour</h2>
      </div>
      <div className="flex overflow-scroll hidescrollbar">
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1531101860752-fdad86cec994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1457459686225-c7db79d4e59f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80"
          alt="mountains"
        />
        <img
          className="w-60 h-80 mx-2 rounded-xl"
          src="https://images.unsplash.com/photo-1575351881847-b3bf188d9d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="hot air balloons"
        />
      </div>
      <h2 className="text-3xl text-blue font-semibold pt-1">Types of Travel</h2>
      <div className="flex overflow-scroll hidescrollbar w-full pt-5 h-40 justify-evenly">
        <TravelOption emoji="⭐" title="Luxury" active />
        <TravelOption emoji="🦁" title="Safari" />
        <TravelOption emoji="🚄" title="Train" />
        <TravelOption emoji="👪" title="Family" />
        <TravelOption emoji="👨" title="Alone" />
      </div>
    </div>
  );
}

export default AppRight;
