import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { env } from "../Components/Config";

function Add_mentors() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_no: "",
      topics: "",
    },
    onSubmit: async (values) => {
      await axios.post(`${env.api}/mentors`, values);
      navigate("/Mentors");
    },
  });

  return (
    <main id="main" class="main">
      <form className="col-6 offset-3 mt-5" onSubmit={formik.handleSubmit}>
        <div class="mb-3 ">
          <label class="form-label">Name</label>
          <input
            type={"string"}
            class="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type={"email"}
            class="form-control"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
          />
        </div>
        <div class="mb-3 ">
          <label class="form-label">Phone Number</label>
          <input
            type={"number"}
            class="form-control"
            value={formik.values.phone_no}
            onChange={formik.handleChange}
            name="phone_no"
          />
        </div>
        <div class="mb-3 ">
          <label class="form-label">topics</label>
          <input
            type={"string"}
            class="form-control"
            value={formik.values.topics}
            onChange={formik.handleChange}
            name="topics"
          />
        </div>
        <button type="submit" value={"Submit"} class="btn btn-primary">
          Submit
        </button>
      </form>
    </main>
  );
}

export default Add_mentors;
