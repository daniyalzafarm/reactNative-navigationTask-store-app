import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen from "./app/components/Screen";
import AppButton from "./app/components/AppButton";
import ListItemSeparator from "./app/components/ListItemSeparator";
import ListItem from "./app/components/ListItem";

const products = [
  {
    id: 1,
    title: "Shirt",
    description: "Price : $50",
    image: require("./assets/daniyal.jpg"),
  },
  {
    id: 2,
    title: "Jacket",
    description: "Price : $80",
    image: require("./assets/daniyal.jpg"),
  },
];

const ManageProducts = () => (
  <Screen>
    <FlatList
      data={products}
      keyExtractor={(products) => products.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => console.log("Message Selected")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  </Screen>
);
const employes = [
  {
    id: 1,
    title: "Abdullah",
    description: "Designation : Supervisor",
    image: require("./assets/daniyal.jpg"),
  },
  {
    id: 2,
    title: "Zain",
    description: "Price : Salesman",
    image: require("./assets/daniyal.jpg"),
  },
];

const ManageEmployes = () => (
  <Screen>
    <FlatList
      data={employes}
      keyExtractor={(employes) => employes.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => console.log("Message Selected")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  </Screen>
);
const orders = [
  {
    id: 1,
    title: "Customer : Abdullah",
    description: "Amount : $400",
    image: require("./assets/daniyal.jpg"),
  },
  {
    id: 2,
    title: "Customer : Zain",
    description: "Amaount : $450",
    image: require("./assets/daniyal.jpg"),
  },
];

const ManageOrders = () => (
  <Screen>
    <FlatList
      data={orders}
      keyExtractor={(orders) => orders.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          image={item.image}
          title={item.title}
          subTitle={item.description}
          onPress={() => console.log("Message Selected")}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  </Screen>
);

const mainScreen = ({ navigation }) => (
  <Screen>
    <View style={styles.maincontainer}>
      <Text style={styles.heading}>Welcome to Ecommerce Store !</Text>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <AppButton
          title="Manage Products"
          onPress={() => navigation.navigate("ManageProducts")}
        />

        <AppButton
          title="Manage Employes"
          onPress={() => navigation.navigate("ManageEmployes")}
        />

        <AppButton
          title="Manage Orders"
          onPress={() => navigation.navigate("ManageOrders")}
        />
      </View>
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  box: {
    width: 120,
    height: 120,
    fontSize: 20,
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: "dodgerblue",
    margin: 20,
  },
});

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName="mainScreen"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="mainScreen"
      component={mainScreen}
      options={{
        headerTitle: "E-commerce Store",
      }}
    />
    <Stack.Screen
      name="ManageProducts"
      component={ManageProducts}
      options={{
        headerTitle: "All Products",
      }}
    />
    <Stack.Screen
      name="ManageEmployes"
      component={ManageEmployes}
      options={{
        headerTitle: "All Employees",
      }}
    />
    <Stack.Screen
      name="ManageOrders"
      component={ManageOrders}
      options={{
        headerTitle: "All Orders",
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
