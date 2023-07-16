import { FC, useRef, useState } from "react";
import { Input, useInput } from "@nextui-org/react";
import { usePress } from "react-aria";
import { prop } from "monocle-ts/lib/Traversal";

export interface UpdateCardProps {
  text: string;
  update?: (text: string) => void;
  label?: string;
}

export const UpdateInput: FC<UpdateCardProps> = (props) => {
  const [editMode, updateEditMode] = useState(false);
  const { value, bindings } = useInput(props.text);
  const labelRef = useRef<HTMLLabelElement>(null);

  const { pressProps } = usePress({
    ref: labelRef,
    onPress: () => updateEditMode(true),
    isDisabled: editMode,
  });

  return (
    <>
      {editMode ? (
        <Input
          aria-label="Skill Name"
          {...bindings}
          autoFocus
          onBlur={() => {
            props.update?.(value);
            updateEditMode(false);
          }}
        ></Input>
      ) : (
        <label {...pressProps} ref={labelRef}>
          {props.text}
        </label>
      )}
    </>
  );
};
