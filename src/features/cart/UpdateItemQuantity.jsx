import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decrementQuantity(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(incrementQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}
