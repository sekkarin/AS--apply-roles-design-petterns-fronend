import { useEffect, useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useAppSelector } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
// import { Roles } from "../../inteโrfaces/Role";

// type Props = {}
interface Book {
  ISBN: string;
  author: string;
  createdAt: string;
  description: string;
  price: number;
  profileUrl: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const Profile = () => {
  const axiosPrivate = useAxiosPrivate();
  const [book, setBook] = useState<Book[]>([]);
  useEffect(() => {
    (async () => {
      const res = await axiosPrivate.get(`/books`);
      setBook(res.data);
      console.log(res.data);
    })();
  }, []);
  return (
    // <section className="flex flex-1 flex-col drop-shadow-lg bg-white rounded-md  md:max-w-md md:mx-auto mx-5">

    // </section>
    <div className="flex items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br p-10">
      <div className="bg-white">
      {book.map((item) => (
        <div key={item._id}>
          <p>{item.title}</p>
          <br />
        </div>
      ))}
      </div>
      
    </div>
  );
};

export default Profile;
