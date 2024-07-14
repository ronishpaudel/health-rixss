"use client";
import React from "react";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";
import { useParams } from "next/navigation";
import { articles } from "../utils/articles";

const ArticlePage = () => {
  const { id } = useParams();
  const item = articles.find((article) => article.id === id);

  if (!item) {
    return <div>Article not found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="max-w-[1920px] w-full px-[8%] py-12">
        <div className="w-full mx-auto">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-auto rounded-lg"
          />
          <h1 className="text-3xl font-bold mt-4 md:mt-6 lg:mt-8">
            {item.title}
          </h1>
          <p className="mt-3 text-muted-foreground md:text-lg lg:text-xl">
            {item.description}
          </p>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default ArticlePage;
