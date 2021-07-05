# Index

- [Demo](#demo)
- [Hosting](#host)
- [Motivation](#motivation)
- [Development phase](#dev-phase)
- [Tech Stack / Dependencies](#deps)
- [Features](#features)
- [Run locally](#run)
- [Authors](#authors)

<h2>KinoWiki</h2>

This is a small project built on top of the [MovieDB API](https://www.themoviedb.org/) using [NextJS](https://nextjs.org/).

It is a web app that lets users search and find movies or actors, lookup similar movies to the ones searched for and view a perosn's filmography.

<h2 id="demo">Demo</h2>

[KinoWIKI](https://kinowiki.vercel.app/)

<h2 id="host">Hosting</h2>

This web app is hosted on [Vercel](https://vercel.com/)
  
<h2 id="motivation">Motivation</h2>

This is my first ever project since I started learning front-end development.

It is made as a potfolio project to showcase to recruiters. 


<h2 id="dev-phase">Development phase</h2>

This was not a particularily difficult project to create.

The most time consuming aspect of the project was figuring out the file structure, maintinaining component re-usability and applying styling and responsiveness.

Concerning the app's functionality and logic, it was pretty straight-forward in implementation. By leveraging the SSR and SSG and the MovieDB API coupled with SWR's automatic request caching, it was an overall pleasant experience and I enjoyed my time working on it. 

<h2 id="deps">Tech Stack / Dependencies</h2>

- [NextJS](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Sass](https://sass-lang.com/)
- [Axios](https://github.com/axios/axios)
- [SWR](https://swr.vercel.app/)
- [uuid](https://www.npmjs.com/package/uuid)

  
<h2 id="features">Features</h2>

- Light/dark mode toggle
- Display language toggle (ru, en)
- Search functionality (movies, actors)
- Pagination for movie search results (the link to the pagination page is appended to the search result list)
- Custom 404 page
- Movies slider (top 10 trending movies)
- Responsive design (grid, flexbox)
- Sorting movies by year, by genre, by popularity and alphabetically   

  
<h2 id="run">Run Locally</h2>

To run the project locally you have to provide your own MovieDB API key.

Clone the project

```bash
  git clone https://github.com/SamyZog/kinowiki
```

Go to the project directory

```bash
  cd kinowiki
```

Create .env.local file and add your api key

```bash
  echo "TMDB_API_KEY=<<your_api_key>>" > .env.local
```

```bash
  echo "NEXT_PUBLIC_TMDB_API_KEY=<<your_api_key>>" >> .env.local"
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

  
<h2 id="authors">Authors</h2>

- [@SamyZog](https://www.github.com/SamyZog)

  
