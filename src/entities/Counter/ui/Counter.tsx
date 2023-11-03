import { useDispatch, useSelector } from "react-redux";
import {Button} from "shared/ui/Button/index"
import { counterActions } from "../model/slice/counterSlice";
import { StateScheme } from "app/providers/StoreProvider/config/StateScheme";

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector((state:StateScheme) => state.counter)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>value</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
            
        </div>
    );
};
