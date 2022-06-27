import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/action/userAction";
import { useHistory } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("* Required!")
        .email("Invalid email format!"),

      password: Yup.string()
        .required("* Required!")
        .min(6, "* Minimum 6 characters!"),
    }),

    onSubmit: (values) => {
      console.log("valuesSubmit", values);

      dispatch(loginUserAction(values));
      // setTimeout(() => {
      //   history.push("/");
      // }, 1000);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h1 className="text-5xl text-blue-600 mb-16">Đăng nhập</h1>
      {/* Email input */}
      <div className="mb-6">
        <input
          onChange={formik.handleChange}
          name="email"
          type="text"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Nhập địa chỉ email"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-600">{formik.errors.email}</p>
        )}
      </div>
      {/* Password input */}
      <div className="mb-6">
        <input
          onChange={formik.handleChange}
          name="password"
          type="password"
          className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput2"
          placeholder="Nhập mật khẩu"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-600">{formik.errors.password}</p>
        )}
      </div>

      <div className="text-center lg:text-left">
        <button
          type="submit"
          className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Đăng nhập
        </button>
      </div>
    </form>
  );
}
