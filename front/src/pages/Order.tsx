import { Formik, Field, Form, FormikHelpers } from "formik";
import { publicRequest } from "../requests";
import React, { useEffect, useState } from "react";
import { OrderRequest, OrderRes, OrderItem } from "../types";
import { useAppSelector } from "../redux/store";
interface Values {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const Order = () => {
  const [orderResponse, setOrderResponse] = useState<any>();
  const cartProducts = useAppSelector((state) => state.cartProducts);
  console.log(cartProducts);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await publicRequest.post<OrderRequest>("/order", {
        order: [
          {
            id: 457,
            quantity: 1,
          },
          {
            id: 458,
            quantity: 3,
          },
        ],
        first_name: "string",
        last_name: "string",
        city: "Gdynia",
        zip_code: "81-350",
      });
      console.log(res.data);
      setOrderResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center text-center  min-h-[calc(100vh-20rem)]">
      <h1 className="mb-3 text-3xl">ORDER</h1>
      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          city: "",
          zip_code: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
          console.log("burdayım");
        }}
      >
        <Form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
          className="flex flex-col items-center flex-auto rounded-lg border-[0.5px] border-emerald-500 w-96 h-96 bg-blue-50 justify-evenly"
        >
          <label htmlFor="first_name">First Name</label>
          <Field id="first_name" name="first_name" placeholder="John" />

          <label htmlFor="last_name">Last Name</label>
          <Field id="last_name" name="last_name" placeholder="Doe" />

          <label htmlFor="city">City</label>
          <Field id="city" name="city" placeholder="Gdynia" />

          <label htmlFor="zip_code">Postal Code</label>
          <Field id="zip_code" name="zip_code" placeholder="81-350" />

          <button type="submit" className="btn btn-success">
            ORDER AND PAY
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Order;
