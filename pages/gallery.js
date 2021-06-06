import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";

function gallery({
  images,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
}) {
  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>

      <header className="p-10">
        <Header />
      </header>
      <div className="flex flex-wrap items-start hidescrollbar">
        {images.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images2.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images3.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images4.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images5.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images6.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
        {images7.results.map((image) => (
          <Image
            objectFit="contain"
            width={300}
            height={300}
            key={image.id}
            src={image.urls.small}
            className="!m-2"
          />
        ))}
      </div>
    </div>
  );
}

export default gallery;

export async function getServerSideProps() {
  const images = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=tourist&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  const images2 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=famous-places&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  const images3 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=tourism&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  const images4 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=lake&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  const images5 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=mountain&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  const images6 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=beautiful-places&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());
  const images7 = await fetch(
    `https://api.unsplash.com/search/photos/?page=1&query=nature&per_page=10&client_id=${process.env.UNSPLASH_API_KEY}`
  ).then((res) => res.json());

  return {
    props: {
      images,
      images2,
      images3,
      images4,
      images5,
      images6,
      images7,
    },
  };
}
