"use client";
import { useRouter, useSearchParams } from "next/navigation";
import PopupTemplate from "./popupTemplate";
import { ReactNode } from "react";
import PopupButton from "./popupButton";

type Props = {
  type?: string;
  title: string;
  children?: ReactNode;
  close?: boolean;
  param?: string;
  buttons?: ReactNode;
  primaryColor?: string;
  secondaryColor?: string;
};

export default function DefaultPopup({ close = true, ...props }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isActive = !props.param || Boolean(searchParams.get(props.param));
  const closePopup = () => {
    router.back();
  };
  const buttons = props.buttons ? (
    props.buttons
  ) : (
    <PopupButton
      className="bg-green-300 hover:bg-green-400"
      onClick={closePopup}
    >
      Ok
    </PopupButton>
  );

  return (
    <>
      {isActive && (
        <PopupTemplate
          title={props.type}
          close={close}
          primaryColor={props.primaryColor}
          secondaryColor={props.secondaryColor}
        >
          <div className="h-full w-full flex items-center justify-center">
            <div className="flex flex-col items-center h-10/12 w-10/12 p-10 gap-14">
              <h4
                className="!text-8xl text-center"
                style={{
                  textShadow: `3px 3px 0 white`,
                }}
              >
                {props.title}
              </h4>
              {props.children}
              <div className="flex gap-10">{buttons}</div>
            </div>
          </div>
        </PopupTemplate>
      )}
    </>
  );
}
