import { useState } from "react";
import "./index.css";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting},
  } = useForm();
 async function handleClick(data) {
    // api call  simulate
    await new Promise((resolve) => setTimeout(resolve,4000))
    console.log("form submitted", data);
  }

  return (
// First form ***************

    <form onSubmit={handleSubmit(handleClick)}>
      <div>
        <label> First Name:</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "Min length atleat 3" },
            maxLength: { value: 6, message: "Max length atleat 6" },
          })}
        />
        {errors.firstName && (
          <p className="error">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label> Middle Name:</label>
        <input {...register("middleName")} />
      </div>
      <br />
      <div>
        <label> Last Name:</label>
        <input
          {...register("lastName", {
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Last name is not as per the rules",
            },
          })}
        />
         {errors.lastName && <p className="error">{errors.lastName.message}</p> }
      </div>
      <br />
      <input type="submit" disabled={isSubmitting}value={isSubmitting ? 'submitting':'Submit'} />
    </form>


//     /// Second Form 
// <form onSubmit={handleSubmit(handleClick)}>
// <div>
// <label>Name</label>
// <input {...register('name')} />
// <br />
// <label>Gender</label>
// <select {...register('gender') } >
//   <option value="male">Male</option>
//   <option value="female">Female</option>
//   <option value="other">Other</option>
// </select>
// <br />
// <input type="submit" />
// </div>

// </form>
  );
}

export default App;
