import React from 'react'

const Card = (props) => {

    const [bookInfo, setBookInfo] = React.useState({
        pages: props.pages,
        isDisplayed: false,
    })

    const { isDisplayed } = bookInfo

    function handleChange(event) {
        const { name, value } = event.target
        console.log(name, value)
        setBookInfo(prevInfo => {
            return ({
                ...prevInfo,
                [name]: value,
            })
        })
    }

    function toggle(event) {
        setBookInfo(prevInfo => {
            return ({
                ...prevInfo,
                isDisplayed: !isDisplayed,
            })
        })
    }

    const styles = {
        display: isDisplayed ? 'block' : 'none',
    }

    function evaluateResult(divisor, pages) {
        return Math.floor(pages / divisor)
    }
    return (
        <main className='readingForm'>
            <button className='displayToggler'
                name="isDisplayed"
                onClick={toggle}
                value={bookInfo.isDisplayed}
            > {isDisplayed ? "-" : "+"} </button>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <section style={styles}>
                <form className='form'>
                    <h2>Pages-per-day goal</h2>
                    <div className='formElement'>
                        <label>How many pages are you into the book?</label>
                        <input className='progress'
                            type="text"
                            name="pagesRead"
                            value={bookInfo.pagesRead}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='formElement'>
                        <label>How many pages will you read a day?</label>
                        <input className='progress'
                            type="text"
                            name="pagesGoal"
                            onChange={handleChange}
                        />
                    </div>
                    <h3>It will take {bookInfo.pagesGoal ? `${evaluateResult(bookInfo.pagesGoal, bookInfo.pages - bookInfo.pagesRead)} days` : '...'}</h3>
                </form>

                <form className='form'>
                    <h2>Finish-by-date goal</h2>
                    <div className='formElement'>
                        <label>How many pages are you into the book?</label>
                        <input className=''
                            type="text"
                            name="pagesRead"
                            onChange={handleChange}
                            value={bookInfo.pagesRead} />
                    </div>
                    <div className='formElement'>
                        <label>How many days do you have?</label>
                        <input className='days'
                            type="number"
                            name='daysToRead'
                            onChange={handleChange}
                            value={bookInfo.daysToRead} />
                    </div>
                    <h3>Read {bookInfo.daysToRead ? `${evaluateResult(bookInfo.daysToRead, bookInfo.pages - bookInfo.pagesRead)} pages-per-day` : '...'}</h3>
                </form>
            </section>
        </main >
    )
}

export default Card