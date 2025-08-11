import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Layout from "../../components/layouts/Layout";
import CrashingUfo from "../../components/icons/CrashingUfo";

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
      <div className="bg-white w-full px-1 pt-10 flex items-center flex-col min-h-[100vh] text-black">
        <h1>News</h1>
        {isLoadingApodData ? (
          <div className="flex flex-col p-1 items-center">
            <p>Contacting Bzorp....</p>
            <div className="loader"></div>
          </div>
        ) : apodData ? (
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-2xl">
              👽Bzorp's Picture of the day: {apodData.title}
            </h2>
            <img
              src={apodData.hdurl}
              alt={`Image of ${apodData.title}`}
              width={600}
              height={500}
            />
            <p className="w-3/4 text-lg">{apodData.explanation}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2>Picture of the day</h2>
            <p>Uh Oh!!, Bzorp didn't deliver the mail today</p>
            <CrashingUfo />
          </div>
        )}

        <div>
          <h2 className="text-2xl">Blogs</h2>
          <section className="w-full grid grid-cols-1 lg:grid-cols-2 rounded-lg gap-x-4 gap-y-8">
            {isLoadingBlogData ? (
              <div className="flex flex-col p-1 items-center">
                <p>Contacting Bzorp....</p>
                <div className="loader"></div>
              </div>
            ) : spaceBlog ? (
              spaceBlog.map(({ title, id, authors, image_url }) => (
                <Link to={`/blogs/${id}`}>
                  <div
                    className="border px-1 py-2 flex flex-col items-center space-y-1"
                    key={id}
                  >
                    <img width={600} height={500} src={image_url} />
                    <h3 className="text-lg">{title}</h3>
                    <p className="w-auto font-semibold">
                      {authors.length > 1
                        ? `Authors : ${authors.map(({ name }) => name)}`
                        : `Author : ${authors.map(({ name }) => name)}`}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center">
                <h2>Blogs</h2>
                <p>Uh Oh!!, Bzorp didn't deliver the mail today</p>
                <CrashingUfo />
              </div>
            )}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default News;
