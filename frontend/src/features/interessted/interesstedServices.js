import axios from "axios";

const API_URL = "/api/event/interesstedEvent/";

const interesstedEvents = async (eventId, interesstedIn) => {
  const response = await axios.put(API_URL, {
    eventId,
    interesstedIn,
  });
  console.log(response);
  return response.data;
};

const interesstedService = { interesstedEvents };

export default interesstedService;

// const sendInterstedRequset = async (id) => {
//   const res = await axios
//     .put("http://localhost:2300/api/event/interesstedEvent", {
//       eventId: id,
//       user: user._id,
//     })
//     .catch((err) => console.log(err));
//   const data = await res.data;
//   return data;
// };
