# Mini Storefront

A simple storefront built with Next.js, showcasing products from the Fake Store API.

- **Next.js App Router** for routing and server components
- **Tailwind CSS** + **ShadCN/UI** for styling
- **Dynamic product listing** on the homepage
- **Individual product detail pages** with dynamic routing and OG metadata
- **Image optimization** using `next/image`
- **Error handling** for invalid product IDs and loading states


## 🔧 Setup Instructions

- npm or pnpm

### 1. Clone the repository

```bash
git clone https://github.com/Siirusho/next-task-storefront.git
cd next-task-storefront
```

### 2. Install dependencies

```bash
npm install
```


### 3. Development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser. The homepage will list products, and clicking on a product will go to its detail page.

## 💡 Decisions & Known Limitations

- **App Router**: Leveraged Next.js 13+ App Router for server components and built-in data fetching.
- **Data fetching**: Used server-side `fetch()` in page components and `generateMetadata()`.
- **Styling**: Preferred **ShadCN/UI** components on top of Tailwind for consistent, accessible UI.
- **Error handling**:
  - Fallback UI for invalid product IDs (404)
  - Loading states for data fetches
- **SEO & OG**: Dynamic metadata per product via `generateMetadata()`.
