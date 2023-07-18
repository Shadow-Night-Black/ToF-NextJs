"use client"

import { FC, useState } from "react";
import { Card, Grid, Input, useInput } from "@nextui-org/react";

export interface UpdateCardProps {
  text: string;
  update?: (text: string) => void;
  label?: string;
}

export const UpdateCard: FC<UpdateCardProps> = (props) => {
  const [editMode, updateEditMode] = useState(false);
  const {value:state, bindings} = useInput(props.text)

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
            aria-label={props.label}
            {...bindings}
              autoFocus
              initialValue={state}
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
