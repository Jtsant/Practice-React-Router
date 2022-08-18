import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learnign React is fun!'},
    {id: 'q2', author: 'Maximilian', text: 'Learnign React is great!'},
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES} />
};


export default AllQuotes;