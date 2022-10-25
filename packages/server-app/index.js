const express = require("express");
const Sum = require("@lerna/sum"); 
const PORT = process.env.PORT || 5000;
const app = express();

app.use("/", (req, res) => {
    const ans = Sum(2, 1);
    res.send(`Server app running and the sum is ${ans}`);
});

app.listen(PORT, (error) => {
    if(error) {
        console.log("Error", error);
    } else {
        console.log(`Server app upp and running at port ${PORT}`);
    };
});