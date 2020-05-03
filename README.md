# twentytwenty
A simple presentation viewer with automatic rendering and slide progression.

![screenshot of presentation playing](https://i.imgur.com/U52Iw80.png)

I made this in early 2020 to try out Strapi CMS and get used to using React hooks.

---
Slide content is accessed via API and rendered at run time.

A presentation can have any number of slides. A slide can have:

- title (optional)
- long text (markdown support) (optional)
- images (any number) (optional)

The big idea behind this is that presentations should be about content, and that popular presentation softwaere like Google Slides, Prezi, Powerpoint, etc are all (lack-of) style over substance.

![screenshot of front end app list of predsentations](https://i.imgur.com/SiIxzgF.png)

---
## running the project

CMS project:
```
npm install
npm start
```

client:
```
npm install
npm start
```

