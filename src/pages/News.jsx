import { useEffect, useState } from "react";
import CrashingUfo from "../components/icons/CrashingUfo";

const News = () => {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchNewsApi = async () => {
      const nasaApiKey = import.meta.env.VITE_NASA_API_KEY;
      const apodUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaApiKey}`;

      try {
        const response = await fetch(apodUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApodData(data);
      } catch (error) {
        console.error("Error fetching NASA APOD:", error);
      }
    };

    fetchNewsApi();
  }, []);

  return (
    <div className="bg-white min-h-[100vh] text-black">
      <h1>News</h1>
      {apodData ? (
        <div className="flex flex-col items-center space-y-2">
          <h2 className="text-2xl">
            Bzorp's Picture of the day: {apodData.title}
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
    </div>
  );
};

export default News;
