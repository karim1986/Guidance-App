import axios from "axios";

const API_URL = "/api/event/interesstedEvent/";

const interesstedEvents = async (eventId, user) => {
  const response = await axios.put(API_URL, {
    eventId,
    user,
  });
  console.log(response.data);
  return response.data;
};

const interesstedService = { interesstedEvents };

export default interesstedService;

// const sendInterstedRequset = async (id) => {
//   const res = await axios.put(
//     "http://localhost:2300/api/event/interesstedEvent",
//     {
//       eventId: id,
//       user: user._id,
//     }
//   );
//   console.log(res.data).catch((err) => console.log(err));
//   const data = await res.data;
//   return data;
// };
