import { useForm } from "react-hook-form";
import useAppContext from "../context/context";

const BuyForm = ({ selectedCourse }) => {
  const { guests, setGuests } = useAppContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const WholeData = {
      data,
      selectedCourse,
    };
    console.log(WholeData);
  };

  function updateNumber(e) {
    const { name, value } = e.target;

    setGuests((guests) => ({
      ...guests,
      [name]: value,
    }));
  }

  return (
    <div className="theForm">
      <h1>Insert your personal Information</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="leftAligned">
          <label>Full Name</label> <br />
          <input
            type="text"
            placeholder="Type your full name"
            {...register("fullName")}
          />
          <br />
          <br />
          <label>Email</label> <br />
          <input
            type="text"
            type="mail"
            placeholder="example@domain.com"
            {...register("email")}
          />
          <br />
          <br />
          <label>Phone Number</label> <br />
          <input
            type="text"
            placeholder="+1 XXX-XXXXX"
            {...register("phone")}
          />
          <br />
          <br />
          <label>Country</label> <br />
          <input
            type="text"
            placeholder="Country of residence"
            {...register("country")}
          />
          <br />
          <br />
          <label>State</label> <br />
          <input type="text" placeholder="State" {...register("state")} />
          <br />
          <br />
          <label>Guests</label> <br />
          <div className="guestSelection">
            <div>
              <label>Adults</label>
              <input
                type="number"
                placeholder="adults"
                name="adults"
                onChangeCapture={updateNumber}
                min="1"
                {...register("adults")}
              />
            </div>
            <div>
              <label>Children</label>
              <input
                type="number"
                placeholder="children"
                name="children"
                onChangeCapture={updateNumber}
                min="0"
                {...register("children")}
              />
            </div>
          </div>
          <br />
          <br />
          <input
            type="submit"
            className="submitHidden sbmtbtn"
            value="Go to payment"
          />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
