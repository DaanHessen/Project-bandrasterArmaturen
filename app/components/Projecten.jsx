import globals from 'app/globals.css';
import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Projecten = () => {
  const data = [
    {
      link: "add link here",
      image: "/images/1.jpeg",
      comment: `<b>Project 1</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
    {
      link: "add link here",
      image: "/images/10.jpg",
      comment: `<b>Project 2</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
    {
      link: "add link here",
      image: "/images/3.webp",
      comment: `<b>Project 3</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
    {
      link: "add link here",
      image: "/images/4.webp",
      comment: `<b>Project 4</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
    {
      link: "add link here",
      image: "/images/5.webp",
      comment: `<b>Project 5</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
    {
      link: "add link here",
      image: "/images/6.jpg",
      comment: `<b>Project 6</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.`,
    },
  ];

  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto mt-120">
          <div className="py-2">
            <h1 className="text-center text-4xl">My App</h1>
          </div>

          {/* New container with white background and title */}
          <div className="bg-white bg-opacity-75 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">/projects</h2>

            <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {data.map((x, index) => (
                <article
                  key={index}
                  className="p-6 mb-6 transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
                  <div className="relative mb-4 rounded-2xl">
                    <Image
                      width={400}
                      height={400}
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src={x.image}
                      alt=""
                    />
                    {/* Update Link usage */}
                    <Link href={x.link} passHref>
                      <div
                        className="flex justify-center items-center bg-[#a41c44] bg-opacity-80 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                      >
                        Meer info
                      </div>
                    </Link>
                  </div>
                  <h3 className="font-medium text-xl leading-8">
                    <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projecten;
