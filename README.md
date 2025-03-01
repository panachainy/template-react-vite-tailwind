# Setup

[Web](https://template-react-vite-tailwind.pages.dev)

## Install Tailwind CSS

1. [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite)
2. [Tailwind UI Icons](https://tailwindui.com/documentation#icons)

## Install Prettier

[Automatic Class Sorting with Prettier](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

## Command Documentation

### How to Run static

To build the project, run:

```sh
pnpm build
```

artifacts will be generated in the `dist` folder.

### How to Run with Node

To run the project in development mode, run:

```sh
pnpm dev
```

To start the project in production mode, run:

```sh
pnpm start
```

### Public Directory

The `public` directory is used to serve static assets. Files in this directory are served at the root URL.

For example, if you add a file named `logo.png` in the `public` directory, it will be available at `http://localhost:3000/logo.png`.
