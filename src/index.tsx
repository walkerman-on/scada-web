import {render} from "react-dom"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"
import {ThemeProvider} from "app/providers/ThemeProvider/index"
import { Provider } from "react-redux"
import {store} from "app/providers/StoreProvider/index"

import "shared/services/firebase/firebase"

render (
    <Provider store = {store}>
        <BrowserRouter>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
)
