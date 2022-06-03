module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{react,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            height: {
                height: "500px"
            },
            width: {
                container_width: "80%",
                mobile: "90%"
            },
            colors: {

                purple: "#006b00",
                hover_color: "#009900",
                global_blue: "#a6deea",
                red: "red",
            }



        },
    },
    plugins: [],
}