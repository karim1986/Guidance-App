import axios from "axios";

const API_URL = "/api/event/";

//create new Events
const createEvent = async (eventsData) => {
  const response = await axios.post(API_URL, eventsData);
  console.log(response);
  return response.data;
};

//get user Events
const getEvents = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const eventsService = { createEvent, getEvents };

export default eventsService;
