import IssueReturn from "../components/Staff/IssueReturn";
import OverdueList from "../components/Staff/OverdueList";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <IssueReturn />
      <OverdueList />
    </>
  );
};

export default HomePage;
