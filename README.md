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
bun build
```

artifacts will be generated in the `dist` folder.

### How to Run with Node

To run the project in development mode, run:

```sh
bun dev
```

To start the project in production mode, run:

```sh
bun start
```

### Public Directory

The `public` directory is used to serve static assets. Files in this directory are served at the root URL.

For example, if you add a file named `logo.png` in the `public` directory, it will be available at `http://localhost:3000/logo.png`.

### Environment Variables

Vite supports environment variables and modes. You can define environment variables in `.env` files. For example, to define a variable for development mode, create a file named `.env.development` and add your variables:

```bash
VITE_API_URL=https://api.example.com
```

To access these variables in your code, use the `import.meta.env` object:

```javascript
console.log(import.meta.env.VITE_API_URL)
```

For more information, refer to the [Vite Environment Variables and Modes](https://vite.dev/guide/env-and-mode#modes) documentation.

## Husky

To set up Husky, run the following command:

TODO: husky is not work on bun will fix later

```sh
bun prepare
```

This will configure Husky to manage your Git hooks.

## Dependencies tools

- bun
- zod
- clsx
- tailwindcss
