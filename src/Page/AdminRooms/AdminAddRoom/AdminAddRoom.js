import React from "react";
import {
  Button,
  Input,
  Form,
  Select,
  DatePicker,
  message,
  Checkbox,
  InputNumber,
  Switch,
} from "antd";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { addLocationAction } from "../../../redux/action/locationAction";
import TextArea from "antd/lib/input/TextArea";
import { addRoomAction } from "../../../redux/action/roomAction";

export default function AdminAddRoom() {
  const history = useHistory();
  const dispatch = useDispatch();

  //Form
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //formik
  const formik = useFormik({
    initialValues: {
      name: "",
      guests: "",
      bedRoom: "",
      bath: "",
      description: "",
      price: false,
      elevator: false,
      hotTub: false,
      pool: false,
      indoorFireplace: false,
      dryer: false,
      gym: false,
      kitchen: false,
      wifi: false,
      heating: false,
      cableTV: false,
      locationId: "",
    },
    onSubmit: (values) => {
      console.log("valuesRoom", values);
      dispatch(addRoomAction(values));
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("* Required!")
        .min(2, "* Minimum 2 characters!"),

      guests: Yup.string().required("* Required!"),
      bedRoom: Yup.string().required("* Required!"),
      bath: Yup.string().required("* Required!"),
      description: Yup.string().required("* Required!"),
      price: Yup.string().required("* Required!"),
      locationId: Yup.string().required("* Required!"),
    }),
  });

  return (
    <div className="container mx-auto" style={{ width: 800 }}>
      <Form
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 12 }}
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}
        form={form}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item label="Name">
          <Input
            name="name"
            placeholder="Enter the name"
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name && (
            <p className="text-red-600">{formik.errors.name}</p>
          )}
        </Form.Item>
        <Form.Item label="Location-Id">
          <Input
            name="locationId"
            placeholder="Enter the Location-Id"
            onChange={formik.handleChange}
          />
          {formik.errors.locationId && formik.touched.locationId && (
            <p className="text-red-600">{formik.errors.locationId}</p>
          )}
        </Form.Item>
        <Form.Item label="Guests">
          <InputNumber
            min={1}
            name="guests"
            onChange={(e) => {
              formik.setFieldValue("guests", e);
            }}
          />
          {formik.errors.guests && formik.touched.guests && (
            <p className="text-red-600">{formik.errors.guests}</p>
          )}
        </Form.Item>
        <Form.Item label="Bed Room">
          <InputNumber
            min={1}
            name="bedRoom"
            onChange={(e) => {
              formik.setFieldValue("bedRoom", e);
            }}
          />
          {formik.errors.bedRoom && formik.touched.bedRoom && (
            <p className="text-red-600">{formik.errors.bedRoom}</p>
          )}
        </Form.Item>
        <Form.Item label="Bath">
          <InputNumber
            min={1}
            name="bath"
            onChange={(e) => {
              formik.setFieldValue("bath", e);
            }}
          />
          {formik.errors.bath && formik.touched.bath && (
            <p className="text-red-600">{formik.errors.bath}</p>
          )}
        </Form.Item>
        <Form.Item label="Description">
          <TextArea
            allowClear
            onChange={(e) => {
              formik.setFieldValue("description", e.target.value);
            }}
            rows={3}
          />
        </Form.Item>
        <Form.Item label="Price (VND)">
          <InputNumber
            name="price"
            onChange={(e) => {
              formik.setFieldValue("price", e);
            }}
          />
          {formik.errors.price && formik.touched.price && (
            <p className="text-red-600">{formik.errors.price}</p>
          )}
        </Form.Item>
        <h1 className="text-lg mb-3">Convenients:</h1>
        <div className="grid grid-cols-5">
          <Form.Item label="Elevator" valuePropName="checked">
            <Switch
              value={formik.values.elevator}
              onChange={(e) => {
                formik.setFieldValue("elevator", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Hot Tub" valuePropName="checked">
            <Switch
              value={formik.values.hotTub}
              onChange={(e) => {
                formik.setFieldValue("hotTub", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Pool" valuePropName="checked">
            <Switch
              value={formik.values.pool}
              onChange={(e) => {
                formik.setFieldValue("pool", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Indoor Fireplace" valuePropName="checked">
            <Switch
              value={formik.values.indoorFireplace}
              onChange={(e) => {
                formik.setFieldValue("indoorFireplace", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Dryer" valuePropName="checked">
            <Switch
              value={formik.values.dryer}
              onChange={(e) => {
                formik.setFieldValue("dryer", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Gym" valuePropName="checked">
            <Switch
              value={formik.values.gym}
              onChange={(e) => {
                formik.setFieldValue("gym", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Kitchen" valuePropName="checked">
            <Switch
              value={formik.values.kitchen}
              onChange={(e) => {
                formik.setFieldValue("kitchen", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Wifi" valuePropName="checked">
            <Switch
              value={formik.values.wifi}
              onChange={(e) => {
                formik.setFieldValue("wifi", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Heating" valuePropName="checked">
            <Switch
              value={formik.values.heating}
              onChange={(e) => {
                formik.setFieldValue("heating", e);
              }}
            />
          </Form.Item>
          <Form.Item label="Cable TV" valuePropName="checked">
            <Switch
              value={formik.values.cableTV}
              onChange={(e) => {
                formik.setFieldValue("cableTV", e);
              }}
            />
          </Form.Item>
        </div>

        <Form.Item>
          <Button block type="primary" htmlType="submit" size="large">
            Thêm phòng mới
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
