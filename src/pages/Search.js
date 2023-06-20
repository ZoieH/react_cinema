import { useSearchParams } from "react-router-dom";
import { Card } from "../component/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const { data: movies } = useFetch(apiPath, queryTerm);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700">  
                    { movies.length === 0? `no result found for '${queryTerm}'`: `Results for '${queryTerm}'`}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie}/> 
                        ))}
                   

                </div>
            </section>
            
        </main>)
}