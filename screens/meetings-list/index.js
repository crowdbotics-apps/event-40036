import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const MeetingsList = () => {
  return <ImageBackground source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.heading}>Agenda for the Day</Text>
        <View style={styles.eventContainer}>
          <Text style={styles.subHeading}>Meetings:</Text>
          <View style={styles.eventBox}>
            <Text style={styles.item}>
              - Meeting 1 (9:00 AM) -{" "}
              <Text style={styles.link}>Conference Room A</Text>
            </Text>
            <Text style={styles.item}>
              - Meeting 2 (11:00 AM) -{" "}
              <Text style={styles.link}>Conference Room B</Text>
            </Text>
            <Text style={styles.item}>
              - Meeting 3 (2:00 PM) -{" "}
              <Text style={styles.link}>Conference Room C</Text>
            </Text>
          </View>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.subHeading}>Meals:</Text>
          <View style={styles.eventBox}>
            <Text style={styles.item}>
              - Breakfast (8:00 AM) - <Text style={styles.link}>Hotel Map</Text>
            </Text>
            <Text style={styles.item}>
              - Lunch (12:00 PM) - <Text style={styles.link}>Hotel Map</Text>
            </Text>
            <Text style={styles.item}>
              - Dinner (7:00 PM) - <Text style={styles.link}>Hotel Map</Text>
            </Text>
          </View>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.subHeading}>Social Events:</Text>
          <View style={styles.eventBox}>
            <Text style={styles.item}>
              - Networking Event (6:00 PM) -{" "}
              <Text style={styles.link}>Hotel Map</Text>
            </Text>
            <Text style={styles.item}>
              - Cocktail Party (8:00 PM) -{" "}
              <Text style={styles.link}>Hotel Map</Text>
            </Text>
          </View>
        </View>
        <View style={styles.mapContainer}>
          <Text style={styles.mapLink}>Hotel Map</Text>
        </View>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16
  },
  eventContainer: {
    marginBottom: 16
  },
  subHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  eventBox: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    padding: 8,
    borderRadius: 8
  },
  item: {
    fontSize: 16,
    marginLeft: 16
  },
  link: {
    color: "blue",
    textDecorationLine: "underline"
  },
  mapContainer: {
    alignItems: "center",
    marginTop: 16
  },
  mapLink: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline"
  }
});
export default MeetingsList;