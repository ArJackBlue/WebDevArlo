import Hero from './Hero';

const SearchView = ({ keyword, searchResults }) =>{
    const title = 'You are searching for {keyword}'
    return(
        <>
        <Hero text={title} />
        </>
    )
}

export default SearchView;