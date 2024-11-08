import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"
import SearchResult from "./SearchResult"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"


export interface ItemInterface {
    id: number,
    title: string,
    image: string
}

const Home = () => {
    const APIKEY = 'ae98638f897c4eb79d6f212f141affb8';
    const [query, setQuery] = useState<string>('chicken');
    const [number, setNumber] = useState<number>(2);
    const navigate = useNavigate();

    const {data: itemData, loading, error: dataError} = useFetch(``);
    const [item, setItem] = useState<ItemInterface[]>();
    const [isLoading, setIsLoading] = useState<boolean>(loading);
    const [error, setError] = useState<string | null>(dataError);
    

    const handleQuery = (e: React.FormEvent<HTMLFormElement>): void => {
        e?.preventDefault();
        navigate(`/pages/SearchResult?query=${encodeURIComponent(query)}&number=${number}`);
    }

    return (
        <div className="home">'
            <div className="form-container">
            <form onSubmit={handleQuery}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} 
                value={query}
                placeholder="Search for a recipe..." />
                <button className="searchBtn">Search</button>
            </form>
            </div>
        </div>
    )
}

export default Home;