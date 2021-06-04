Tasty podcast site made with next.js, tailwindcss, and TypeScript

Goal of this site was to get a modern clean podcast site, drawing a lot of inspiration from:
[Here Be Monsters](https://www.hbmpodcast.com/)
[Syntax.fm](https://syntax.fm/)

This site grabs the RSS feed from Pinecast and then creates the pages for the episodes.

Eventually I would like to allow people to use this as a template for them to take and put in their own podcast from pinecast.
I'll need to build a basic backend for them to sign into and do that work, that's a bit later down the track

## Stuff it has!

- Next.js
- tailwindscss
- podcast feed
- Polls

# Todo

- [ ] Main components
  - Home
  - Episodes
  - Contact form
  - About
  - Polls
- [ ] Responsive
- [ ] Testing
- [ ] CMS backend

### testing

- [ ] snapshots
- [ ] unit testing
- [ ] interration testing

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
