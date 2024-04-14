const countries = ['India', 'Germany', 'Brazil', 'Egipt']
const suppliers = ['Klom', 'EcoCarbon', 'Pure Planet', 'Carbon Solutions']

const filterOptions = [
    {
        id: "suppliers",
        title: "Supplier",
        options: suppliers,
        type: "checkbox",
    },
    {
        id: "country",
        title: "Country",
        options: countries,
        type: "checkbox",
    },
]

export default filterOptions