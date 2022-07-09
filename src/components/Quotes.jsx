import React, { useEffect } from "react";
import { quotes } from "../db/quotes";

import style from "./components.module.css";

const Quotes = () => {
  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  const quote = randomQuote();
  useEffect(() => {
    randomQuote();
  }, [quote]);

  return (
    <div className={style.quotes}>
      <div className={style.quoteName}>{quote.quoteText}</div>
      <div className={style.quoteAuthor}>-{quote.quoteAuthor}</div>
    </div>
  );
};

export default Quotes;
