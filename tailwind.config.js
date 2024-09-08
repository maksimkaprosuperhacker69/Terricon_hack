/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {

                main:"#4CBCA1",
                second:"#9DF3C4",
                thrid:"#21846C"
            },
            fontFamily:{
                intro: ["intro", "sans-serif"],
            }
        },
    },
    plugins: [],
}

