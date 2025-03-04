import {
  zip,
  partition,
  dropFirst,
  dropLast,
  dropWhile,
  takeFirst,
  takeLast,
  takeWhile,
  removeAt,
  shuffle,
} from "native-arr-kit";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  const toString = (str: unknown) => JSON.stringify(str);

  // Modify the arrays below to test the functions
  const zipArr1 = ["zero", "one", "two"];
  const zipArr2 = [0, 1, 2];

  const partitionArr = [1, 2, 3, 4];
  const partitionNumber = 3

  const dropArrays = [1, 2, 3, 4, 5];
  const dropNumber = 3;

  const takeArrays = [1, 2, 3, 4, 5];
  const takeNumber = 3;

  const removeArr = [1, 2, 3, 4, 5];
  const removeIndex = 2;

  const shuffleArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Do not modify the code below
  const zipInput = `zip(${toString(zipArr1)}, ${toString(zipArr2)})`;
  const zipOutput = `// ${JSON.stringify(zip(zipArr1, zipArr2))}`;

  const partitionInput = `partition(${toString(partitionArr)}, (val) => val < ${partitionNumber})`;
  const partitionOutput = `// ${toString(
    partition(partitionArr, (value) => value < partitionNumber),
  )}`;

  const dropFirstInput = `dropFirst(${toString(dropArrays)}, ${dropNumber})`;
  const dropFirstOutput = `// ${toString(dropFirst(dropArrays, dropNumber))}`;

  const dropLastInput = `dropLast(${toString(dropArrays)}, ${dropNumber})`;
  const dropLastOutput = `// ${toString(dropLast(dropArrays, dropNumber))}`;

  const dropWhileInput = `dropWhile(${toString(dropArrays)}, (val) => val < ${dropNumber})`;
  const dropWhileOutput = `// ${toString(
    dropWhile(dropArrays, (val) => val < dropNumber),
  )}`;

  const takeFirstInput = `takeFirst(${toString(takeArrays)}, ${takeNumber})`;
  const takeFirstOutput = `// ${toString(takeFirst(takeArrays, takeNumber))}`;

  const takeLastInput = `takeLast(${toString(takeArrays)}, ${takeNumber})`;
  const takeLastOutput = `// ${toString(takeLast(takeArrays, takeNumber))}`;

  const takeWhileInput = `takeWhile(${toString(takeArrays)}, (val) => val < ${takeNumber})`;
  const takeWhileOutput = `// ${toString(
    takeWhile(takeArrays, (val) => val < takeNumber),
  )}`;

  const removeAtInput = `removeAt(${toString(removeArr)}, ${removeIndex})`;
  const removeAtOutput = `// ${toString(removeAt(removeArr, removeIndex))}`;

  const shuffleInput = `shuffle(${toString(shuffleArr)})`;
  const shuffleOutput = `// ${toString(shuffle(shuffleArr))}`;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#161617" />
      <Text style={[styles.header]}>Examples:</Text>
      <ScrollView style={styles.container}>
        <Group name="Zip" in={zipInput} out={zipOutput} />
        <Group name="Partition" in={partitionInput} out={partitionOutput} />
        <Group name="DropFirst" in={dropFirstInput} out={dropFirstOutput} />
        <Group name="DropLast" in={dropLastInput} out={dropLastOutput} />
        <Group name="DropWhile" in={dropWhileInput} out={dropWhileOutput} />
        <Group name="TakeFirst" in={takeFirstInput} out={takeFirstOutput} />
        <Group name="TakeLast" in={takeLastInput} out={takeLastOutput} />
        <Group name="TakeWhile" in={takeWhileInput} out={takeWhileOutput} />
        <Group name="RemoveAt" in={removeAtInput} out={removeAtOutput} />
        <Group name="Shuffle" in={shuffleInput} out={shuffleOutput} />
      </ScrollView>
    </SafeAreaView>
  );
}

function Group(props: { name: string; in: string; out: string }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      <Text style={styles.input}>{props.in}</Text>
      <Text style={styles.output}>{props.out}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    margin: 20,
    color: "#c8c8cc",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  input: {
    fontSize: 16,
    marginBottom: 10,
    letterSpacing: 1,
    color: "#e8e8ed",
  },
  output: {
    fontSize: 16,
    color: "#7F8C98",
    letterSpacing: 1,
  },
  groupHeader: {
    color: "#cc9768",
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: "#333336",
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#161617",
  },
});
