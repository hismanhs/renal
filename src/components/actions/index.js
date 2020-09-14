export const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
export const CREATE_NEW_PATIENT = 'CREATE_NEW_PATIENT';
export const CREATE_NEW_STAFF = 'CREATE_NEW_STAFF';

export const createPatient = (data) => {
    return {
      type: CREATE_NEW_PATIENT,
      data: data
    }
  };

  export const createStaff = (data) => {
    return {
      type: CREATE_NEW_STAFF,
      data: data
    }
  };

