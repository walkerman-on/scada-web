import {render} from "react-dom"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"
import {ThemeProvider} from "app/providers/ThemeProvider/index"
import { StoreProvider } from "app/providers/StoreProvider"

render (
    <StoreProvider>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById("root")
)
