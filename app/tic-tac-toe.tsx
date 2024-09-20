import Button from "@/components/Button";
import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";

type Item = {
  key: number;
  val: "" | "X" | "O";
};

function TicTacToe() {
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [data, setData] = useState<Item[]>(
    Array.from({ length: 9 }).map((_, i) => ({ key: i, val: "" }))
  );
  const [result, setResult] = useState("");

  const isLastMove = (): boolean => {
    const filled = data.reduce(
      (accumulator, currentItem) =>
        accumulator + Number(currentItem.val !== ""),
      0
    );
    if (filled < 5) {
      // there must be at least five filled cells to win
      return false;
    }

    // look for "turn" having three in a row
    const matrix: boolean[][] = [[false, false, false], [false, false, false], [false, false, false]];
    const matrix2: boolean[][] = [[false, false, false], [false, false, false], [false, false, false]];
    data.forEach((item) => {
      const taken = item.val === turn;
      switch (item.key) {
        case 0:
          matrix[0][0] = matrix2[0][0] = taken;
          break;
        case 1:
          matrix[1][0] = matrix2[0][1] = taken;
          break;
        case 2:
          matrix[2][0] = matrix2[0][2] = taken;
          break;
        case 3:
          matrix[0][1] = matrix2[1][0] = taken;
          break;
        case 4:
          matrix[1][1] = matrix2[1][1] = taken;
          break;
        case 5:
          matrix[2][1] = matrix2[1][2] = taken;
          break;
        case 6:
          matrix[0][2] = matrix2[2][0] = taken;
          break;
        case 7:
          matrix[1][2] = matrix2[2][1] = taken;
          break;
        case 8:
          matrix[2][2] = matrix2[2][2] = taken;
          break;
      }
    });

    if (
      matrix[0].every((x) => x) ||
      matrix[1].every((x) => x) ||
      matrix[2].every((x) => x) ||
      matrix2[0].every((x) => x) ||
      matrix2[1].every((x) => x) ||
      matrix2[2].every((x) => x) ||
      (matrix[0][0] && matrix[1][1] && matrix[2][2]) ||
      (matrix[2][0] && matrix[1][1] && matrix[0][2])
    ) {
      setResult(`${turn} wins!`);
      return true;
    } else if (filled === 9) {
      setResult('No winner.');
      return true;
    }
    return false;
  };

  const pressSquare = (item: Item) => {
    if (result === "") {
      const idx = data.findIndex((value) => {
        return value.key === item.key && value.val === "";
      });
      if (idx !== -1) {
        const newData = [...data];
        newData[idx].val = turn;
        setData(newData);
        if (!isLastMove()) {
          setTurn(turn === "X" ? "O" : "X");
        }
      }
    }
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({ item }) => (
          <Pressable style={styles.item} onPress={() => pressSquare(item)}>
            <Text style={styles.itemText}>{item.val}</Text>
          </Pressable>
        )}
      />
      {result.length ? (
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text style={styles.status}>{result}</Text>
          <Button
            onPress={() => {
              setData(
                Array.from({ length: 9 }).map((_, i) => ({ key: i, val: "" }))
              );
              setResult("");
            }}
            label="Restart"
          />
        </View>
      ) : (
        <Text style={styles.status}>Turn: {turn}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  itemText: {
    fontSize: 48,
  },
  status: {
    paddingTop: 48,
    fontSize: 48,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default TicTacToe;
