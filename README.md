
<h1>KinoWiki</h1>

This is a small project built on top of the [MovieDB API](https://www.themoviedb.org/) using [NextJS](https://nextjs.org/).

It is a web app that lets users search and find movies and actors, lookup similar movies and view a perosn's filmography.

## Demo

[KinoWIKI](https://kinowiki.vercel.app/)

  
## Motivation

This is my first ever project since I started learning front-end development.

It is made as a potfolio project to showcase to recruiters. 

  
## Development phase

This was not a particularily difficult project to create.

The most time consuming aspect of the project was figuring out the file structure, maintinaining component re-usability and applying styling and responsiveness.

Concerning the app's functionality and logic, it was pretty straight-forward in implementation. By leveraging the SSR and SSG and the MovieDB API coupled with SWR's automatic request caching, it was an overall pleasant experience and I enjoyed my time working on it. 
## Tech Stack / Dependencies

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [SWR](https://swr.vercel.app/)
- [uuid](https://www.npmjs.com/package/uuid)

  
## Features

- Light/dark mode toggle
- Display language toggle (ru, en)
- Search functionality (movies, actors)
- Pagination for movie search results (the link to the pagination page is appended to the search result list)
- Custom 404 page
- Movies slider (top 10 trending movies)
- Responsive design (grid, flexbox)
- Sorting movies by year, by genre, by popularity and alphabetically   

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/SamyZog/kinowiki
```

Go to the project directory

```bash
  cd kinowiki
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
## Authors

- [@SamyZog](https://www.github.com/SamyZog)

  
