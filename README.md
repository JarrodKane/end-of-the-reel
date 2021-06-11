# Podcast Site

Tasty podcast site made with next.js, tailwindcss, and TypeScript.
The podcast host is Pinecast.
Eventually I would like to build this into a bigger project

[endofthereel.com](https://www.endofthereel.com/)

## Related

Goal of this site was to get a modern clean podcast site, drawing a lot of inspiration from:

[Here Be Monsters](https://www.hbmpodcast.com/)

[Syntax.fm](https://syntax.fm/)

### Resources

[https://usehooks.com/useWindowSize/](https://usehooks.com/useWindowSize/) for the useWindowSize Hook

This site grabs the RSS feed from Pinecast and then creates the pages for the episodes.

Eventually I would like to allow people to use this as a template for them to take and put in their own podcast from pinecast.
I'll need to build a basic backend for them to sign into and do that work, that's a bit later down the track

## Tech Stack

**Hosting:** [Vercel hosting](https://vercel.com/)

**Client:** [Next.js](https://nextjs.org/), [react](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Tailwindscss](https://tailwindcss.com/)

## Features

- Static site generation
- Responsive design
- Persistent podcast player

## Todo

- [x] Main components

  - [x] Home
  - [x] Episodes
  - [x] About
  - [ ] Polls
  - [ ] Contact form

- [ ] Responsive
- [ ] Testing

### testing

- [ ] snapshots
- [ ] unit testing
- [ ] interration testing

## Run Locally

Clone the project

```bash
  git clone https://github.com/JarrodKane/end-of-the-reel
```

Go to the project directory

```bash
  cd end-of-the-reel
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?
