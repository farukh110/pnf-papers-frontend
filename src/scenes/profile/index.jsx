import { Breadcrumb, Button, Input } from "antd";
import Meta from "../../components/global/seo/Meta";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/api/user/userSlice";
import { ToastContainer } from "react-toastify";


const profileSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Email should be valid.").required("Email is required"),
    mobile: yup.string().required("Mobile number is required"),
});

const Profile = () => {

    const dispatch = useDispatch();
    const userState = useSelector(state => state.auth.user);

    console.log('userState: ', userState);


    return (

        <>
            <Meta
                title="Profile"
                link="/profile"
            />
            <div className="container my-4">

                <Breadcrumb
                    items={[
                        {
                            title: 'Home',
                        },
                        {
                            title: <Link to='/profile'> My Profile </Link>,
                        },
                    ]}
                />

                <div className='row'>

                    <div className='col-md-5 py-4'>
                        <div className='custom-contact-form bg-white p-3'>
                            <h1 className='form-heading'>Get In Touch</h1>

                            <Formik
                                initialValues={{
                                    firstName: userState.firstname,
                                    lastName: userState.lastname,
                                    email: userState.email,
                                    mobile: userState.mobile,
                                }}
                                validationSchema={profileSchema}
                                onSubmit={(values, { resetForm }) => {
                                    resetForm();
                                    dispatch(updateUser(values));
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit
                                }) => (
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="mb-3">
                                            <Input
                                                name="firstName"
                                                placeholder="Please enter your first name"
                                                value={values.firstName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.firstName && errors.firstName && (
                                                <div className="text-danger">{errors.firstName}</div>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <Input
                                                name="lastName"
                                                placeholder="Please enter your last name"
                                                value={values.lastName}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.lastName && errors.lastName && (
                                                <div className="text-danger">{errors.lastName}</div>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <Input
                                                name="email"
                                                placeholder="Please enter your email"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.email && errors.email && (
                                                <div className="text-danger">{errors.email}</div>
                                            )}
                                        </div>

                                        <div className="mb-3">
                                            <Input
                                                name="mobile"
                                                placeholder="Please enter your phone"
                                                value={values.mobile}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.mobile && errors.mobile && (
                                                <div className="text-danger">{errors.mobile}</div>
                                            )}
                                        </div>

                                        <Button type="primary" htmlType="submit" className='btn-submit'>
                                            Submit
                                        </Button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </>

    )
}

export default Profile;