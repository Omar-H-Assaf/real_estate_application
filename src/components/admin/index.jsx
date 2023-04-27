import { useContext, useEffect, useState } from "react";
import {
  AllCustomersAndOwners,
  LastTenCustomer,
  LastTenRented,
  ResetUserPassword,
  ToggleUserStatus,
} from "../../services/AdminService";
import { SetJWT } from "../../store/context";
import { PropertyContainer } from "../homePage/style";
import Property from "../property";

const AdminDashboard = () => {
  const { jwt, setJwt, setUserID, userRole, setUserRole } = useContext(SetJWT);

  const [properties, setProperties] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [usres, setUsres] = useState([]);
  const [flag, setFlag] = useState([]);

  useEffect(() => {
    LastTenRented({ jwt })
      .then((res) => {
        setProperties(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    LastTenCustomer({ jwt })
      .then((res) => {
        setCustomers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    AllCustomersAndOwners({ jwt })
      .then((res) => {
        setUsres(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    AllCustomersAndOwners({ jwt })
      .then((res) => {
        setUsres(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [flag]);

  const HandleResetPassword = (id) => {
    ResetUserPassword({ jwt }, { id: id })
      .then((res) => {
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };

  const HandleActivate = (id) => {
    ToggleUserStatus({ jwt }, { id: id, status: "ACTIVE" })
      .then((res) => {
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };
  const HandleDeactivate = (id) => {
    ToggleUserStatus({ jwt }, { id: id, status: "INACTIVE" })
      .then((res) => {
        setFlag(!flag);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <h1>Last 10 rented properties</h1>
        <PropertyContainer>
          {properties &&
            properties.map((p) => {
              return (
                <Property
                  key={p.id}
                  id={p.id}
                  imgSource={p.pictures[0]["path"]}
                  price={"$" + p.price}
                  area={p.area + "sqft"}
                  rooms={p.rooms}
                  status={p.status}
                  propertyType={p.propertyType}
                />
              );
            })}
        </PropertyContainer>
      </div>
      <div>
        <h1>Last 10 rented customers</h1>
        {customers.map((c) => {
          return (
            <h1 key={c.id}>{"Email : " + c.email + " Name :" + c.name}</h1>
          );
        })}
      </div>
      <div>
        <h1>Manage Users</h1>
        <table>
          <thead>
            <th>ID</th>
            <th>Email</th>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {usres.map((c) => {
              return (
                <tr>
                  <td>{c.id}</td>
                  <td>{c.email}</td>
                  <td>{c.name}</td>
                  <td>{c.role}</td>
                  <td>
                    <button
                      onClick={() =>
                        c.status == "ACTIVE"
                          ? HandleDeactivate(c.id)
                          : HandleActivate(c.id)
                      }
                    >
                      {c.status == "ACTIVE" ? "Deactivate" : "Activate"}
                    </button>
                    <button onClick={() => HandleResetPassword(c.id)}>
                      Reset Password
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
