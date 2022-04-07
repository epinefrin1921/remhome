import React, { Component } from "react";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import { fetchSingleDevice } from "../../actions/devices";
import { Colors } from "../../constants/app";
import DeviceWidget from "../../components/DeviceWidget";

class SingleDeviceScreen extends Component {
  componentDidMount() {
    const { fetchSingleDevice } = this.props;
    fetchSingleDevice(this.props.route.params.id);
  }

  renderDeviceData(device) {
    return (
      <View>
        <DeviceWidget style={styles.widget} device={device}></DeviceWidget>
        <Text style={styles.text}>OVDJE UBACITI GRAF</Text>
      </View>
    );
  }

  render = () => {
    const { devices, navigation } = this.props;
    let device = devices.device;
    return <View>{device && this.renderDeviceData(device)}</View>;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    color: Colors.faded,
  },
});

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  fetchSingleDevice,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeviceScreen);
