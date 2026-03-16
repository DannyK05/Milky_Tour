import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import ScrollUp from "../../utils/ScrollUp";

import Layout from "../../components/layouts/Layout";
import Loading from "../../components/Loading";
import Failed from "../../components/Failed";
import TruncateText from "../../utils/TruncateText";

const News = () => {
  const [apodData, setApodData] = useState(null);
  const [spaceBlog, setSpaceBlog] = useState(null);

  const [isLoadingApodData, setIsLoadingApodData] = useState(false);
  const [isLoadingBlogData, setIsLoadingBlogData] = useState(false);

  const params = useParams();
  params.blogId;

  useEffect(() => {
    const fetchNewsApi = async () => {
      const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
      const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

      const spaceFlightUrl = import.meta.env.VITE_BLOG_LINK;
      const blogUrl = `${spaceFlightUrl}/blogs`;

      try {
        setIsLoadingApodData(true);
        const response = await fetch(apodUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApodData(data);
        setIsLoadingApodData(false);
      } catch (error) {
        console.error("Error fetching NASA APOD:", error);
        setIsLoadingApodData(false);
      }

      try {
        setIsLoadingBlogData(true);
        const response = await fetch(blogUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSpaceBlog(data.results);
        setIsLoadingBlogData(false);
      } catch (error) {
        console.error("Error fetching NASA Blog:", error);
        setIsLoadingBlogData(false);
      }
    };

    fetchNewsApi();
  }, []);

  return (
    <Layout>
      <div className="bg-white w-full px-1 pt-[60px] flex items-center flex-col min-h-[100vh] text-black">
        <h1 className="text-[#4E2A9B] text-center">Milky Updates</h1>
        {isLoadingApodData || isLoadingBlogData ? (
          <Loading />
        ) : (
          <>
            {apodData ? (
              <div className="flex flex-col items-center space-y-3 mt-4">
                <h2 className="text-2xl text-center">
                  <span className="text-xl grotesk font-bold">
                    👽Bzorp&apos; Picture of the day:
                  </span>{" "}
                  <br /> {apodData.title}
                </h2>
                <div className="relative border-2 p-3 border-[#4E2A9B]">
                  <img
                    className="w-[400px] h-[300px] lg:w-[800px] lg:h-[500px]"
                    src={apodData.hdurl}
                    alt={`Image of ${apodData.title}`}
                    width={800}
                    height={500}
                  />
                </div>
                <p className="w-[95%] lg:w-4/5 text-lg lg:text-xl">
                  {apodData.explanation}
                  <br />
                  <a
                    href="https://apod.nasa.gov/apod/astropix.html"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-[#4E2A9B] active:underline lg:hover:underline"
                  >
                    Source: NASA&apos;s APOD API
                  </a>
                </p>
              </div>
            ) : (
              <div className="flex flex-col mt-5 items-center">
                <h2 className="text-3xl font-bold text-[#4E2A9B] p-3">
                  Picture of the day
                </h2>
                <Failed />
              </div>
            )}

            <div className="flex items-center w-full flex-col space-y-5">
              <h2 className="text-3xl font-bold text-[#4E2A9B]">Blogs</h2>

              <section className="mx-auto w-[90%] lg:w-4/5 p-2 grid grid-cols-1 lg:grid-cols-2 gap-6">
                {spaceBlog ? (
                  spaceBlog.map(
                    ({
                      title,
                      id,
                      authors,
                      summary,
                      url,
                      published_at,
                      image_url,
                    }) => (
                      <Link
                        key={id}
                        to={`/blogs/${id}`}
                        className="block min-w-0"
                      >
                        <div className="border-2 border-[#4E2A9B] rounded-lg h-full shadow-md overflow-hidden flex flex-col gap-2 p-2 bg-white/5">
                          <img
                            className="w-full aspect-[16/9] object-cover"
                            src={image_url}
                            alt={`Image of ${title}`}
                            loading="lazy"
                          />
                          <h3 className="text-lg sm:text-xl font-bold text-[#4E2A9B] ">
                            {title}
                          </h3>

                          <p className="text-xs opacity-80">
                            Published on:{" "}
                            {new Date(published_at).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )}
                          </p>

                          <div className="text-sm sm:text-base break-words">
                            <TruncateText text={summary} />
                          </div>

                          <p className="text-sm font-semibold text-[#4E2A9B] hover:underline break-words">
                            <a href={url}>
                              {authors.length > 1
                                ? `Authors: ${authors
                                    .map(({ name }) => name)
                                    .join(", ")}`
                                : `Author: ${authors.map(({ name }) => name)}`}
                            </a>
                          </p>
                        </div>
                      </Link>
                    ),
                  )
                ) : (
                  <div className="flex w-full col-span-2 items-center">
                    <Failed />
                  </div>
                )}

                <span
                  className="text-sm cursor-pointer text-[#4E2A9A] font-bold w-full text-center col-span-full py-4 hover:underline"
                  onClick={ScrollUp}
                >
                  Go to Top
                </span>
              </section>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default News;
