const ERROR = 'ERROR';

const error = (err: any) => ({
  type: ERROR,
  err,
});

export default {
  constants: {
    ERROR,
  },
  creators: {
    error,
  },
};
