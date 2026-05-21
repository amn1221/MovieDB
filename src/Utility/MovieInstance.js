import axios from "axios";
import { movies } from './../Data/Data';
const movieInstance=axios.create({
    baseURL :"https://api.themoviedb.org/3"
})
export {movieInstance}