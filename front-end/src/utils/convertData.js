import moment from 'moment';

const convertData = (data) => {
  const newFormat = 'DD/MM';
  return moment(data).format(newFormat);
};

export default convertData;
