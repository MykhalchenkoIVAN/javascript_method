import "./Search.css"

const Search = (props) => {
    const onChangeInput = (event) => {
        const input = document.querySelector('.search__input')
        let value = event.target.value.trim().toLowerCase();
        let stateArray = []

        const filteredElements = (arr) => {

            for (let i = 0; arr.length > i; i++) {
                const element = arr[i]
                const el = element.name.toLowerCase().includes(value);



                if (value.length > 0) {
                    if (el) {
                        stateArray.push(element)
                        props.onFilteredMethod(stateArray)
                        // remove class if input is valid
                        input.classList.remove("search__input-invalid")
                    } else if (stateArray.length == 0 && value.length > 0) {
                        // add class if input is valid
                        input.classList.add("search__input-invalid")
                    }
                } else {
                    setTimeout(function () {
                        // remove class if input is valid
                        input.classList.remove("search__input-invalid")
                        props.onFilteredMethod(true)
                    }, 300)
                }
            }
        }

        props.props.map(arr => {

            if (arr.properties.length > 0) {
                filteredElements(arr.properties)
            }
            if (arr.methods.basicMethods.length > 0) {
                filteredElements(arr.methods.basicMethods)
            }
            if (arr.methods.data1.data2.length > 0) {
                filteredElements(arr.methods.data1.data2)
            }
            if (arr.methods.data2.data3.length > 0) {
                filteredElements(arr.methods.data2.data3)
            }
            if (arr.methods.data3.data4.length > 0) {
                filteredElements(arr.methods.data3.data4)
            }
            if (arr.methods.data4.data5.length > 0) {
                filteredElements(arr.methods.data4.data5)
            }

        })
    }
    return <div className="search__wrapper">
        <input className="search__input" placeholder="Пошук" onChange={onChangeInput}></input>
    </div>
}

export default Search;