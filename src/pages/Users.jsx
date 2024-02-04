import { Link } from "react-router-dom";

const Users = () => {
  let arr = [
    {
      id: 1,
      name: "Ehson",
    },
    {
      id: 2,
      name: "Ismoil",
    },
    {
      id: 3,
      name: "Yusuf",
    },
    {
      id: 4,
      name: "Khusrav",
    },
  ];
  return (
    <div>
      {arr.map((e) => {
        return (
          <div className="flex gap-10" key={e.id}>
            <Link to={`/user/${e.id}`}>
              <p>id:{e.id}</p>
              <p>name:{e.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
