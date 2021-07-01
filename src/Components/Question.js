import React from "react";

export default function Question(props) {
  return (
    <div className="container-fluid">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left">
            <div className="card-body">
              <form onSubmit={props.submit}>
                <div className="form-group">
                  <label htmlFor="">
                    {" "}
                    <b>3.</b>What are you currently doing?
                  </label>
                  <br />
                  <input
                    type="radio"
                    id="teacher"
                    name="q1"
                    value="teacher"
                    autoComplete="off"
                  />
                  <label htmlFor="teacher">Teaching</label>{" "}
                  <input
                    type="radio"
                    id="Student"
                    name="q1"
                    value="Student"
                    autoComplete="off"
                  />
                  <label htmlFor="Student">Student</label>{" "}
                  <input
                    type="radio"
                    id="Programmer"
                    name="q1"
                    value="Programmer"
                    autoComplete="off"
                  />
                  <label htmlFor="Programmer">Programmer</label>{" "}
                  <input type="radio" id="Other" name="q1"    value="other" autoComplete="off" />
                  <label htmlFor="Other">Other</label>
                  <input
                    type="text"
                    name="other"
                    className="form-control alert-dark"
                    placeholder="Type here if not listed."
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    {" "}
                    <b>4.</b>Please rate our course.
                  </label>
                  <br />
                  <input type="radio" id="Poor" name="q2" value="Poor" autoComplete="off" />
                  <label htmlFor="Poor">Poor</label>{" "}
                  <input type="radio" id="Good" name="q2" value="Good"  autoComplete="off" />
                  <label htmlFor="Good">Good</label>{" "}
                  <input type="radio" id="Excellent" name="q2" value="Excellent"  autoComplete="off"/>
                  <label htmlFor="Excellent">Excellent</label>
                </div>

                <div className="form-group green-border-focus">
                  <label htmlFor="">
                    {" "}
                    <b>5.</b>Write your review here.
                  </label>
                  <textarea
                    className="form-control"
                    name="q3"
                    id="exampleFormControlTextarea5"
                    rows="2"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
              <center>
                <span className="badge badge-pill disabled">1</span>
                <span className="badge badge-pill  badge-primary">2</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
