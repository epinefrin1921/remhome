import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchAllNotifications } from "../../actions/notifications";

class NotificationScreen extends Component {
  componentDidMount() {
    const { fetchAllNotifications } = this.props;
    fetchAllNotifications();
  }
  render() {
    const { data, navigation } = this.props;
    if (data) {
      console.log(data);
    }
    return (
      <View style={styles.container}>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    width: 200,
    height: 100,
    backgroundColor: "#ccc",
  },
});

const mapStateToProps = (state) => {
  return {
    data: state.devices.data,
  };
};

const mapDispatchToProps = {
  fetchAllNotifications,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationScreen);
