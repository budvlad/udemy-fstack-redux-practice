import React, { Component } from "react";

import { connect } from "react-redux";
import { artistDetail, clearArtistDetail } from "../actions";
import { bindActionCreators } from "redux";

// import { Link } from "react-router-dom";

import Artist from "../components/artist";

class ArtistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistDetail: artistDetail,
      clearArtistDetail: clearArtistDetail
    };
  }

  componentDidMount() {
    this.props.artistDetail(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.clearArtistDetail();
  }

  artistTemplate = data => (data.artistData ? <Artist data={data} /> : null);

  render() {
    return <div>{this.artistTemplate(this.props.artists)}</div>;
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ artistDetail, clearArtistDetail }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistContainer);
