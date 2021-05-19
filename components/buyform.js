import { useForm } from "react-hook-form";

const BuyForm = ({ selectedCourse }) => {
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

  return (
    <div className="theForm">
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
          <input type="submit" value="Go to payment" />
          <br />
          <br />
          <br />
        </div>
      </form>
    </div>
  );
};

export default BuyForm;
