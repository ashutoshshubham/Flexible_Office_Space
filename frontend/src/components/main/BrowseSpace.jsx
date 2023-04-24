import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BrowseSpace = () => {
  const [allSpaceData, setAllSpaceData] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    "All",
    "Office",
    "Warehouse",
    "Meeting Room",
    "Coworking Space",
    "Training Room",
    "Event Space",
    "Retail Space",
  ];
  const [selCategory, setSelCategory] = useState(null);

  const navigate = useNavigate();

  const fetchAllSpaceData = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/addSpace/getall");
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setAllSpaceData(data);
      setLoading(false);
    }
  };

  const filterBar = () => {
    return (
      <div className="card">
        <div className="card-header">
          <h4 className="m-0">Filter Spaces</h4>
        </div>
        <div className="card-body"></div>
        <div className="card-footer"></div>
      </div>
    );
  };

  const displayCategoryData = () => {
    return categories.map((cat, index) => (
      <div className="mx-2" key={index}>
        <button
          className={`btn ${
            selCategory === index ? "btn-secondary" : "btn-primary"
          } btn-rounded`}
        >
          {cat}
        </button>
      </div>
    ));
  };

  useEffect(() => {
    fetchAllSpaceData();
  }, []);

  const displaySpaceData = () => {
    if (!loading) {
      return allSpaceData.map((space, index) => (
        <div className="row justify-content-center mb-3" key={space._id}>
          <div className="col-md-12 col-xl-12">
            <div className="card shadow-0 border rounded-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                    <div className="bg-image hover-zoom ripple rounded ripple-surface">
                      <img
                        src={
                          space.image
                            ? space.image
                            : "/images/space-placeholder.jpg"
                        }
                        className="w-100"
                        alt=""
                      />
                      <a href="#!">
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(253, 253, 253, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h5>{space.name}</h5>

                    <div className="mt-1 mb-0 text-muted small">
                      <span className="text-primary"> • </span>
                      <span>{space.location}</span>
                    </div>

                    <p className="text-truncate mb-4 mb-md-0">
                      {space.facilities}
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">₹{space.rate}</h4>
                    </div>
                    <div className="d-flex flex-column mt-4">
                      <Link
                        to={`/user/book/${space._id}`}
                        className="btn btn-primary btn-sm"
                        type="button"
                      >
                        Book Now
                      </Link>
                      <Link
                        to={`/main/spacedetails/${space._id}`}
                        className="btn btn-outline-primary btn-sm mt-2"
                        type="button"
                      >
                        More Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <div>
      <header className="page-header">
        <div className="container"></div>
      </header>
      <div className="container-fluid">
        <div className="row my-3">
          <div className="col-md-3">{filterBar()}</div>
          <div className="col-md-9">
            <div className="d-flex">{displayCategoryData()}</div>
            <hr />
            {displaySpaceData()}
            <nav aria-label="..." className="my-3">
              <ul className="pagination pagination-circle">
                <li className="page-item">
                  <a className="page-link">Previous</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a className="page-link" href="#">
                    2 <span className="visually-hidden">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseSpace;
