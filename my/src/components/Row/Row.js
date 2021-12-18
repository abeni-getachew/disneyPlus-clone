import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import YouTub from 'react-youtube'
import movieTrailer from 'movie-trailer';
import styled from "styled-components";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargRow}) {
    const [movies, setMovies] = useState([]); 
    const [trailer , setTrailer] = useState("");
    useEffect(() => {
        async function fetchData() {
            const  request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }
        fetchData();   
    }, [fetchUrl]);
    const opts = {
        height: "390",
        width:"100%",
        palyerVars: {
           autopaly: 1,   
        },
    };
    const handleClick = (movie) => {
        if(trailer) {
            setTrailer('')
        } else {
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailer(urlParams.get("v"));
            })

            .catch(error => console.log(error)); 
        }
    }
    return (
        <Rows>
            {/* title */}
            <h2>{title}</h2>
            <Posters>
                {movies.map((movie) => (
                    <img
                       onClick={() => handleClick(movie)} 
                       key={movie.id}
                       className={`row__poster ${isLargRow && "row__posterLarge"}`}
                       src={`${base_url}${isLargRow ? movie.poster_path: movie.backdrop_path}`}
                       alt={movie.name} />
                ))}
            </Posters>
           {trailer &&  <YouTub videoId={trailer} opts={opts} />}
            
        </Rows>
    )
}
const Rows =  styled.div`
    margin-left: 20px;
    color: #fff;
`;
const Posters = styled.div`
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    ::-webkit-scrollbar {
        display: none;
    }
`;
export default Row
