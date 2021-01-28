import { ListItem } from "ezwn-ux-native/list/ListItem-cmp";
import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput as ReactNativeTextInput, TouchableHighlight, View } from "react-native";

const invariantStyleSheet = StyleSheet.create({
  field: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4
  }
});

export const PickerInput = ({
  onChange,
  value: initialValue,
  autoFocus,
  multiline,
  height,
  secureTextEntry,
  client,
  onValidityChange
}) => {
  if (!onChange)
    throw new Error()

  const [id, setId] = React.useState(initialValue);
  const [label, setLabel] = React.useState("");
  const [choiceListOpen, setChoiceListOpen] = React.useState(false);
  const [choiceList, setChoiceList] = React.useState([]);

  const { resolveLabel, byWordSearch } = client;

  useEffect(() => {
    onValidityChange(true);
  }, []);

  useEffect(() => {
    if (resolveLabel && id) {
      resolveLabel(id).then((label) => {
        setLabel(label);
        setChoiceListOpen(false);
      });
    }
  }, [resolveLabel, id]);

  useEffect(() => {
    if (initialValue !== id) {
      setId(initialValue);
    }
  }, [initialValue])

  useEffect(() => {
    const search = async (label) => {
      const values = await byWordSearch(label);
      setChoiceList(values);
    }

    if (byWordSearch) {
      search(label)
    }
  }, [label, byWordSearch]);

  const style = invariantStyleSheet.field;

  const onFocus = () => {
    setChoiceListOpen(true)
  }

  const onBlur = () => {
    setTimeout(
      () => setChoiceListOpen(false),
      200
    );
  }

  const updateId = id => {
    setId(id);
    onChange(id);
  }

  return <>
    <ReactNativeTextInput
      style={style}
      autoFocus={!!autoFocus}
      value={label}
      onChangeText={setLabel}
      onFocus={onFocus}
      onBlur={onBlur}
      multiline={multiline}
      secureTextEntry={secureTextEntry}
      editable={!!byWordSearch}
    />
    { choiceListOpen &&
      <View>
        {choiceList.map(choice => <Choice key={choice.value} {...choice} onSelect={updateId} />)}
      </View>
    }
  </>
};

const Choice = ({ label, value, onSelect }) => {
  return <ListItem onPress={() => onSelect(value)}>
    <Text>{label}</Text>
  </ListItem>
}
