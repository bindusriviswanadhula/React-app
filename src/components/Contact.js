const Contact = () => {
    return(
        <div>
            <h1 className="font-semibold text-xl p-4 m-4 ">This is contact Page</h1>
            <form>
                <input type="text" 
                className="border-black p-2 ml-4 sm:ml-8 border" 
                placeholder="name">

                </input>

                <input type="text"
                className="border-black ml-4 p-2 m-4 border" 
                placeholder="message">

                </input>
                <div className="sm:m-4">

                <button className="border border-black p-2 m-2 ml-4 bg-gray-100 rounded-lg">
                Submit
                </button>
                </div>
                

            </form>

        </div>
    )
}

export default Contact;