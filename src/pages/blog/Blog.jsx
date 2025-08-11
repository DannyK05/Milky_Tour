import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CrashingUfo from "../../components/icons/CrashingUfo";

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
    <div>
      {isLoadingBlogData ? (
        <div className="flex flex-col p-1 items-center">
          <p>Contacting Bzorp....</p>
          <div className="loader"></div>
        </div>
      ) : spaceBlog ? (
        <>
          <h2>{spaceBlog.title}</h2>
          <img
            src={spaceBlog.image_url}
            alt={spaceBlog.title}
            width={500}
            height={600}
          />
          <p>{fullArticle}</p>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <h2>Blogs</h2>
          <p>Uh Oh!!, Bzorp didn't deliver the mail today</p>
          <CrashingUfo />
        </div>
      )}
    </div>
  );
};

export default Blog;
