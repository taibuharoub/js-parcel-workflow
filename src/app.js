import Header from "./components/Header";
import User from "./components/User";

//directky import the scss file
import "./scss/app.scss"

const app = async () => {
    document.getElementById("header").innerHTML = Header();
    document.getElementById("user").innerHTML = await User();
}

//Init app
app();

console.log("It works!");