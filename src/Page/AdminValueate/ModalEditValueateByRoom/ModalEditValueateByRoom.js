import React, { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Radio } from "antd";
import { useSelector } from "react-redux";

export const ModalEditValueateByRoom = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  const { valueateDetail } = useSelector((state) => state.valueateReducer);

  const [state, setState] = useState("");

  useEffect(() => {
    setState(valueateDetail.content);
  }, [valueateDetail]);

  console.log("valueateDetail.content", valueateDetail.content);
  console.log("state", state);

  return (
    <Modal
      visible={visible}
      okText="Update"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        // initialValues={{
        //   content: 3,
        // }}
      >
        <Form.Item
          name="content"
          label="Your reviews"
          rules={[
            {
              required: true,
              message: "Please input your reviews!",
            },
          ]}
        >
          <Input
            type="textarea"
            value={valueateDetail.content}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
