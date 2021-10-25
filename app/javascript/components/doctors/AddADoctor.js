const addADoctor = (payload) => {
  const docDetails = { ...payload };
  return async function addDoctors(dispatch) {
    fetch('api/v1/clients/:client_id/doctors', {
      method: 'POST',
      body: JSON.stringify(docDetails),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.status === 201 && dispatch(registerDoctor(bookDetails)));
  };
};

export default addADoctor;
