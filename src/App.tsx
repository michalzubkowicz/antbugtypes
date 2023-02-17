import React from 'react';
import './App.css';
import {Button, Checkbox, Form, Input} from 'antd';

export type FormDataModel = {
  username: string;
  password: string;
}

function App() {
  const [form] = Form.useForm<FormDataModel>();

  return (
    <Form
      form={form}
    >
      <Form.Item
        label="Username"
        name="INVALID_FORM_NAME"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="INVALID_FORM_NAME2"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password/>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default App;
