# react-moviedb
This project is the final assignment for SSDP React.

## Application Page Specifications

### All Pages
The following should appear on all pages:
- Application title and/or logo
- Mobile friendly navigation that enables the user to go to any page in the application from any page in the application

### Home Page

- All the requirements from the “All Pages” requirements plus…
- A Search form that allows a user to search for a Movie by Title
- Form select element or other UI element that allows a user to change the current movies displayed between the following options:
    - Popular
    - Top Rated
    - Upcoming (yet to be released)
    - Now Playing
- On initial load of the application the page should display 12 of the most current popular movies (The Movie DB considers popular movies to be those that have the most ratings)
    - The user can switch this list by using the form select or other UI element to change these 12 movies to:
        - The 12 most highly rated movies currently out
        - The 12 most recently released movies (movies that are currently playing)
        - The next 12 movies that will be released soon (upcoming)
    - Each movie should display the following information:
        - The movie’s poster
            - If a poster is not available, then you should load a generic placeholder image
        - The movie’s title
        - The movie’s release date
        - The movie’s rating (review rating – eg: 67%)
        - A short summary of the movie’s plot
        - A “More Info” button that the user can click on to get additional information on the individual movie page
            - Optionally the entire movie listing can be clickable to the individual movie page
 
### About Page

- All the requirements from the “All Pages” requirements plus…
- A simple generic description about the application
- Meet the TMDb attribution requirements on this page
    - The TMDb attribution requirements include showing the TMDb logo and the following message:
        - "This product uses the TMDb API but is not endorsed or certified by TMDb."
        - The TMDb logo should be less prominent then the application logo and the logo should be placed in a way that does not give the appearance that your application is endorsed by TMDb
        - Read about attribution requirements on the FAQ page (look under the “What are the attribution requirements?” section)
            - https://www.themoviedb.org/faq/api
            - Click the link below for TMDb logo images:
                - https://www.themoviedb.org/about/logos-attribution

### Discover Page

- All the requirements from the “All Pages” requirements plus…
- This page will allow users to “Discover” new movies
- Users should be able to discover movies by:
    - Year (1920 – Present)
    - Genre (You can find a list of genre names on the Docs for the TMDb API)
        - Users should be able to choose either a single genre or multiple genres
    - A combination of year & genre (or multiple genres)
- The application should display the top 12 results from the  user’s “discover” search
    - Each movie should display:
        - The movie’s poster (or generic placeholder if no poster is available)
        - The movie’s title
        - The movie’s release date
        - The movie’s rating (review rating – eg: 67%)
        - A short summary of the movie’s plot
        - A “More Info” button that the user can click on to get additional information on the individual movie page
            - Optionally the entire movie listing can be clickable to the individual movie page
- The user should be able to sort the results by the following:
    - Rating – highest first or lowest first
    - Release Date – latest first or oldest first
    - Title – A to Z or Z to A
 
### Search Results Page

- This page is used when a user searches for a movie title from any general title search (not the discover search)
- All the requirements from the “All Pages” requirements plus…
- A Search form that allows a user to search for a Movie by Title
- A page subtitle that displays the user’s search query. See below for an example
    - Example (assuming the user searched for the movie “Star Wars”:
        - Search > Star Wars
- List of search results that match the user’s search query
    - Each result should display the following information:
        - The movie’s poster (or generic placeholder if no poster is available)
        - The movie’s title
        - The movie’s release date
        - The movie’s rating (review rating – eg: 67%)
        - A short summary of the movie’s plot
        - A “More Info” button that the user can click on to get additional information on the individual movie page
            - Optionally the entire movie listing can be clickable to the individual movie page

### Individual Movie Page

- This page is accessed when a user clicks on the “More Info” link on an individual movie from a search or discovery result
- All the requirements from the “All Pages” requirements plus…
- A Search form that allows a user to search for a Movie by Title
- The movie’s poster (or generic placeholder if no poster is available)
- The movie’s title
- The movie’s release date
- The movie’s rating (review rating – eg: 67%)
- A short summary of the movie’s plot
- A button or similar user interface element that allows the user to “favourite” or “heart” or “like” a movie or “unfavourite” or “unheart” or “unlike” a movie if a user has already favourited the movie
    - When a user favourites a movie the application should store information about the movie in localstorage using the localstorage web api
    - When a user unfavourites a movie that movie should be removed from localstorage
- A user interface element that allows the user to rate the movie
    - You can use a star system (0 – 5 stars) or a simple percentage out of 100 (eg: 75%)
    - If the user rates the movie then you should store information about the rated movie in localstorage
    - If the user has rated the movie then the application should display the users rating
 

### My Favourites Page

- All the requirements from the “All Pages” requirements plus…
- If the user has NO favourited movies, then:
    - Display a message similar to:
        - “Sorry you have no favourited movies. Search for a movie to add to your favourites.”
    - A Search form that allows a user to search for a Movie by Title
- If the user DOES HAVE favourited movies, then display all the favourited movies
    - The movies should be retrieved from localstorage
    - Each movie should display the following information
        - The movie’s poster (or generic placeholder if no poster is available)
        - The movie’s title
        - The movie’s release date
        - The movie’s rating (review rating – eg: 67%)
        - A short summary of the movies plot
        - A “More Info” button that the user can click on to get additional information on the individual movie page
            - Optionally the entire movie listing can be clickable to the individual movie page

### My Rated Page

- All the requirements from the “All Pages” requirements plus…
- If the user has NO rated movies, then:
    - Display a message similar to:
        - “Sorry you have no rated movies. Search for a movie to add to your favourites.”
    - A Search form that allows a user to search for a Movie by Title
- If the user DOES HAVE rated movies, then display all the favourited movies
    - The movies should be retrieved from localstorage
    - Each movie should display the following information
        - The movie’s poster (or generic placeholder if no poster is available)
        - The movie’s title
        - The movie’s release date
        - The movie’s rating (review rating – eg: 67%)
        - A short summary of the movies plot
        - A “More Info” button that the user can click on to get additional information on the individual movie page
            - Optionally the entire movie listing can be clickable to the individual movie page
