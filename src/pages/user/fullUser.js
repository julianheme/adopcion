import React from "react";
import { mdiSquareEditOutline } from "@mdi/js";
import { mdiDelete } from "@mdi/js";
import styles from "./fullUser.module.css";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class fullUser extends React.Component {
	componentDidMount() {
		if (this.props.isUserLoggedIn) this.props.onLoad(this.props.uid);
		console.log(this.props.pets);
	}

	render() {
		return <div className={styles.list}></div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.authStore.isUserLoggedIn,
		uid: state.authStore.user.uid,
		pets: state.userStore.pets,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onLoad: (uid) => dispatch(actionCreators.getMascotas(uid)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(fullUser);
