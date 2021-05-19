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
        <label>Full Name</label> <br />
        <input defaultValue="name" {...register("fullName")} />
        <br />
        <br />
        <label>Email</label> <br />
        <input defaultValue="email" type="mail" {...register("email")} />
        <br />
        <br />
        <label>Phone Number</label> <br />
        <input defaultValue="phone" {...register("phone")} />
        <br />
        <br />
        <label>Country</label> <br />
        <input defaultValue="country" {...register("country")} />
        <br />
        <br />
        <label>State</label> <br />
        <input defaultValue="state" {...register("state")} />
        <br />
        <br />
        <input type="submit" value="Go to payment" />
      </form>
    </div>
  );
};

export default BuyForm;
