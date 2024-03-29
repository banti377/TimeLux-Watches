import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { BE_URL } from "../../../config";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../redux/fetures/auth/authSlice";
import { Button } from "reactstrap";

export default function LoginForm() {
  let [Data, setData] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post(`${BE_URL}/user/signin`, data)
      .then((resData) => {
        dispatch(login(resData.data));
        console.log("----", resData.data);
        // do form blanck
        setData({
          email: "",
          password: "",
        });
        if (resData.data.data.userType === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <form
          style={{ backgroundColor: "#BAB86C" }}
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column w-25 gap-2 p-4 border-1 rounded-3 m-4"
        >
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            onChange={(e) => setData({ ...Data, email: e?.target?.value })}
            value={Data?.email}
            className="p-1 ps-3 border-0 rounded-3"
            id="email"
            placeholder="Enter your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            onChange={(e) => setData({ ...Data, password: e?.target?.value })}
            id="password"
            value={Data?.password}
            className="p-1 ps-3 border-0 rounded-3"
            placeholder="Enter your Password"
          />
          {errors.name && <span>This field is required</span>}
          <Link to={"/signup"}>Create new Account..?</Link>
          <Button color="danger" className="w-100">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

/*

    name:  "urvish",
    email: "uv@gmail.com",
    number: "7575083084",
    password: "123456",
    age: 23,
    address: [
      {
        add:"A-308 abc",
        city: "surat",
        state: "gujrat",
        pinCode: "395007",
      },
    ], */
