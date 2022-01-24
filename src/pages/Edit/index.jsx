import { useFormik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router";
import Alert from "../../components/Alert";

const Edit = ({ contacts, setContacts }) => {
  const [alertOpen, setAlertOpen] = useState(false);
  // id from url
  const { id } = useParams();

  // find the contact data which ids are equal to
  const details = contacts.find((item) => item.id == id);

  const formik = useFormik({
    initialValues: !details
      ? {
          name: "",
          company: "",
          email: "",
          phone: "",
        }
      : {
          ...details,
        },
    onSubmit: (values) => {
      // show alert
      setAlertOpen(true);

      setTimeout(() => {
        // hide alert
        setAlertOpen(false);
      }, 3000);

      // delete contact which are equal to edited contact
      let filteredArr = contacts.filter((item) => item.id != id);
      // save edited data to localStorage
      localStorage.setItem(
        "contacts",
        JSON.stringify([...filteredArr, values])
      );
      // save edited data to state
      setContacts([...filteredArr, values]);
    },
  });

  return (
    <main>
      <Alert title="Успешно изменено!" open={alertOpen} />
      {details && (
        <section className="details">
          <div className="container">
            <form action="" onSubmit={formik.handleSubmit}>
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
                  <h2>{details?.name}</h2>
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
                    <button className="btn btn-primary" type="submit">
                      Сохранить
                    </button>
                  </div>
                </div>
              </div>
              <h3 className="mt-16">Имя и фамилия</h3>
              <div className="d-flex align-items-center justify-content-between mt-8">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user-circle"
                  class="svg-inline--fa fa-user-circle fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
                  ></path>
                </svg>
                <input
                  type="text"
                  value={formik.values.name}
                  placeholder="Имя"
                  name="name"
                  onChange={formik.handleChange}
                  className="field mr-8"
                />
              </div>
              <h3 className="mt-16">Компания и должность</h3>
              <div className="d-flex align-items-center justify-content-between mt-8">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="building"
                  class="svg-inline--fa fa-building fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"
                  ></path>
                </svg>
                <input
                  type="text"
                  value={formik.values.company.name}
                  placeholder="Компания"
                  name="company"
                  onChange={formik.handleChange}
                  className="field mr-8"
                />
                <input
                  type="text"
                  value={formik.values.company.position}
                  placeholder="Должность"
                  name="position"
                  onChange={formik.handleChange}
                  className="field"
                />
              </div>
              <h3 className="mt-16">Электронная почта</h3>
              <div className="d-flex align-items-center justify-content-between mt-8">
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
                    fill=""
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                <input
                  type="text"
                  value={formik.values.email}
                  placeholder="E-mail"
                  name="email"
                  onChange={formik.handleChange}
                  className="field"
                />
              </div>
              <h3 className="mt-16">Номер телефона</h3>
              <div className="d-flex align-items-center justify-content-between mt-8">
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
                    fill=""
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                <input
                  type="text"
                  value={formik.values.phone}
                  placeholder="Номер"
                  name="phone"
                  onChange={formik.handleChange}
                  className="field "
                />
              </div>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default Edit;
