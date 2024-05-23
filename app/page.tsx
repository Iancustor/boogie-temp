import Image from "next/image";
import Link from "next/link";
import React from "react";
const posts = [
  {
    img: "/images/posts1.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts2.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts3.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts9.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts5.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts6.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts7.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
  {
    img: "/images/posts8.jpg",
    des: "5 Cliches about blogs you should avoid",
    author: "By Lori Steves",
  },
];
function page() {
  return (
    <main className="flex flex-col gap-6 lg:gap-28 ">
      <section className="flex flex-col gap-6 lg:flex-row items-center lg:gap-48">
        <div className="flex flex-col gap-10">
          <Image
            width={1080}
            height={1080}
            className="w-[50vw] h-auto rounded-2xl"
            src="/images/boogie1.jpg"
            alt=""
          />
          <p>Blog Explained In Instagram Photos...</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-6">
          <Link href="/blog" className="flex flex-col gap-3">
            <Image
              width={1080}
              height={1080}
              className="w-80 h-60 rounded-2xl"
              src="/images/boogie2.jpg"
              alt=""
            />
            <p>Questions every one in IT should .. </p>
          </Link>
          <Link href="/blog" className="flex flex-col gap-3">
            <Image
              width={1080}
              height={1080}
              className="w-80 h-60 rounded-2xl"
              src="/images/boogie3.jpg"
              alt=""
            />
            <p>Undeniable Proof That you need .. </p>
          </Link>
        </div>
      </section>
      <section className=" flex flex-col gap-3  justify-center ">
        <h2 className="text-lg font-semibold">Previous Posts </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {posts.map((item, i) => (
            <Link key={i} href="/blog" className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-64 h-52 rounded-2xl"
                src={item.img}
                alt=""
              />
              <h3>
                Lorem ipsum dolor sit amet
                <br /> accusamus voluptates.{" "}
              </h3>
              <p>By John doe</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-6 items-center justify-center dark:bg-stone-900 bg-stone-200 rounded-3xl py-12 ">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Subscribe to get access</h2>
          <p>This content is for subscribers. Subscribe for access today.</p>
        </div>
        <div className=" relative ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-70 z-10 blur-[3px]">
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-56 rounded-2xl"
                src="/images/posts5.jpg"
                alt=""
              />
              <h3>
                Lorem ipsum dolor sit amet khalimn <br /> lerad accusamus{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-56 rounded-2xl"
                src="/images/posts2.jpg"
                alt=""
              />
              <h3>
                Lorem ipsum dolor sit amet khalimn <br /> lerad accusamus{" "}
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              <Image
                width={1080}
                height={1080}
                className="w-80 h-56 rounded-2xl"
                src="/images/posts8.jpg"
                alt=""
              />
              <h3>
                Lorem ipsum dolor sit amet khalimn <br /> lerad accusamus{" "}
              </h3>
            </div>
          </div>
          <div className="absolute left-[40%] bottom-[55%]  ">
            <button className="bg-stone-200 py-2 px-9 rounded-3xl text-stone-800">
              subscribe Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
