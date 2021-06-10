Tasty podcast site made with next.js, tailwindcss, and TypeScript.
[endofthereel.com](https://www.endofthereel.com/)

It's current a work in progress, the todos section have some of what's left to do.

Goal of this site was to get a modern clean podcast site, drawing a lot of inspiration from:
[Here Be Monsters](https://www.hbmpodcast.com/)
[Syntax.fm](https://syntax.fm/)

This site grabs the RSS feed from Pinecast and then creates the pages for the episodes.

Eventually I would like to allow people to use this as a template for them to take and put in their own podcast from pinecast.
I'll need to build a basic backend for them to sign into and do that work, that's a bit later down the track

#### This project is currently in stage one.

Stages:
1 - Personal site only taking the feed
2 - More module, turning this project more into a template where anyone with some coding skills
can simply replace the feed to get their own website
3 - Backend build so that it's less tech heavy for someone to login, change feed, and change other components

### Cool Tech used

- [Vercel hosting](https://vercel.com/)
- [Next.js](https://nextjs.org/)
- [react](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwindscss](https://tailwindcss.com/)

- [UUID](https://www.npmjs.com/package/uuid)
- [simple-iocns](https://simpleicons.org/)
- [html-react-parser](https://www.npmjs.com/package/html-react-parser)

## Stuff it has!

- Static site generation
- Responsive design
- Persistent podcast player
- Polls

# Todo

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
