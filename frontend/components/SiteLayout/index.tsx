import Header from '../../containers/Header';

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children} 
    </>
  )
};

export default SiteLayout;
