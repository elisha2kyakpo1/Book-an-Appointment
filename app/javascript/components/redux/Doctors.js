const GET_DOCTORS = "DOCTORS/GET_DOCTORS";
const ADD_DOCTOR = "DOCTORS/ADD_DOCTORS";

const defaultState = [];

const loadDoctors = (json) => ({
  type: GET_DOCTORS,
  json,
});

function addDoctor(payload) {
  return {
    type: ADD_DOCTOR,
    payload,
  };
}

const getDoctors = () => (dispatch) => {
  fetch("http://localhost:3000/api/v1/doctors")
    .then((response) => response.json())
    .then((json) => dispatch(loadDoctors(json)));
};

const doctorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.json.map((doctor) => {
        const { id, name, email, phone, about, image } = doctor;
        return {
          id,
          name,
          email,
          phone,
          about,
          image,
        };
      });
    case ADD_DOCTOR:
      return state.concat({
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
        image: payload.image,
      });
    default:
      return state;
  }
};

const addDoctorAPI = (formState) => {
  fetch("/api/v1/doctors", {
    method: "POST",
    "Content-Type": "application/json",
    body: JSON.stringify(formState),
  });
};
export { doctorReducer, getDoctors, addDoctorAPI };
