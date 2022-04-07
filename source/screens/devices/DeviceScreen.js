import React, { Component } from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import { connect } from "react-redux";
import { fetchAllDevices } from "../../actions/devices";
import DeviceWidget from "../../components/DeviceWidget";
import { TouchableOpacity } from "react-native-gesture-handler";

class DeviceScreen extends Component {
  componentDidMount() {
    const { fetchAllDevices } = this.props;
    fetchAllDevices();
  }

  renderItem = ({ item, index, navigation }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.push("Device", { id: index })}
      >
        <DeviceWidget
          style={styles.widget}
          device={item}
          key={index}
        ></DeviceWidget>
      </TouchableOpacity>
    );
  };

  render() {
    const { devices, navigation } = this.props;
    let allDevices = devices.allDevices;
    return (
      <View style={styles.container}>
        {allDevices && (
          <FlatList
            data={allDevices}
            navigation={navigation}
            renderItem={this.renderItem}
            keyExtractor={(item) => item?.name}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = {
  fetchAllDevices,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeviceScreen);
