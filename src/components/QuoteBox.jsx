import "./styles/QuoteBox.css"

const QuoteBox = ({handleChangeQuote, quote}) => {



  return (
    <section className="quoteBox">
      <h1 className="title">Fortune Cookies</h1>

      <section className="section">
        <article className="card">
          <p className="phrase">
           {quote.phrase}
          </p>
          <footer className="footer_card"><h4>Fuente: {quote.author}</h4></footer>
        </article>
        <button className="button" onClick={handleChangeQuote}>Try luck</button>
      </section>

      <footer className="footer"><h4>created by: Miguel Martinez &copy; 2023 </h4></footer>
    </section>
  );
};
export default QuoteBox;
