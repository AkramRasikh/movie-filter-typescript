### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Task

Build an app that displays 20 'now playing' movies and add a filter to sort them by rating.

### Architecture

The API calls out to the movie service in the separate ‘services’ module. To get a successful response, you will need an API key - which I have stored in an .env file. Failure to do so will be met with an error message on the screen.

Upon successfully retrieving the data, we format it to only hold the relevant parts in state ‘id, vote_average, title, & backdrop_path’ after which is sorted from highest rated and passed down as props into the page ‘filter-movies’.

The page ‘filter-movies’ only acts as a placeholder that renders the ratings checkboxes & search results. We use a hook called ‘useMovieRatingFilter’ that handles all the business logic pertaining to handling selected ratings as well as returning the correct filtered movies.

Separate folder structures are created for components (there is only one!) and hooks and any additions would fit within the respective folders.

### Tests

There are three tests passing covering, the initial render & the order of movies, error handling and the dynamic flow of the search results via filtering.

### Scalability

The benefit of separating logic into hooks and using the passed down ‘movies’ as the anchor of filtering is the scope to extend filtering by other categories. For example, if we want to implement ‘filter by year’ in conjunction to ratings, we can either extend our business logic in the existing hook or create a new hook. Creating a new hook - the preferred method - would require us to listen in on what type of filter event is happening - i.e. year - invoking the relevant hook.

### Potential performance concern

- We are using ‘Math.floor’ in our hook ‘useMovieRatingFilter’ and as it stands now, it is fine. However, if we have thousands of movies and more extensive filter operations, I would create a ‘roundedRating’ property in the formatMovies function and use ‘Math.floor’ only once for each object. Thereafter, we can reference ‘roundedRating’ in our hook

### Issues

I didn’t have as much time to spend on this test as I thought I would and did come across a couple typescript bumps. I am officially a week in to typescript and so wanted to point out a couple issues that I would have looked into a bit more if I had the time.

- Trying to rename vote_average as voteAverage - and the same with backdrop_path - while maintaining the interface’s integrity.
- I have read mixed things on how to use interfaces & axios requests and wasn’t entirely sure on how to declare the response.
