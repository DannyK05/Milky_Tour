import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Layout from "../../components/layouts/Layout";
import CrashingUfo from "../../components/icons/CrashingUfo";
import Loading from "../../components/Loading";

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
                    👽Bzorp's Picture of the day:
                  </span>{" "}
                  <br /> {apodData.title}
                </h2>
                <div className="relative border-2 p-3 border-[#4E2A9B]">
                  <img
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
                    rel="nopener"
                    target="_blank"
                    className="text-[#4E2A9B] active:underline lg:hover:underline"
                  >
                    Source: NASA's APOD API
                  </a>
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <h2>Picture of the day</h2>
                <p>Uh Oh!!, Bzorp didn't deliver the mail today</p>
                <CrashingUfo />
              </div>
            )}

            <div className="flex items-center flex-col space-y-5">
              <h2 className="text-3xl font-bold text-[#4E2A9B]">Blogs</h2>

              <section className="text-xl w-[90%] lg:w-4/5 p-2 grid grid-cols-1 lg:grid-cols-2 rounded-lg lg:gap-x-4 gap-y-8">
                {spaceBlog ? (
                  spaceBlog.map(
                    ({ title, id, authors, summary, url, image_url }) => (
                      <Link key={id} to={`/blogs/${id}`}>
                        <div className="border-2 h-full border-[#4E2A9B] px-1 py-2 rounded-lg shadow-md flex flex-col items-center active:shadow-smx space-y-1">
                          <img
                            className="w-full"
                            width={600}
                            height={500}
                            src={image_url}
                          />
                          <h3 className="text-xl font-bold text-[#4E2A9B]">
                            {title}
                          </h3>
                          <p className="text-lg">{summary}</p>
                          <p className="w-auto font-semibold text-[#4E2A9B] hover:underline">
                            <a href={url}>
                              {authors.length > 1
                                ? `Authors : ${authors.map(({ name }) => name)}`
                                : `Author : ${authors.map(({ name }) => name)}`}
                            </a>
                          </p>
                        </div>
                      </Link>
                    )
                  )
                ) : (
                  <div className="flex flex-col items-center">
                    <h3>Blogs</h3>
                    <p>Uh Oh!!, Bzorp didn't deliver the mail today</p>
                    <CrashingUfo />
                  </div>
                )}
              </section>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default News;
