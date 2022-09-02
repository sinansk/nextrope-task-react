import { Formik, Field, Form, FormikHelpers, FormikProps } from "formik";
import * as Yup from "yup";
import { publicRequest } from "../utils";
import { useEffect, useState } from "react";
import { OrderRequest } from "../types";
import { useAppSelector, useAppDisptch } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { getTotalPrice, emptyCart } from "../redux/cartSlice";
import { FunctionComponent } from "react";

interface Values {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const Order: FunctionComponent<{}> = () => {
  const cartProducts = useAppSelector((state) => state.cart.cartProducts);
  const orderProducts = cartProducts.map((item) => ({
    id: item.id,
    quantity: item.quantity,
  }));
  const totalPrice = useAppSelector(getTotalPrice);
  const [orderResponse, setOrderResponse] = useState<any>();
  const [orderPrice, setOrderPrice] = useState<number>(); ///this is for showing to user order total price. bc we reseting cart after the request.

  const dispatch = useAppDisptch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    cartProducts.length === 0 && navigate("/", { replace: true });
  }, []);

  const handleSubmit = async (values: Values) => {
    try {
      const res = await publicRequest.post<OrderRequest>("/order", {
        order: orderProducts,
        first_name: values.first_name,
        last_name: values.last_name,
        city: values.city,
        zip_code: values.zip_code,
      });
      setOrderPrice(totalPrice);
      setOrderResponse(res.data);
      dispatch(emptyCart());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center text-center min-h-[calc(100vh-20rem)]">
      {!orderResponse ? (
        <div>
          <h1 className="mb-3 text-3xl">ORDER</h1>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              city: "",
              zip_code: "",
            }}
            validationSchema={Yup.object().shape({
              first_name: Yup.string().min(4).required("Required field"),
              last_name: Yup.string().min(5).required("Required field"),
              city: Yup.string().required("Required field"),
              zip_code: Yup.string().required("Required field"),
            })}
            initialStatus={{
              sent: "nope",
            }}
            onSubmit={(
              values: Values,
              { setStatus, setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(() => {
                handleSubmit(values);
                setSubmitting(false);
                setStatus("sent");
              }, 700);
            }}
          >
            {({
              status,
              setStatus,
              errors,
              touched,
              isSubmitting,
              dirty,
              handleChange,
              handleBlur,
              values,
              setFieldValue,
            }: FormikProps<Values>) => (
              <Form className="flex flex-col items-center  rounded-lg border-[0.5px] border-sky-300 w-80 sm:w-96 h-96 shadow-lg bg-blue-50 justify-evenly ">
                <div className="w-5/6 flex flex-col h-20">
                  <label htmlFor="first_name">First Name</label>
                  <Field
                    className={`${
                      errors.first_name &&
                      touched.first_name &&
                      "border-[0.5px] border-red-500"
                    } h-10 p-2 focus:outline-sky-500`}
                    id="first_name"
                    name="first_name"
                    placeholder="John"
                  />
                  {errors.first_name && touched.first_name && (
                    <div className="text-red-500 text-xs ">
                      {errors.first_name}
                    </div>
                  )}
                </div>
                <div className="w-5/6 flex flex-col h-20">
                  <label htmlFor="last_name">Last Name</label>
                  <Field
                    className={`${
                      errors.last_name &&
                      touched.last_name &&
                      "border-[0.5px] border-red-500"
                    } h-10 p-2 focus:outline-sky-500`}
                    id="last_name"
                    name="last_name"
                    placeholder="Doeee"
                  />
                  {errors.last_name && touched.last_name && (
                    <div className="text-red-500 text-xs ">
                      {errors.last_name}
                    </div>
                  )}
                </div>
                <div className="w-5/6 flex flex-col h-20">
                  <label htmlFor="city">City</label>
                  <Field
                    className={`${
                      errors.city &&
                      touched.city &&
                      "border-[0.5px] border-red-500"
                    }   p-2 focus:outline-sky-500`}
                    id="city"
                    name="city"
                    placeholder="Gdynia"
                  />
                  {errors.city && touched.city && (
                    <div className="text-red-500 text-xs ">{errors.city}</div>
                  )}
                </div>
                <div className="w-5/6 flex flex-col h-20">
                  <label htmlFor="zip_code">Postal Code</label>
                  <Field
                    className={`${
                      errors.zip_code &&
                      touched.zip_code &&
                      "border-[0.5px] border-red-500"
                    } h-10 p-2 focus:outline-sky-500`}
                    id="zip_code"
                    name="zip_code"
                    placeholder="81-350"
                  />
                  {errors.zip_code && touched.zip_code && (
                    <div className="text-red-500 text-xs ">
                      {errors.zip_code}
                    </div>
                  )}
                </div>
                <button
                  disabled={!dirty || isSubmitting}
                  type="submit"
                  className="w-5/6 mt-2 btn btn-primary"
                >
                  {isSubmitting ? "PENDING..." : "ORDER AND PAY"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <div className="grid items-center w-1/2 gap-10 font-semibold text-center h-1/2">
          <p className="text-2xl">
            {orderResponse.data.first_name} {orderResponse.data.last_name}
          </p>
          <h2 className="text-2xl">
            YOUR ORDER NUMBER IS: {orderResponse.data.id}
          </h2>
          <h2 className="text-xl">ORDER DETAILS</h2>
          <p>City: {orderResponse.data.city}</p>
          <p>Zip Code: {orderResponse.data.zip_code}</p>
          <h2 className="text-xl">TOTAL: {orderPrice} PLN</h2>
          <button onClick={navigateToHome} className="btn btn-primary">
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </div>
  );
};

export default Order;
