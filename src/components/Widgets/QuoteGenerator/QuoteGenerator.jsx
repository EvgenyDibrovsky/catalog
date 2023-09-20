import React, { useState } from 'react';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center">
      <button onClick={fetchQuote} disabled={loading} className="mb-2 underline text-sky-500 duration-200 hover:text-sky-700 dark:text-yellow-500 dark:hover:text-yellow-700">
        Получить цитату
      </button>

      {loading ? (
        <p className="text-black dark:text-white">Loading...</p>
      ) : (
        <>
          <p className="text-black dark:text-white mb-2">{quote}</p>
          <p className="text-gray-400 text-right">
            <i>{author}</i>
          </p>
        </>
      )}
    </div>
  );
}

export default QuoteGenerator;
