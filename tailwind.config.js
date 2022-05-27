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

                purple: "#6A5495",
                hover_color: "#533E85"
            }



        },
    },
    plugins: [],
}