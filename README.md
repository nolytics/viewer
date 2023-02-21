# viewer

Visualize your website analytics

## Hooks

This repository is configured with client-side Git hooks which you need to install by running the following command:

```bash
./hooks/INSTALL
```

## Development

Once you've created a project and installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## Deploy

You can deploy viewer on GitHub Pages:

gh_pages_repo_url=<repo url>

```bash
npm run build && touch build/.nojekyll && npx gh-pages -d build -b master -r $gh_pages_repo_url -t true
```
