const validateVisaCardNumber = (visa = '') => {
  const required = /^4\d{15}$/;
  return required.test(visa);
};
export default validateVisaCardNumber;
