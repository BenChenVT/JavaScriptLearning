

// store JSX in a single variable
const page = (
    <div>
        <h1>this is example</h1>
        <p>This is a paragraph</p>
    </div> // these are called JSX
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <h1>hello everyone</h1>
</React.StrictMode>)


root.render(page)