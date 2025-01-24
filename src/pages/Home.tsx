import { Row, Button, Container } from "react-bootstrap";
import { useCountries } from "../hooks/useCountries";
import CountryCard from "../components/Home/CountryCard";
import CountryLoading from "../components/common/CountryLoading";
import styles from "../components/styles/HomePage.module.css";
import CollapsibleNavbar from "../components/Home/Navbar";
import WelcomeSection from "../components/Home/Welcome";
import ImageSliderSection from "../components/Home/ImageSlider";
import { useLocation, useNavigate } from "react-router";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const region = queryParams.get("region") || undefined;
  const { countries, loading, hasMore, loadMoreCountries } =
    useCountries(region);

  if (!isAuthenticated) {
    navigate("/login");
  }

  return (
    <Container className={styles.homeContainer}>
      <CollapsibleNavbar />
      <WelcomeSection />
      <ImageSliderSection />
      <Row className="g-4 pt-4 pb-4">
        {countries.map((c, index) => (
          <CountryCard
            key={index}
            country={c.name}
            region={c.region}
            flag={c.flag}
          />
        ))}
      </Row>
      {loading && <CountryLoading numRows={4} />}

      {hasMore && (
        <div className="d-flex justify-content-center">
          <Button
            variant="primary"
            className="loadMoreButton pt-3 pb-3 pl-6 pr-6"
            onClick={loadMoreCountries}
            style={{
              backgroundColor: "black",
              border: "none",
              borderRadius: "0",
              color: "white",
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Home;
