const PageWithError = () => {
  throw new Error('Error');

  return <div>asd</div>;
};

export default PageWithError;
