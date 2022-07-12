

class MovieController{
    constructor(id){
        this.api_key = 'api_key=af2c420e596f08347a8c9d2b1d756b7e';
        this.id = id;
    }

    
    async getInfo(){
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}?`+this.api_key+
            '&append_to_response=releases', {
                method: 'GET'
            });
            const obJson = await response.json();
            let genres = [];
            obJson['genres'].forEach(element => {
                genres.push(element.name);
            });
            let certificitacion;
            let arrCertifies = obJson['releases']['countries'];
            for(let i = 0;i < arrCertifies.length ; i++){
                if(!isNaN(arrCertifies[i].certification) && arrCertifies[i].certification != ''){
                    certificitacion = arrCertifies[i].certification;
                    break;
                }
            }

            const obj = {
                'name':obJson.title,
                'genres':genres,
                'calification':obJson.vote_average,
                'year':obJson.release_date.slice(0,4),
                'synopsis':obJson.overview,
                'certificitacion':certificitacion,
                'image':'https://image.tmdb.org/t/p/w500'+obJson.poster_path
            }
            return obj;
        } catch (error) {
            console.error(error);
        }
    }

    async getRecommended(){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}/recommendations?`
            + this.api_key,{
                method:'GET'
            });
            let recommends = [];
            let link;
            const obj = await response.json();
            for(let i = 0; i < obj.results.length; i++){
                if(obj.results[i].backdrop_path != null){
                    link = 'https://image.tmdb.org/t/p/w500'+obj.results[i].backdrop_path;

                    recommends.push({'name':obj.results[i].title
                                ,'image_link':link,
                                'id':obj.results[i].id});
                }

                if(recommends.length == 12) break;
            }
            return recommends;
        }catch(e){
            console.error(e);
        }
    }

    async getCasting(){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}/credits?`
            + this.api_key,{
                method:'GET'
            });
            let actors = [];
            const objCast = await response.json();
            let arr = objCast.cast;
            for(let i = 0; i < arr.length; i++){
               
                if(objCast.cast[i].profile_path != null){
                    actors.push({'name':objCast.cast[i].name,
                                'image_link':'https://image.tmdb.org/t/p/w500'+objCast.cast[i].profile_path});
                }

                if(actors.length == 12) break;
            }
            return actors;
        }catch(e){
            console.error(e);
        }
    }
    async getTrailer(){
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/${this.id}/videos?`
            + this.api_key)
            const result = await response.json();
            const trailer = {'hash_trailer':result.results[0].name,
                            'embed_trailer':'https://www.youtube.com/embed/'+result.results[0].key,
                            'link_trailer':'https://www.youtube.com/watch?v='+result.results[0].key};
            return trailer;
        }catch(e){
            console.erro(e);
        }
    }
}

export default MovieController;