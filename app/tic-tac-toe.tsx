import Button from '@/components/Button';
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Pressable } from 'react-native';

function TicTacToe() {
  const [turn, setTurn] = useState('X');
  const [data, setData] = useState(Array.from({ length: 9 }).map((_, i) => ({ key: i, val: '' })));
  const [complete, setComplete] = useState(false);

  const isWinningMove = (): boolean => {
    // determine if there is a winner by improving the response below
    return data.every((value) => {
      return value.val !== '';
    })
  };

  const pressSquare = (item: {key: number, val: ''|'X'|'O'}) => {
    if (complete === false) {
      const idx = data.findIndex((value) => {
        return value.key === item.key && value.val === '';
      })
      if (idx !== -1) {
        const newData = [...data];
        newData[idx].val = turn;
        setData(newData);
        if (isWinningMove()) {
          setComplete(true);
        } else {
          setTurn(turn === 'X' ? 'O' : 'X');
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
          <Pressable
            style={styles.item}
            onPress={() => pressSquare(item)}
          >
            <Text style={styles.itemText}>{item.val}</Text>
          </Pressable>
        )}
      />
      {
        complete
        ?
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={styles.status}
          >Complete</Text>
          <Button onPress={() => {
            setData(Array.from({ length: 9 }).map((_, i) => ({ key: i, val: '' })));
            setComplete(false);
          }} label='Restart' />
        </View>
        :
        <Text
          style={styles.status}
        >Turn: {turn}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  itemText: {
    fontSize: 48,
  },
  status: {
    paddingTop: 48,
    fontSize: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
});

export default TicTacToe;
