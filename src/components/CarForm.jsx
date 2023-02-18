import { useDispatch, useSelector } from "react-redux";
import { addCar } from "../store/slices/carsSlice";
import { changeCost, changeName } from "../store/slices/formSlice";

export const CarForm = () => {
  const dispatch = useDispatch();
  const {name,cost} = useSelector((state) => {
    return {
     name: state.form.name,
     cost :state.form.cost
    }
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange=(e)=>{
    const carCost = parseInt(e.target.value) || 0
    dispatch(changeCost(carCost))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addCar({name,cost}))
  }
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expended"
              value={name}
              onChange={handleNameChange}
            />
          </div>
        </div>
        <div className="field-group">
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expended"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field ">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};
