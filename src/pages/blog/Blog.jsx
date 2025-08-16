import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Loading from "../../components/Loading";
import Failed from "../../components/Failed";

const Blog = () => {
  const params = useParams();
  const [spaceBlog, setSpaceBlog] = useState(null);
  const [fullArticle, setFullArticle] = useState("");
  const [isLoadingBlogData, setIsLoadingBlogData] = useState(false);

  useEffect(() => {
    const fetchBlogApi = async () => {
      const spaceFlightUrl = import.meta.env.VITE_BLOG_LINK;

      if (!spaceFlightUrl || !params.blogId) {
        console.error("Missing API base URL or blogId");
        return;
      }

      const blogUrl = `${spaceFlightUrl}/blogs/${params.blogId}/`;

      try {
        setIsLoadingBlogData(true);

        const response = await fetch(blogUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setSpaceBlog(data);

        if (data.url) {
          const encodedUrl = encodeURIComponent(data.url);

          const htmlRes = await fetch(
            `https://api.allorigins.win/get?url=${encodedUrl}`
          );
          if (!htmlRes.ok) {
            throw new Error(`Failed to fetch full article`);
          }

          const htmlData = await htmlRes.json();
          const parser = new DOMParser();
          const doc = parser.parseFromString(htmlData.contents, "text/html");
          const paragraphs = doc.querySelectorAll("p");
          const textContent = Array.from(paragraphs)
            .map((p) => p.textContent.trim())
            .join("\n\n");

          setFullArticle(textContent);
        }

        setIsLoadingBlogData(false);
      } catch (error) {
        console.error("Error fetching NASA Blog:", error);
        setIsLoadingBlogData(false);
      }
    };

    fetchBlogApi();
  }, [params.blogId]);

  return (
    <div className="bg-white text-black flex items-center min-h-[100vh] flex-col space-y-2 py-4">
      <Link to={"/news"}>
        <button className="text-white">Back</button>
      </Link>
      {isLoadingBlogData ? (
        <Loading />
      ) : spaceBlog ? (
        <div className="w-full flex flex-col items-center p-1 space-y-4">
          <h2 className="text-justify text-[#4E2A9B]">{spaceBlog.title}</h2>
          <p>
            Published on :
            {new Date(spaceBlog.published_at).toLocaleDateString(
              ("en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            )}
          </p>
          <img
            className="lg:w-3/5"
            src={spaceBlog.image_url}
            alt={spaceBlog.title}
            width={500}
            height={600}
          />
          <p className="w-[90%] text-lg lg:w-4/5 lg:text-xl">{fullArticle}</p>
          <p className="w-[90%] text-lg text-start lg:w-4/5">
            <a
              href={spaceBlog.url}
              rel="nopener"
              target="_blank"
              className="text-[#4E2A9B] active:underline lg:hover:underline"
            >
              Source: NASA's Blog
            </a>
          </p>
        </div>
      ) : (
        <Failed />
      )}
    </div>
  );
};

export default Blog;
