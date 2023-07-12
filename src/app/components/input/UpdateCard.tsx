import { FC, useState } from "react";
import { Card, Grid, Input } from "@nextui-org/react";

export interface UpdateCardProps {
  text: string;
  update?: (text: string) => void;
  label?: string;
}

export const UpdateCard: FC<UpdateCardProps> = (props) => {
  const [state, updateState] = useState(props.text);
  const [editMode, updateEditMode] = useState(false);

  const onPress = () => {
    if (editMode && props.update) {
      props.update(state);
    }

    updateEditMode(!editMode);
  };
  return (
    <Grid>
      <Card isPressable={!!props.update && !editMode} onPress={onPress}>
        {!!props.label ? (
          <>
            <Card.Header css={{ fontSize: "$xs", opacity: 0.5 }}>
              {props.label}
            </Card.Header>
            <Card.Divider />
          </>
        ) : (
          <></>
        )}
        <Card.Body>
          {editMode ? (
            <Input
              autoFocus
              initialValue={state}
              onChange={(e) => updateState(e.target.value)}
              onBlur={onPress}
            ></Input>
          ) : (
            props.text
          )}
        </Card.Body>
      </Card>
    </Grid>
  );
};
