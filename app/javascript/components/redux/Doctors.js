const GET_DOCTORS = 'DOCTORS/GET_DOCTORS';

const loadDoctors = (json) => ({
  type: GET_DOCTORS,
  json,
});

const getDoctors = () => (dispatch) => {
  fetch('/api/v1/doctors')
    .then((response) => response.json())
    .then((json) => dispatch(loadDoctors(json)));
};

const doctorReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.json.map((doctor) => {
        const {
          id,
          name,
          email,
          phone,
          about,
          image,
        } = doctor;
        return {
          id,
          name,
          email,
          phone,
          about,
          image,
        };
      });
    default:
      return state;
  }
};

export {
  doctorReducer,
  getDoctors,
};
