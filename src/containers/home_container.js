import React, { Component } from "react";

import { connect } from "react-redux";
import { artistListAll, artistList } from "../actions";
import { bindActionCreators } from "redux";

import Search from "../components/search";
import Artistlist from "../components/artistlist";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {};
  }
  componentDidMount() {
    this.props.artistListAll();
  }

  getKeywords = event => {
    let key = event.target.value;
    this.props.artistList(key);
  };

  render() {
    return (
      <div>
        <Search keywords={this.getKeywords} />
        <Artistlist artists={this.props.artists.artistListAll} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ artistListAll, artistList }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
