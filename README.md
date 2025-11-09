# Shoppy

Shoppy is a modern e-commerce platform where users can order a variety of digital and physical products, filter them by price and status, and track their orders. Fully responsive and built with Next.js, TailwindCSS, and TypeScript.

!["Homepage"](./images/Home.png)

!["Shop"](./images/Shop.png)

## Tech Stack

- React 19.2
- Next.js 16.0.1
- TailwindCSS 4.1
- TypeScript
- Supabase
- date-fns
- lucide-react
- react-hot-toast
- react-range

## Installation

1. Clone the repository:

```bash
git clone https://github.com/crstelli/shoppy-website
```

2. Navigate into project folder

```bash
cd shoppy
```

3. Install dependencies

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to:

```bash
http://localhost:3000
```

## Environment Variables

You need to configure environment variables for the app to work correctly.
Create a `.env.local` file in the project root and add:

```bash
NEXT_PUBLIC_SUPABASE_URL = Your Supabase Database URL
NEXT_PUBLIC_SUPABASE_KEY = Your Supabase Key

AUTH_SECRET = NextAuth Secret

AUTH_GOOGLE_ID = Google Auth ID
AUTH_GOOGLE_SECRET = Google Auth Key
```

## Features

- Browse digital and physical products
- Filter by price range and availability
- Add items to cart and adjust quantity
- Fully responsive design
- Google Login
- Track your orders
- Change your default delivery address

## Future Improvements

- Real payments integration
- Delivery address auto-suggestion
- Wishlist
- Tracking notifications

## Author

Giuseppe - [LinkedIn](https://linkedin.com/in/crescitelli) - [Portfolio](https://crescitelli.dev)

## License

This project is licensed under the [MIT License](LICENSE).
