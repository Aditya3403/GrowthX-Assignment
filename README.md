# 🎬 Assignment: SDE Frontend

This is a minimal animated splash screen project built with **Next.js**, **Tailwind CSS** and **Framer Motion**. It demonstrates how to sequentially animate multiple elements with scale, rotation, opacity, and coordinated upward movement — followed by a timed fade-out.

---

## 🚀 Tech Stack

- **Next.js** – React framework for server-side rendering and routing
- **Framer Motion** – Powerful React animation library
- **Tailwind CSS** – For quick utility-based styling
- **React** – Component-based UI logic

---

## Code Snippet

        {/* First Element */}
        <motion.img
          src="/First.png"
          alt="First"
          initial={{ x: "-10vw", rotate: -180, scale: 0 }}
          animate={{
            x: 0,
            rotate: 0,
            scale: 0.8,
            y: startMoveUp ? -50 : 0,
            opacity: fadeOut ? 0 : 1,
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-5 h-5"
        />

        {/* Second Element */}
        <motion.img
          src="/Second.png"
          alt="Second"
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: fadeOut ? 0 : 1,
            y: startMoveUp ? -50 : 0, 
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="w-12 h-12"
        />
      </div>

      {/* Third Element */}
      <motion.img
        src="/Third.png"
        alt="Third"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: showThird ? (fadeOut ? 0 : 1) : 0,
          y: startMoveUp ? -50 : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="w-20 h-auto"
      />


## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/GrowthX-Assignment.git
cd animateapp
```

### 2. Install Dependencies

Choose your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.


---

## 📁 File Structure

```
.
├── app
│   └── page.tsx        
├── public
│   ├── First.png
│   ├── Second.png
│   └── Third.png
├── package.json
└── README.md
```

## 📦 Dependencies

```json
"dependencies": {
  "framer-motion": "^11.x",
  "next": "^14.x",
  "react": "^18.x",
  "react-dom": "^18.x"
}
```


## 🙌 Credits

Created with ❤️ by Aditya Bansal using Next.js and Framer Motion.
