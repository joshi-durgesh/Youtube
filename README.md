# Youtube Clone

## Step-1 create our app

        npx create-react-app Youtube-Clone

## Step-2 installing and configuring tailwind

### install tailwind

        npm i -D tailwindcss

### configure

#### initialize

        npx tailwindcss init

#### tailwind.config.js

add this inside content

        "./src/\*_/_.{js,jsx}"

#### index.js

add this inside index.js

        @tailwind base;
        @tailwind components;
        @tailwind utilities;
