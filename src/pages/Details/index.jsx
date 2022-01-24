import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import Alert from "../../components/Alert";

const Details = ({ contacts, setContacts }) => {
  const navigate = useNavigate();

  const [alertOpen, setAlertOpen] = useState(false);

  // id from url
  const { id } = useParams();

  // find the contact data which ids are equal to
  const details = contacts.find((item) => item.id == id);

  const deleteHandler = (id) => {
    setAlertOpen(true);

    setTimeout(() => {
      setAlertOpen(false);
      navigate("/");
    }, 3000);

    let filteredArr = contacts.filter((item) => item.id != id);
    localStorage.setItem("contacts", JSON.stringify(filteredArr));
    setContacts(filteredArr);
  };

  return (
    <main>
      <Alert title="Успешно удалено!" open={alertOpen} />
      {details && (
        <section className="details">
          <div className="container">
            <div className="d-flex user-info">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-alt"
                class="img"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#858585"
                  d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"
                ></path>
              </svg>

              <div>
                <h2>{details.name}</h2>
                {details?.company.name && (
                  <h3>
                    {details?.company.name}
                    {details?.company.position
                      ? `, ${details?.company.position}`
                      : ""}
                  </h3>
                )}
                <div
                  style={{ marginTop: 24 }}
                  className="d-flex align-items-center"
                >
                  <button
                    className="icon-btn"
                    onClick={() => deleteHandler(details.id)}
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash-alt"
                      class="svg-inline--fa fa-trash-alt fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#858585"
                        d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="btn btn-primary btn-large"
                    onClick={() => navigate(`/details/edit/${details.id}`)}
                  >
                    Изменить
                  </button>
                </div>
              </div>
            </div>
            <div className="block">
              <h3>Контактные данные</h3>
              {details.email && (
                <div className="d-flex align-items-center mt-8">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="envelope"
                    class="svg-inline--fa fa-envelope fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#858585"
                      d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    ></path>
                  </svg>
                  <a href={`mailto:${details.email}`}>
                    <h4>{details.email}</h4>
                  </a>
                </div>
              )}
              {details.phone && (
                <div className="d-flex align-items-center mt-8">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="phone"
                    class="svg-inline--fa fa-phone fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#858585"
                      d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                    ></path>
                  </svg>
                  <a href={`tel${details.phone}`}>
                    <h4>{details.phone}</h4>
                  </a>
                </div>
              )}
              {details?.company?.catchPhrase && (
                <div className="d-flex align-items-center mt-8">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sticky-note"
                    class="svg-inline--fa fa-sticky-note fa-w-14"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#858585"
                      d="M312 320h136V56c0-13.3-10.7-24-24-24H24C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24h264V344c0-13.2 10.8-24 24-24zm129 55l-98 98c-4.5 4.5-10.6 7-17 7h-6V352h128v6.1c0 6.3-2.5 12.4-7 16.9z"
                    ></path>
                  </svg>
                  <h4>{details.company.catchPhrase}</h4>
                </div>
              )}
              {details?.address?.country && (
                <div className="d-flex align-items-center mt-8">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="map-pin"
                    class="svg-inline--fa fa-map-pin fa-w-9"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 288 512"
                  >
                    <path
                      fill="#858585"
                      d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"
                    ></path>
                  </svg>
                  <h4>
                    {details.address.country}, {details.address.state},{" "}
                    {details.address.city}
                  </h4>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Details;
