const heading = React.createElement("h1", { id: "heading" }, "Hello World From React!")

const root = ReactDOM.createRoot(document.getElementById("root"));



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h1 tag")

        ]
    ),
    React.createElement("div", { id: "child2" },
        [
            React.createElement("h1", {}, "I'm an h1 tag"),
            React.createElement("h2", {}, "I'm an h1 tag")

        ]
    )
])

root.render(parent)
