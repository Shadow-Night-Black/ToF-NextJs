"use client";

import { Navbar } from "@nextui-org/react";
import Link from "next/link";
import { FC } from "react";

export const Navigation: FC<{}> = ({}) => (
  <Navbar>
    <Navbar.Content>
        <Link href="/">Sumary</Link>
        <Link href="/blessings">Blessings</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/items">Items</Link>
    </Navbar.Content>
  </Navbar>
);
