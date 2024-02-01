
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/style/common.module.css";

const Movie = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const url = process.env.RAPID_KEY;


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd8116f1042msha5a745329a9a22cp161773jsnaedcc173274b',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data.titles;


    return (
        <div>
            <section className={styles.movieSection}>
                <div className={styles.container}>


                    <h1>
                        Series & Movie
                    </h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem}/>
                            })
                        }
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Movie;