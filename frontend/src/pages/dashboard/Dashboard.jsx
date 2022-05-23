import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, resetPost } from "../../features/posts/postsSlice";
import { getEvents, resetEvent } from "../../features/events/eventsSlice";
import NewcomerHome from "../newcomerHome/NewcomerHome";
import PrivateHome from "../privateHome/PrivateHome";
import NotFound from "../notFound/NotFound";
import "./dashboard.scss";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //user navigation dashboard
  let navigatedPage = <NotFound />;

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/");
    }
  }, [user, isLoading, isSuccess, isError, message, navigate]);

  const { isLoadingP, isErrorP, messageP } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getPosts());

    return () => {
      dispatch(resetPost());
    };
  }, [isErrorP, messageP]);

  const { events, isLoadingE, isErrorE, messageE } = useSelector(
    (state) => state.events
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getEvents());

    return () => {
      dispatch(resetEvent());
    };
  }, [isErrorE, messageE]);

  if (isSuccess || user) {
    if (user?.selectedRole === "coach" || user?.selectedRole === "volunteer") {
      navigatedPage = <PrivateHome />;
    } else {
      navigatedPage = <NewcomerHome />;
    }
  }

  return <div>{navigatedPage}</div>;
};

export default Dashboard;
