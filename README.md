This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Chatbot Subdomain Deployment

The app now supports a dedicated chatbot surface on a subdomain while keeping the main site on the apex domain.

### Environment variables

Set these in the frontend runtime before building:

```bash
NEXT_PUBLIC_SITE_URL=https://britinstitute.uk
NEXT_PUBLIC_CHATBOT_SITE_URL=https://chat.britinstitute.uk
NEXT_PUBLIC_SITE_NAME="Brit Institute"
NEXT_PUBLIC_CHATBOT_SITE_NAME="Brit Institute Career Chatbot"
```

### Behavior

- `britinstitute.uk` continues serving the full marketing site.
- `chat.britinstitute.uk` rewrites to the standalone chatbot experience.
- `https://api.britinstitute.uk/api/leads` remains the lead capture endpoint.

### Hostinger VPS checklist

1. Add a DNS `A` record for `chat.britinstitute.uk` pointing to the VPS IP.
2. Add an Nginx server block for `chat.britinstitute.uk` and proxy it to the same Next.js app.
   Example: [deploy/nginx/chat.britinstitute.uk.conf.example](/home/himanshu/Desktop/newstartup/website-britinstitute/my-app/deploy/nginx/chat.britinstitute.uk.conf.example:1)
3. Export the environment variables above in the frontend service.
4. Rebuild and restart the Next.js process.
5. Issue or renew SSL for the new subdomain, then reload Nginx.
