import { useEffect, useState } from "react";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import axios from "axios";
const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const request = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { page: 1, query, per_page: 12 },
            headers: {
              Authorization:
                "Client-ID e-SwXkideXDiNFEtKIUucxcHn24OOz3QewngErlUaP4",
            },
          }
        );
        setData(response.data.results);
      } catch (error) {
        console.error("Hata Oluştu", error);
      }
    };
    request();
  }, [query]);
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={data} />
    </>
  );
};

export default App;
