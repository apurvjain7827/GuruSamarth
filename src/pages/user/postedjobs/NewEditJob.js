import { Col, Form, message, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addNewJobPost, editJobDetails, getJobById } from "../../../apis/jobs";
import PageTitle from "../../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../../redux/alertSlice";

function NewEditJob() {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [jobData, setJobData] = React.useState(null);
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;
      if (params.id) {
        response = await editJobDetails({
          ...values,
          id: params.id,
        });
      } else {
        response = await addNewJobPost(values);
      }
      if (response.success) {
        message.success(response.message);
        navigate("/posted-jobs");
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const getData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getJobById(params.id);
      dispatch(HideLoading());
      if (response.success) {
        setJobData(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (params.id) {
      getData();
    } else {
      setJobData({});
    }
  }, []);

  return (
    <div>
      <PageTitle title={params.id ? "Edit Job" : "Add New Job Post"} />
      {jobData && (
        <Form layout="vertical" onFinish={onFinish} initialValues={jobData}>
          <Row gutter={[10, 10]}>
            <Col span={12}>
              <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Institute Type"
                name="industry"
                rules={[{ required: true, message: "required" }]}
              >
                <select name="" id="">
                  <option value="">Select</option>

                  <option value="school">School</option>
                  <option value="college">College</option>
                  <option value="coaching">Coaching Centre</option>
                </select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                label="Location"
                name="location"
                rules={[{ required: true, message: "required" }]}
              >
                <select name="" id="">
                  <option value="">Select</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item
                label="Institute Name"
                name="company"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Salary"
                name="salary"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Job Type"
                name="jobType"
                rules={[{ required: true, message: "required" }]}
              >
                <select name="" id="">
                  <option value="">Select</option>
                  <option value="fulltime">Full Time</option>
                  <option value="parttime">Part Time</option>
                  <option value="contract">Contract</option>
                </select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Last Date To Apply"
                name="lastDateToApply"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="date" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Experience (in years)"
                name="experience"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="Notice Period (in days)"
                name="noticePeriod"
                rules={[{ required: true, message: "required" }]}
              >
                <input type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Job Description"
                name="jobDescription"
                rules={[{ required: true, message: "required" }]}
              >
                <textarea type="text" />
              </Form.Item>
            </Col>
          </Row>

          <div className="d-flex justify-content-end gap-2">
            <button
              className="primary-outlined-btn"
              onClick={() => navigate("/posted-jobs")}
            >
              Cancel
            </button>
            <button className="primary-contained-btn" type="submit">
              Save
            </button>
          </div>
        </Form>
      )}
    </div>
  );
}

export default NewEditJob;
