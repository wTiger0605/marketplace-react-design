import React from "react";
import { formatPublishedDateTime } from "./news-feed.utils";
import "./news-feed-table.styles.scss";

const NewsFeedTable = ({ feeds }) => {
  const renderNewsFeeds = () => {
    if (feeds.length) {
      return (
        <table>
          {feeds.map((item, index) => {
            const { image, publishedDate, title, url } = item;
            return (
              <thead key={"head" + index}>
                <tr key={"row" + index}>
                  <td key={"image" + index}>
                    {image && <img src={image} className="feedImage" />}
                  </td>
                  <td key={"publishDate" + index}>
                    {publishedDate && formatPublishedDateTime(publishedDate)}
                  </td>
                  <td key={"title" + index}>
                    {url && (
                      <a href={url} target="_blank">
                        {title}
                      </a>
                    )}
                  </td>
                </tr>
              </thead>
            );
          })}
        </table>
      );
    } else {
      return <>No news feed available.</>;
    }
  };

  return (
    <div className="news-feeds-table">
      <h3>News Feed:</h3>
      {renderNewsFeeds()}
    </div>
  );
};

export default NewsFeedTable;
