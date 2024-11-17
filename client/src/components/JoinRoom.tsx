import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const [inputs, setInputs] = useState({
    username: "",
    channel: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setInputs((prev) => {
      return {
        ...prev,
        [id]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="bg-slate-50">
      <div className="container mx-auto flex items-center h-screen">
        <div className="shadow-lg w-full h-screen md:h-auto lg:w-2/6 md:w-4/6 py-4 mx-auto bg-white rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 text-center border-b border-gray-200 pb-2">
            Join Room
          </h1>
          <form className="mt-4 mx-5" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Channel Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Channel Name"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinRoom;
