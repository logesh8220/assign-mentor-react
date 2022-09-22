import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { env } from "../Components/Config";

function Addstudents() {
  const [studets, setstudents] = useState([]);
  const [addedstudets, selectedstudents] = useState([]);
  const [added, add] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const [isloading, setloading] = useState();

  useEffect(() => {
    LoadDate();
  }, []);
  let LoadDate = async () => {
    setloading(true);
    let data = await axios.get(
      "https://assign-mentor-zen.herokuapp.com/students"
    );
    setloading(false);

    setstudents(data.data);
  };
  let checked = (ev) => {
    selectedstudents((prev) => {
      if (ev.target.checked === true) {
        if (!addedstudets.includes(ev.target.name)) {
          return [...prev, ev.target.name];
        }
      }
      if (ev.target.checked === false) {
        if (addedstudets.includes(ev.target.name)) {
          return prev.filter((pre) => {
            return pre !== ev.target.name ? pre : null;
          });
        }
      }
    });
    // add((pr)=>{
    //   if(ev.target.checked === true){
    //     if(!added.includes(ev.target.value)){
    //       return [...pr,ev.target.value]
    //     }
    //   }
    //   if (ev.target.checked === false) {
    //     if (added.includes(ev.target.value)) {
    //       return pr.filter((p) => {
    //         return p !== ev.target.value ? p : null;
    //       })
    //     }
    //   }
    // })
  };
  let submitform = async () => {
    let final = {
      students: addedstudets,
    };
    // let setstatus = {
    //   status:"mentor_assigned"
    // }
    await axios.put(`${env.api}/mentors/${params.id}`, final);
    navigate("/Mentors");
    // added.forEach ( async (added_ids)=>{
    //   await axios.put(`${env.api}/students/${added_ids}`, setstatus)
    // })
  };
  return (
    <main id="main" class="main col-7">
      <div className="form offset-5 text-center">
        <h1>Mentor:{params.name}</h1>
        <div class="row">
          <form>
            {isloading ? (
              <div class="text-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden"></span>
                </div>
              </div>
            ) : (
              <table class="table text-center">
                <thead class="table-primary">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">All Students</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {studets.map((studets, index) => {
                    return studets.status == "mentor_assigned" ? (
                      <tr>students not assigned</tr>
                    ) : (
                      <tr>
                        <td>{index + 1}</td>
                        <td>
                          <lable>{studets.name}</lable>
                        </td>
                        <td>
                          <input
                            type="checkbox"
                            value={studets._id}
                            key={studets._id}
                            name={studets.name}
                            onChange={(ev) => {
                              checked(ev);
                            }}
                          ></input>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
                <tr>
                  {" "}
                  <button
                    type="button"
                    onClick={() => submitform()}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </tr>
              </table>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}

export default Addstudents;
