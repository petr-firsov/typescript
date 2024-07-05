import MovieInfo from './movie_template';
export default class Movie implements MovieInfo {
    constructor(
        readonly year: number, 
        readonly country: string, 
        readonly slogan: string, 
        readonly genre: string, 
        readonly length: number) {
    }
}