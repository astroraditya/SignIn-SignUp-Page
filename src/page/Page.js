import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Page() {
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
 var axios = require('axios');
// const header = `Authorization: Bearer + ${localStorage.getItem('token')}`;

// axios.get('https://sutt-front-task-one.herokuapp.com/api/v1/auth/user', header)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
//   console.log("Test")
// });

axios.get('https://sutt-front-task-one.herokuapp.com/api/v1/auth/user', {
  headers: {
   'Authorization': "Bearer " + localStorage.getItem("token")
  }
}).then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
    console.log("Test") 
  });


return (
<>            
<section class="section mt-5">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div>
          <img alt="Web Studio" class="img-fluid" src="https://dvokhk8ohqhd8.cloudfront.net/assets/engineering_types/full_stack/hero_image-6d2af04d8ff26b2334e0f866b3e3671b8c5e32fca0f4883c2e6a35248e36d77d.svg" />
        </div>
      </div>
      <div class="col-md-6 col-lg-5 ml-auto d-flex align-items-center mt-4 mt-md-0">
        <div>
        <h2>Welcome {localStorage.name},</h2>
    <></><></><p class="margin-top-s">
                    <h5>You have sucessfully Logged Into the World of Authentication Profile Index.</h5><></>
                    <p>Your credentials are as follows</p>
                    <b>User Name</b> : {localStorage.username} <br/>
                    <b>Email-ID</b>  : {localStorage.email}
                </p>
        </div>
      </div><></><></>
      <Button color="primary" className="px-4"
            onClick={routeChange}
              >
             LogOut
            </Button>
    </div>
  </div> <br/><br/>
</section>
</>
);
}