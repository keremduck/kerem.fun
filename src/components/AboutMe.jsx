import React from "react";

export default function AboutMe({ discord }) {
  return (
    <div className="container p-4 mt-5">
      <div className="row">
        {discord.map((value) => (
          <>
            <div className="col-sm-9">
              <h3>
                Newbie{" "}
                <a className="text-info text-decoration-none">front-end</a>{" "}
                developer
              </h3>
              <p className="text-secondary">
                I'm self-interested person who likes to improve myself and is
                interested in software. 🙌
              </p>
            </div>
            <div className="col-sm-3">
              <img
                src={
                  "https://cdn.discordapp.com/avatars/722901871001337968/" +
                  value.data.discord_user.avatar +
                  ".png"
                }
                width={100}
                height={100}
                className="rounded-circle float-lg-end"
              />
            </div>
          </>
        ))}
        <hr className="text-secondary mt-5" />
      </div>
    </div>
  );
}
