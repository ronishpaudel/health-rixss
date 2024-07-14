"use client";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import ScrollToTopButton from "../src/components/scrollTopButton";
import { NewsCard } from "../src/components/newsCard";
import { useRouter } from "next/navigation";
import { articles } from "../utils/articles";

export default function page() {
  const router = useRouter();

  const handleArticleClick = (id: string) => {
    router.push(`/${id}`);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <section className="bg-background py-12  max-w-[1920px] w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-orange-400">
              Latest News
            </h2>
            <p className="mt-3 text-muted-foreground md:text-lg lg:text-xl">
              Stay up-to-date with our latest articles and updates.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <NewsCard
                key={index}
                onClick={() => handleArticleClick(article.id)}
                image={article.image}
                alt={article.alt}
                title={article.title}
                description={article.description}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
