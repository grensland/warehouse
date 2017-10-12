import { connect } from 'react-redux';
import { PuppetShowList } from '../components/PuppetShowList';

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return ({
    puppetShows: state.puppetShow,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    console.log('onClick', dispatch, ownProps);
  },
});

export default connect(mapStateToProps, mapDispatchToProps())(PuppetShowList);
