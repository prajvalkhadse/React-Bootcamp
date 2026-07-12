/*

Nested Structur HTML we also create in react old way

<div id = "parent"> 
<div id = "child">
<h1> Im a H1 Tag</h1>
</div
</div>
// if there are two children then we  use Array []
// Add sibling to show in react html version

*/

// const heading = React.createElement("h1", {id:"heading"}, "Hello Word From React");

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"Child"},
       [
         React.createElement("h1",{},"Im  an H1 tag"),
         React.createElement("h2",{},"Im  an H2 tag")
       ]
    ),
    React.createElement("div",{id:"Child"},
        [
         React.createElement("h1",{},"Im  an H1 tag"),
         React.createElement("h2",{},"Im  an H2 tag")
       ]
    )
);


console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
