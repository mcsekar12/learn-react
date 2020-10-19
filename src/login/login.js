import React, { Component } from 'react';
import './login.css';
import { Form, message, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
class Login extends Component {
  componentDidMount() {
    localStorage.clear();
  }
  onFinish = (value) => {
    let { username, password } = value;
    let pass = btoa(password);

    if (
      username === 'dm.redmaple@gmail.com' &&
      pass === 'YWRtaW5AcmVkbWFwbGU='
    ) {
      localStorage.setItem('login-token', 'token');
      this.props.history.push('/dashboard');
      message.success('login success');
    } else {
      localStorage.clear();
      message.error('username or password is wrong');
    }
  };
  render() {
    return (
      <div className="form">
        <div className="form-toggle"></div>
        <div className="form-panel one">
          <div className="form-header">
            <h1>Account Login</h1>
          </div>
          <div className="form-content">
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={this.onFinish}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: 'Please input your username!' },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Log In
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
