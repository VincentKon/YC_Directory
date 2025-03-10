import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/query";
import React from "react";
import StartupCard, { StartupCardType } from "./StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupCardType) => (
          <StartupCard key={startup._id} post={startup}></StartupCard>
        ))
      ) : (
        <p className="no-result">No posts found</p>
      )}
    </>
  );
};

export default UserStartups;
