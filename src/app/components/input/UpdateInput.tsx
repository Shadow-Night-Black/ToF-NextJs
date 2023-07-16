import { FC, useState } from "react";
import { Input, useInput } from "@nextui-org/react";
import { usePress } from "react-aria";

export interface UpdateCardProps {
  text: string;
  update?: (text: string) => void;
  label?: string;
}

export const UpdateInput: FC<UpdateCardProps> = (props) => {
  const [editMode, updateEditMode] = useState(false);
  const { value: state, bindings } = useInput(props.text);


  const onPress = () => {
    if (editMode && props.update) {
      props.update(state);
    }

    updateEditMode(!editMode);
  };

  const {pressProps} = usePress({onPress});
  return (
    <>
      {editMode ? (
        <Input
          {...bindings}
          autoFocus
          initialValue={state}
          onBlur={onPress}
        ></Input>
      ) : (
        <label {...pressProps}>{props.text}</label>
      )}
    </>
  );
};
