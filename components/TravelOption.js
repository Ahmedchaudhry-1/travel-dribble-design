function TravelOption({ emoji, title, active }) {
  return (
    <div
      className={
        active
          ? `bg-orange shadow-lg rounded-full h-28 w-16 pt-1 justify-center items-center`
          : `shadow-lg rounded-full h-28 w-16 pt-1 justify-center items-center`
      }
    >
      <p className="w-10 text-center h-10 pt-2 m-3 rounded-full bg-lightGray">
        {emoji}
      </p>
      <p className={active ? "text-white m-2" : "m-2 "}>{title}</p>
    </div>
  );
}

export default TravelOption;
