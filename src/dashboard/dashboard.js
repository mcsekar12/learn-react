import React, { Component } from 'react';

import { Table, Space, Modal } from 'antd';
import './dashboard.css';
import { withRouter } from 'react-router-dom';

import * as service from '../file.service';
import { Upload, Button } from 'antd';
import {
  UploadOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Form, Input, message } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Dashboard extends Component {
  formRef = React.createRef();
  columns = [
    {
      title: 'File Id',
      dataIndex: 'id',
      key: 'id',
      align: 'center',

      render: (text) => <span>{text || '-'}</span>,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      align: 'center',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      align: 'center',

      render: (text) => <span>{text || '-'}</span>,
    },
    {
      title: 'File Name',
      dataIndex: 'file_path',
      key: 'file_path',
      align: 'center',

      render: (text) => <span>{text || '-'}</span>,
    },
    {
      title: 'Uploded At',
      dataIndex: 'created_at',
      key: 'created_at',
      align: 'center',

      render: (text) => <span>{text || '-'}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a
            download={record.file_path}
            rel="noopener noreferrer"
            href={
              'https://demo-redmapledigital.in/myserver/api/file/download/' +
              record.id
            }
          >
            <Button
              type="primary"
              shape="round"
              icon={<DownloadOutlined />}
              size="small"
            >
              Download
            </Button>
          </a>

          <Button
            danger
            shape="round"
            size="small"
            icon={<DeleteOutlined />}
            onClick={(event) => {
              event.stopPropagation();
              this.deleteFile(record.id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  state = {
    totalCount: 0,
    allOrders: [],
    dataLoad: false,
    totalOrders: 0,
    pageNumber: 1,
    pageSize: 25,
    fileList: [],
    uploading: false,
    visible: false,
    confirmLoading: false,
  };

  componentDidMount() {
    if (localStorage.getItem('login-token') !== 'token') {
      this.props.history.push('/');
    }
    this.getData();
  }

  // handleUpload = () => {
  //   const { fileList } = this.state;
  //   const formData = new FormData();

  //   this.setState({
  //     uploading: true,
  //   });
  // };

  getData() {
    service.getFiles().then((res) => {
      let data = res.data.data;
      this.setState({ allOrders: data });
    });
  }
  downloadFile(id) {
    service.getFile(id).then((res) => {
      let data = res.data;
      // let fileName = res.data.data.file_path;
      // let base64Data = this.base64ToArrayBuffer(data);
      this.download(data, 'test.pdf');
      // this.setState({ allOrders: data });
    });
  }
  download(byte, fileName) {
    var byteArray = new Uint8Array(byte);
    var blob = new Blob([byteArray], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
  deleteFile(id) {
    service
      .deleteFile(id)
      .then((res) => {
        message.success('File Deleted Successfully');
        this.getData();
      })
      .catch((err) => {
        message.error('File Deleted Failed.Try again');
      });
  }
  base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }
  onFinish = (values) => {
    this.setState({ uploading: true });

    let bodyFormData = new FormData();
    bodyFormData.append('title', values.title);
    bodyFormData.append('description', values.description);

    const { fileList } = this.state;

    fileList.forEach((file) => {
      bodyFormData.append('files', file);
    });

    service
      .uploadFile(bodyFormData)
      .then((res) => {
        this.setState({ uploading: false, fileList: [] });
        message.success('File Upoaded Successfully');
        this.getData();
        this.handleOk();
        this.onReset();
      })
      .catch((err) => {
        this.setState({ uploading: false });
        console.log(err);
        message.error('File Upoaded Failed.Please Try Again');
      });
  };

  onReset = () => {
    this.formRef.current.resetFields();
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
      confirmLoading: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState((state) => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
    const { visible, confirmLoading } = this.state;

    return (
      <div className="main__cont">
        <div className="dashboard__cont">
          <div className="table__cont">
            <Button
              className="upload__btn"
              type="primary"
              onClick={this.showModal}
              icon={<UploadOutlined />}
            >
              Upload File
            </Button>
            <Table
              columns={this.columns}
              pagination={{
                total: this.state.totalOrders,
                defaultPageSize: this.state.pageSize,
                page: this.state.pageNumber,
                current: this.state.pageNumber,
                pageSizeOptions: [25, 50],
                showSizeChanger: true,
              }}
              dataSource={this.state.allOrders}
              loading={this.state.dataLoad}
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} items`
              }
              rowKey="id"
            />
            <Modal
              title="Upload New File"
              visible={visible}
              onOk={this.handleOk}
              okType="submit"
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
              footer={[]}
            >
              <Form
                {...layout}
                name="control-hooks"
                ref={this.formRef}
                onFinish={this.onFinish}
              >
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input />
                </Form.Item>

                <Form.Item
                  name="files"
                  label="File"
                  rules={[{ required: true }]}
                >
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                  </Upload>
                </Form.Item>
                <Form.Item className="Item" {...tailLayout}>
                  <Button key="back" onClick={this.handleCancel}>
                    Cancel
                  </Button>

                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={fileList.length === 0}
                    loading={this.state.uploading}
                    style={{ marginTop: 16 }}
                  >
                    {this.state.uploading ? 'Uploading' : 'Upload'}
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
