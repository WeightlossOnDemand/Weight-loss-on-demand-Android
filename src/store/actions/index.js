function storeData(token) {
  return {
    type: 'ADD_DATA',
    token: token,
  };
}
function storeUserData(user) {
  return {
    type: 'ADD_USER_DATA',
    user: user,
  };
}
function storeCoupon(coupon) {
  return {
    type: 'ADD_COUPON',
    coupon: coupon,
  };
}

function storePayment(payment) {
  return {
    type: 'ADD_PAYMENT',
    payment: payment,
  };
}
function removeData() {
  return {
    type: 'REMOVE_DATA',
  };
}
function Question1(q1, q2, q3, q4, q5, q6, q7, q8, q9) {
  return {
    type: 'ADD_First_question',
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,
  };
}
function Question2(q10, q11, q12, q13, q14, q15, q16, q17, q18, q19) {
  return {
    type: 'ADD_second_question',
    q10: q10,
    q11: q11,
    q12: q12,
    q13: q13,
    q14: q14,
    q15: q15,
    q16: q16,
    q17: q17,
    q18: q18,
    q19: q19,
  };
}
function Question3(q20, q21, q22, q23, q24, q25, q26) {
  return {
    type: 'ADD_Third_question',
    q20: q20,
    q21: q21,
    q22: q22,
    q23: q23,
    q24: q24,
    q25: q25,
    q26: q26,
  };
}
function Question4(
  q27,
  q28,
  q29,
  q30,
  q31,
  q32,
  q33,
  q34,
  q35,
  q36,
  q37,
  q38,
  q39,
  q40,
  q41,
  q42,
  q43,
  q44,
  q45,
  q46,
  q47,
  q48,
  q49,
  q50,
) {
  return {
    type: 'ADD_fourth_question',
    q27: q27,
    q28: q28,
    q29: q29,
    q30: q30,
    q31: q31,
    q32: q32,
    q33: q33,
    q34: q34,
    q35: q35,
    q36: q36,
    q37: q37,
    q38: q38,
    q39: q39,
    q40: q40,
    q41: q41,
    q42: q42,
    q43: q43,
    q44: q44,
    q45: q45,
    q46: q46,
    q47: q47,
    q48: q48,
    q49: q49,
    q50: q50,
  };
}
function Question5(question5) {
  return {
    type: 'ADD_Five_question',
    question5: question5,
  };
}
function reasonVisit(reason) {
  return {
    type: 'ADD_REASON',
    reason: reason,
  };
}
function trainerStack(trainerType) {
  return {
    type: 'ADD_TRAINER_TYPE',
    trainerType: trainerType,
  };
}
function trainerAvailable(tr_id, tr_name, tr_image, tr_amount) {
  return {
    type: 'ADD_AVAILABLE_TRAINER',
    tr_id: tr_id,
    tr_name: tr_name,
    tr_image: tr_image,
    tr_amount: tr_amount,
  };
}

function viewClientDetails(detailStatus) {
  return {
    type: 'ADD_CLIENT_DETAILS',
    detailStatus: detailStatus,
  };
}

export {
  storeData,
  storeUserData,
  storeCoupon,
  storePayment,
  removeData,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  reasonVisit,
  trainerStack,
  trainerAvailable,
  viewClientDetails,
};
