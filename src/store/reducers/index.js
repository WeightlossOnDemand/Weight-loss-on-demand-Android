const initialState = {
  token: '',
  user: '',
  coupon: '',
  payment: '',
  q1: '',
  q2: '',
  q3: '',
  q4: '',
  q5: '',
  q6: '',
  q7: '',
  q8: '',
  q9: '',
  q10: '',
  q11: '',
  q12: '',
  q13: '',
  q14: '',
  q15: '',
  q16: '',
  q17: '',
  q18: '',
  q19: '',
  q20: '',
  q21: '',
  q22: '',
  q23: '',
  q24: '',
  q25: '',
  q26: '',
  q27: '',
  q28: '',
  q29: '',
  q30: '',
  q31: '',
  q32: '',
  q33: '',
  q34: '',
  q35: '',
  q36: '',
  q37: '',
  q38: '',
  q39: '',
  q40: '',
  q41: '',
  q42: '',
  q43: '',
  q44: '',
  q45: '',
  q46: '',
  q47: '',
  q48: '',
  q49: '',
  q50: '',
  question5: '',
  reason: '',
  trainerType: '',
  tr_id: '',
  tr_name: '',
  tr_image: '',
  tr_amount: '',
  detailStatus: true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DATA': {
      return {...state, token: action.token};
    }
    case 'ADD_USER_DATA': {
      return {...state, user: action.user};
    }
    case 'ADD_COUPON': {
      return {...state, coupon: action.coupon};
    }
    case 'ADD_PAYMENT': {
      return {...state, payment: action.payment};
    }
    case 'ADD_First_question': {
      return {
        ...state,
        q1: action.q1,
        q2: action.q2,
        q3: action.q3,
        q4: action.q4,
        q5: action.q5,
        q6: action.q6,
        q7: action.q7,
        q8: action.q8,
        q9: action.q9,
      };
    }
    case 'ADD_second_question': {
      return {
        ...state,
        q10: action.q10,
        q11: action.q11,
        q12: action.q12,
        q13: action.q13,
        q14: action.q14,
        q15: action.q15,
        q16: action.q16,
        q17: action.q17,
        q18: action.q18,
        q19: action.q19,
      };
    }
    case 'ADD_Third_question': {
      return {
        ...state,
        q20: action.q20,
        q21: action.q21,
        q22: action.q22,
        q23: action.q23,
        q24: action.q24,
        q25: action.q25,
        q26: action.q26,
      };
    }
    case 'ADD_fourth_question': {
      return {
        ...state,
        q27: action.q27,
        q28: action.q28,
        q29: action.q29,
        q30: action.q30,
        q31: action.q31,
        q32: action.q32,
        q33: action.q33,
        q34: action.q34,
        q35: action.q35,
        q36: action.q36,
        q37: action.q37,
        q38: action.q38,
        q39: action.q39,
        q40: action.q40,
        q41: action.q41,
        q42: action.q42,
        q43: action.q43,
        q44: action.q44,
        q45: action.q45,
        q46: action.q46,
        q47: action.q47,
        q48: action.q48,
        q49: action.q49,
        q50: action.q50,
      };
    }
    case 'ADD_Five_question': {
      return {...state, question5: action.question5};
    }
    case 'ADD_REASON': {
      return {...state, reason: action.reason};
    }
    case 'ADD_TRAINER_TYPE': {
      return {...state, trainerType: action.trainerType};
    }
    case 'ADD_AVAILABLE_TRAINER': {
      return {
        ...state,
        tr_id: action.tr_id,
        tr_name: action.tr_name,
        tr_image: action.tr_image,
        tr_amount: action.tr_amount,
      };
    }
    case 'ADD_CLIENT_DETAILS': {
      return {
        ...state,
        detailStatus: action.detailStatus,
      };
    }
    case 'REMOVE_DATA': {
      return {
        ...state,
        token: null,
        user: null,
        coupon: null,
        payment: null,
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
        q9: null,
        q10: null,
        q11: null,
        q12: null,
        q13: null,
        q14: null,
        q15: null,
        q16: null,
        q17: null,
        q18: null,
        q19: null,
        q20: null,
        q21: null,
        q22: null,
        q23: null,
        q24: null,
        q25: null,
        q26: null,
        q27: null,
        q28: null,
        q29: null,
        q30: null,
        q31: null,
        q32: null,
        q33: null,
        q34: null,
        q35: null,
        q36: null,
        q37: null,
        q38: null,
        q39: null,
        q40: null,
        q41: null,
        q42: null,
        q43: null,
        q44: null,
        q45: null,
        q46: null,
        q47: null,
        q48: null,
        q49: null,
        q50: null,
        question5: null,
        reason: null,
        trainerType: null,
        tr_id: null,
        tr_name: null,
        tr_image: null,
        tr_amount: null,
        detailStatus: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
