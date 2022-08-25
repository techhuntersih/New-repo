import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";


//radio button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Input } from "@mui/material";

function HospitalEmpanelment() {
    const onSubmit = (values, submittingObject) => {
        console.log(values);
        submittingObject.resetForm();
    };
    const formik = useFormik({
        initialValues: {

            name: "",
            gender: "",
            dob: "",
            regno: "",
            addr: "",
            tnum: "",
            mnum: "",
            ema: "",
            pq: "",
            exp: "",
            dec: "",
            place: "",
            date: "",
            sign: "",

        },
        validateOnBlur: true,


        onSubmit,
        validationSchema: Yup.object({
            name: Yup.string().required("Name is Required")
                .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed in this field "),
            gender: Yup.string(),
            dob: Yup.date(),
            regno: Yup.number(),
            tnum: Yup.number(),
            pnum: Yup.number(),
            ema: Yup.string().email("Please Enter a Valid E-mail Id").required("E-mail is required"),


            pq: Yup.string(),
            dec: Yup.string(),
            place: Yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed in this field "),
            date: Yup.date(),

        }),
    });





    return (
        <div className="container form">
            <h4>ALI YAVAR JUNG NATIONAL INSTITUTE FOR THE HEARING HANDICAPPED
                K.C. Marg, Bandra Reclamation, Bandra (w), Mumbai-400050.
                (Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment, Government of India, New Delhi)
            </h4>
            <h4>
                EXPRESSION OF INTEREST BY ASLPs/AVTs FOR PARTICIPATION
                IN COCHLEAR IMPLANTATION UNDER REVISED ADIP SCHEME (2014-15)
            </h4>
            <br />
            <h4>APPLICATION FORM</h4>
            <br />
            <h5>
                Director, Ali Yavar Jung National Institute for the Hearing Handicapped, K.C. Marg, Bandra Reclamation, Bandra (w), Mumbai-400050 superscribing ‘Expression of Interest by ASLPs/AVTs for Participation in CI service under ADIP’. Application with incomplete information will not be considered
            </h5>
            <form className="" autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="row">

                    <div className="col-lg-12 col-12">
                        <label>Name of the professional</label>
                        <input
                            type="text"
                            name="name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            pattern="^[A-Za-z -]+$"
                            title="Please Enter Valid Name"
                        />{" "}
                        {formik.errors.name && formik.touched.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}{" "}
                    </div>

                    <div col-lg-12 col-12>
                        <FormControl>
                            <FormLabel align-items="left" id="row-radio-buttons-group-label">Gender</FormLabel>
                            <RadioGroup row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                            >
                                <FormControlLabel control={<Radio />} label="Male" type="radio" name="gender"
                                    onChange={formik.handleChange}
                                    value="Male" />

                                <FormControlLabel control={<Radio />} label="Female" type="radio" name="gender"
                                    onChange={formik.handleChange}
                                    value='Female' />
                                {formik.errors.gender && formik.touched.gender ?
                                    <div>{formik.errors.gender}</div>
                                    : null}
                            </RadioGroup>
                        </FormControl>

                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            onChange={formik.handleChange}
                            value={formik.values.dob}

                        />{" "}
                        {formik.errors.dob && formik.touched.dob ? (
                            <div className="error">{formik.errors.dob}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>RCI Registration Number</label>
                        <input
                            type="number"
                            name="regno"
                            onChange={formik.handleChange}
                            value={formik.values.regno}
                        />{" "}
                        {formik.errors.regno && formik.touched.regno ? (
                            <div className="error">{formik.errors.regno}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Address(Complete)</label>
                        <input
                            type="text"
                            name="addr"
                            onChange={formik.handleChange}
                            value={formik.values.addr}
                            pattern="^[A-Za-z -]+$"
                            title="Please Enter Valid Address"
                        />{" "}
                        {formik.errors.addr && formik.touched.addr ? (
                            <div className="error">{formik.errors.addr}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Telephone Number</label>
                        <input
                            type="number"
                            name="tnum"
                            onChange={formik.handleChange}
                            value={formik.values.tnum}
                        />{" "}
                        {formik.errors.tnum && formik.touched.tnum ? (
                            <div className="error">{formik.errors.tnum}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Mobile Number</label>
                        <input
                            type="number"
                            name="mnum"
                            onChange={formik.handleChange}
                            value={formik.values.mnum}
                        />{" "}
                        {formik.errors.mnum && formik.touched.mnum ? (
                            <div className="error">{formik.errors.mnum}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>E-mail Id</label>
                        <input
                            type="email"
                            name="ema"
                            onChange={formik.handleChange}
                            value={formik.values.ema}
                        // title="Please Enter Valid E-mail ID"
                        />{" "}
                        {formik.errors.ema && formik.touched.ema ? (
                            <div className="error">{formik.errors.ema}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">

                        <label>Professional Qualifications</label><br />
                        <h7>[includes qualification, university, percentage, marks obtained, attempts(if any)]</h7>
                        <input
                            type="text"
                            name="pq"
                            onChange={formik.handleChange}
                            value={formik.values.pq}
                        />{" "}
                        {formik.errors.pq && formik.touched.pq ? (
                            <div className="error">{formik.errors.pq}</div>
                        ) : null}{" "}
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>Experience in the field of therapy for CI recipients</label>
                        <input
                            type="number"
                            name="exp"
                            onChange={formik.handleChange}
                            value={formik.values.exp}
                        />{" "}
                        {formik.errors.exp && formik.touched.exp ? (
                            <div className="error">{formik.errors.exp}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Declaration</label>
                        <input
                            type="text"
                            name="dec"
                            placeholder="inga ena varum nu crt ah therila"
                            onChange={formik.handleChange}
                            value={formik.values.dec}
                        />{" "}
                        {formik.errors.dec && formik.touched.dec ? (
                            <div className="error">{formik.errors.dec}</div>
                        ) : null}{" "}
                        <h7>I,_________ , hereby declare that the above stated information is true and I am willing to provide the services at the rate decided by the AYJNIHH.</h7>
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>Place</label>
                        <input
                            type="text"
                            name="place"
                            onChange={formik.handleChange}
                            value={formik.values.place}
                            pattern="^[A-Za-z -]+$"
                            title="Please Enter Valid Nameofthecentre"
                        />{" "}
                        {formik.errors.place && formik.touched.place ? (
                            <div className="error">{formik.errors.place}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Date</label>
                        <input
                            type="date"
                            name="date"
                            onChange={formik.handleChange}
                            value={formik.values.date}

                        />{" "}
                        {formik.errors.date && formik.touched.date ? (
                            <div className="error">{formik.errors.date}</div>
                        ) : null}{" "}
                    </div>

                    <div className="col-lg-12 col-12">
                        <label>Signature</label>
                        <input
                            type="file"
                            name="sign"
                            onChange={formik.handleChange}
                            value={formik.values.sign}
                        />{" "}
                        {formik.errors.sign && formik.touched.sign ? (
                            <div className="error">{formik.errors.sign}</div>
                        ) : null}{" "}
                    </div>

                    <h4>DOCUMENT DETAILS</h4>
                    <h4>Please Attach the attested true copies of the following</h4>

                    <div className="col-lg-12 col-12">
                        <label>Age Proof</label>
                        <input
                            type="file"
                            name="doc1"
                            onChange={formik.handleChange}
                            value={formik.values.doc1}
                        />{" "}
                        {formik.errors.doc1 && formik.touched.doc1 ? (
                            <div className="error">{formik.errors.doc1}</div>
                        ) : null}{" "}
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>RCI registration certificate</label>
                        <input
                            type="file"
                            name="doc2"
                            onChange={formik.handleChange}
                            value={formik.values.doc2}
                        />{" "}
                        {formik.errors.doc2 && formik.touched.doc2 ? (
                            <div className="error">{formik.errors.doc2}</div>
                        ) : null}{" "}
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>Mark sheets and certificates of the professional degree/s</label>
                        <input
                            type="file"
                            name="doc3"
                            onChange={formik.handleChange}
                            value={formik.values.doc3}
                        />{" "}
                        {formik.errors.doc3 && formik.touched.doc3 ? (
                            <div className="error">{formik.errors.doc3}</div>
                        ) : null}{" "}
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>Testimonials</label>
                        <input
                            type="file"
                            name="doc4"
                            onChange={formik.handleChange}
                            value={formik.values.doc4}
                        />{" "}
                        {formik.errors.doc4 && formik.touched.doc4 ? (
                            <div className="error">{formik.errors.doc4}</div>
                        ) : null}{" "}
                    </div>


                    <div className="col-lg-12 col-12">
                        <label>Updated CV</label>
                        <input
                            type="file"
                            name="doc5"
                            onChange={formik.handleChange}
                            value={formik.values.doc5}
                        />{" "}
                        {formik.errors.doc5 && formik.touched.doc5 ? (
                            <div className="error">{formik.errors.doc5}</div>
                        ) : null}{" "}
                    </div>



                    <div className="col-12 txt-center">
                        <Button variant="contained"
                            type="submit"
                            value="Submit"
                            onClick={formik.handleSubmit}>Submit</Button>
                       
                       
                      
                        <Button
                            variant="contained"
                            type="reset"
                            value="Reset"
                            onClick={formik.handleReset}
                        >
                            Reset
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
    
export default HospitalEmpanelment;