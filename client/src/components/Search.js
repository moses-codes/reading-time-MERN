import React from "react";

export default function Search(props) {

    const [title, setTitle] = React.useState('')

    function handleChange(event) {
        setTitle(prevTitle => event.target.value)
    }

    function searchBook(event) {
        console.log(event)
    }

    return (
        <section className="classList">
            <form>
                <input placeholder="search by title...."
                    value={title}
                    onChange={handleChange}
                ></input>
                <button onClick={searchBook}
                    type='none'
                >Search</button>
            </form>
            <ul>

            </ul>
        </section>
    )
}