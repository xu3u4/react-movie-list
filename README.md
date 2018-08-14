# react-move-list
It is a SPA(Single Page Application) app to browse movies written in React.
The data is from https://www.themoviedb.org/documentation/api. (Details please see [APIs](#APIs))

There are two main pages:

### Home page
- A scrollable list of movies with their poster, name, rating and genres.
- Movies can be listed by selected order and filter, even search with specific keyword.
- Click a movie will leads to its detail page.

### Movie detail page

- List the full movie title, release year, description, duration, additional images, rating and the top 3 billed cast members.
- Click on the images will open a lightbox to show more images.

## Run it locally 🖥
```bash
$ git clone https://github.com/xu3u4/react-movie-list.git
$ npm install # to install node packages.
$ npm run dev # to run the app in development mode
```
Then open `localhost:3000` on browser to see the app.

## <a name="APIs">APIs</a> 🕸

### Sort by/Filter by
[/discover/movie](https://developers.themoviedb.org/3/discover/movie-discover)
On home page, default gets All genres and sort by Popularity.
When dropdown value changed, it will send another request according to the selection.

### Keyword search
[/search/movie](https://developers.themoviedb.org/3/search/search-movies)
After input the keyword, click on search icon to do search.

### Genre list
[/genre/movie/list](https://developers.themoviedb.org/3/genres/get-movie-list)
Only genre id is returned from `/discover/movie` and `/search/movie`, we need the genre name and id mapping from this API.

### Get movie details
[/movie/${movieId}](https://developers.themoviedb.org/3/movies/get-movie-details)
Use movieId to get its details.
The origin API doesn't contain actors and images info, adding [append_to_response](https://developers.themoviedb.org/3/getting-started/append-to-response) parameter, we tell the API to make sub-requests with only one API call. And the response will append to our main request.

## Main techniques 🛠
- React
- Redux
- Webpack
- Recompose
- React router dom
- Single Page Application
- [react-lazyload](https://github.com/jasonslyvia/react-lazyload)
- [react-circular-progressbar](https://github.com/iqnivek/react-circular-progressbar)
- [react-images](https://github.com/jossmac/react-images)

## Enhancement 🚀
[#4](https://github.com/xu3u4/react-movie-list/issues/4) Enable do search on pressing Enter

[#5](https://github.com/xu3u4/react-movie-list/issues/5) Add unit test

[#6](https://github.com/xu3u4/react-movie-list/issues/6) Keyword search is not working with pagination

## Bug 🐞
[#1](https://github.com/xu3u4/react-movie-list/issues/1) On Production mode, reload will be 404

[#3](https://github.com/xu3u4/react-movie-list/issues/3) On Production mode, the images from file system on movie detail page is 404

Other issues: https://github.com/xu3u4/react-movie-list/issues
