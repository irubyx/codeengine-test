const { default: axios } = require("axios")

const main = async () => {
    console.log(process.env.URL)
    const { data: response } = await axios.get(process.env.URL)
    console.log(response)
}

main()