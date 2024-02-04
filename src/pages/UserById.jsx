import { useParams } from "react-router-dom";


const UserById = () => {
  const { id } = useParams();

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
      job: "china",
      hat: "blue",
    },
  ];
  let user = arr.find((e) => {
    return e.id === +id;
  });
  console.log(user);
  return (
    <div>
      <div>
        This is {user.name}s page
        <p>name: {user.name}</p>
        <p>id: {user.id}</p>
        <p>Job: {user.job}</p>
        <p>hat: {user.hat}</p>
      </div>
    </div>
  );
};

export default UserById;
