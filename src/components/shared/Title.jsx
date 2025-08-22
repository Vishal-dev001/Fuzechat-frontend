import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "FUZECHAT",
  description = "this is the Chat App called FUZECHAT",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;