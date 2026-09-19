import Image from "next/image";


const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
export default function Home() {
  const data = fetchData();
  return (
    <>
      <h1>hello this is home page</h1>
      <h1>{data.msg}</h1>
    </>
  );
}
