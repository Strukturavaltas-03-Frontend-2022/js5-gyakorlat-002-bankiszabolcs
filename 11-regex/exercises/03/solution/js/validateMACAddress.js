const validateMACAddress = (mac = '') => {
  const required = /^([0-9A-F]{2}-){5}([0-9A-F]{2})$/;
  return required.test(mac);
};

export default validateMACAddress;
