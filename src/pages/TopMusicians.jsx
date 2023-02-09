import React from "react";

import { Error, Loader, MusicianCard } from "../components";
import { useGetTopHitsQuery } from "../redux/service/ShazamAPI";
import Searchbar from "../components/SearchBar";

const TopMusician = () => {
  const { data, isFetching, error } = useGetTopHitsQuery();

  console.log(data, "musician");

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <Searchbar />
      <h2 className="font-bold text-3xl text-orange text-left mt-4 mb-8">
        Top Artists
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <MusicianCard key={track.key} track={track} />
        ))}
      </div>
    </div>
  );
};

export default TopMusician;
