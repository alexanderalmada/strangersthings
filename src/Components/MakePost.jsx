const Base_URL = "2302-ACC-PT-WEB-PT-B";
const full_url = `https://strangers-things.herokuapp.com/api/${Base_URL}/posts`;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import User from "./Login";

export default function MakePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  async function CreatePost(event) {
    event.preventDefault();
    try {
      let token = localStorage.getItem("token");
      let user = localStorage.getItem("user");

      const response = await fetch(`${full_url}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${(token, user)}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: price,
            location: location,
            willDeliver: willDeliver,
          },
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  // useEffect(() => {
  //   if (token) {
  //     navigate("/posts");
  //   }
  // }, [token]);

  return (
    <>
      <div className="grid justify-center p-52 ">
        <form onSubmit={CreatePost}>
          <div className="flex w-fit ">
            <div
              className="w-96 text-3xl background black block tracking-wide text-gray-700 text-xs font-bold w-full  px-3 mb-6 md:mb-0 "
              for="grid-first-name"
            >
              <div>
                <label htmlFor="title">Title</label>
                <div>
                  <input
                    className="w-96 text-3xl peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    id="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description</label>
                  <input
                    className="w-96 text-3xl peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    id="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price</label>
                  <input
                    className="w-96 text-3xl peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    id="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="location">Location</label>
                  <input
                    className="w-96 text-3xl peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-teal-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="text"
                    id="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="willDeliver">Will Deliver</label>
                  <input
                    type="checkbox"
                    id="willDeliver"
                    value={willDeliver}
                    onChange={(event) => setWillDeliver(event.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  className="bg-black text-white rounded-lg pt-2 pr-2 pb-2 pl-2 "
                  type="submit"
                >
                  Create Listing
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
