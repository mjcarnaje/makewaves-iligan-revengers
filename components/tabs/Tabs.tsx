import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Tab from "./Tab";

interface Props {
  data: number[];
}

const Tabs: React.FC<Props> = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState(data[1]);

  return (
    <>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <Tab
            onPress={() => setSelectedTab(item)}
            isSelected={selectedTab === item}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ marginHorizontal: 6 }} />}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
};

export default Tabs;
