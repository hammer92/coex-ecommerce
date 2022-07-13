import './movie-section.css'

class MovieSection {
  get templateClass() {
    return;
    `
    <div class="movie-section" id="content">
        <h1>Synopsis</h1>
        <a href="#trailer"><span></span>Trailer</a>
    </div>
    <div class="movie-section" id="trailer">
        <h1>Trailer</h1>
        <a href="#casting"><span></span>Casting</a>
    </div>
    <div class="movie-section" id="casting">
        <h1>Casting</h1>
        <a href="#recommended"><span></span>Recommended</a>
    </div>
    <div class="movie-section" id="recommended">
        <h1>Recommended</h1>
        <a href="#content"><span></span>Synopsis</a>
    </div>
        `;
  }
}
export default MovieSection;
