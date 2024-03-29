/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {},
            colors: {
                grey: '#333',
                lightGrey: '#7d7789',
            },
        },
    },
    plugins: [],
}
