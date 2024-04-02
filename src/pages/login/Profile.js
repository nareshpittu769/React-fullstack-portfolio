import React, { useContext } from "react";
import "./profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../components/footer/Footer.js";
import { Usercontext } from "../../App.js";

const Profile = () => {
  const { user } = useAuth0();
  const { darkmode } = useContext(Usercontext);

  return (
    <>
      <div id="profile" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <div className="row1 ">
            <div className="col1 w-1/2">
              <div className="img-div">
                <img src={user?.picture || ""} alt="userprofile" />
              </div>
              <h1 className="font-bold text-3xl text-cyan-700">
                {user?.name || ""}
              </h1>
            </div>
            <div className="col2 w-1/2">
              <h1 className="font-bold text-3xl text-cyan-400 mb-20">{`${
                user?.given_name || ""
              } Information`}</h1>
              <div className="data">
                <div className="propety">
                  <div className="userdata">
                    <h1 className="bg-emerald-400 inline text-xl p-1 text-center">
                      Name
                    </h1>
                    <h2>{user?.given_name || ""}</h2>
                  </div>
                  <div className="userdata">
                    <h1 className="bg-emerald-400 inline text-xl p-1 text-center">
                      Family Name
                    </h1>
                    <h2>{user?.family_name || ""}</h2>
                  </div>
                  <div className="userdata">
                    <h1 className="bg-emerald-400 inline text-xl p-1 text-center">
                      Nick Name
                    </h1>
                    <h2>{user?.nickname || ""}</h2>
                  </div>
                  <div className="userdata">
                    <h1 className="bg-emerald-400 inline text-xl p-1 text-center">
                      Email
                    </h1>
                    <h2>{user?.email || ""}</h2>
                  </div>
                  <div className="userdata">
                    <h1 className="bg-emerald-400 inline text-xl p-1 text-center">
                      Last login
                    </h1>
                    <h2>{user?.updated_at.split("T")[0] || ""}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
