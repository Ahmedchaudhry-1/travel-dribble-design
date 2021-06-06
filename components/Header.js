import { ViewGridIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between sticky">
      <ViewGridIcon
        onClick={() => router.push("/")}
        className="h-8 w-8 hover:bg-lightGray rounded-full cursor-pointer "
      />
      <div className="flex items-center">
        <p className="link" onClick={() => router.push("/gallery")}>
          Gallery
        </p>
        <p className="link">Stories</p>
        <img
          className="h-10 w-10 rounded-full cursor-pointer hover:w-11 hover:h-11 delay-75 duration-100"
          src="https://res.cloudinary.com/dssvrf9oz/image/upload/v1622777589/ben-sweet-2LowviVHZ-E-unsplash_1_nud97c.jpg"
        />
      </div>
    </header>
  );
}

export default Header;
