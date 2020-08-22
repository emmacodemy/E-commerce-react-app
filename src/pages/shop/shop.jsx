import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  unsubcribeFromSnapshot = null;
  componentDidMount() {
    const { dispatch } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapShot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapShot);
      dispatch(updateCollections(collectionsMap));
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) =>
            WithSpinner(CollectionsOverview)({
              isLoading: loading,
              ...props,
            })
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) =>
            WithSpinner(CollectionPage)({
              isLoading: this.state.loading,
              ...props,
            })
          }
        />
      </div>
    );
  }
}

export default connect(null)(ShopPage);
