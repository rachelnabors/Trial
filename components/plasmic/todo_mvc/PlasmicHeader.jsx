// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oazA1YFPiZCNccrS5tDgY4
// Component: aFWX1tNWFIs
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useTheme } from "./PlasmicGlobalVariant__Theme"; // plasmic-import: x3o5Jg0GQTk/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: oazA1YFPiZCNccrS5tDgY4/projectcss
import * as sty from "./PlasmicHeader.module.css"; // plasmic-import: aFWX1tNWFIs/css

export const PlasmicHeader__VariantProps = new Array("state");

export const PlasmicHeader__ArgProps = new Array();

function PlasmicHeader__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    theme: useTheme()
  });

  return (
    <div
      data-plasmic-name={"headerContainer"}
      data-plasmic-override={overrides.headerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.headerContainer,
        {
          [sty.headerContainer__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.headerContainer__state_allChecked]: hasVariant(
            variants,
            "state",
            "allChecked"
          ),

          [sty.headerContainer__state_empty]: hasVariant(
            variants,
            "state",
            "empty"
          )
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBox__state_empty]: hasVariant(variants, "state", "empty")
        })}
      >
        {(hasVariant(variants, "state", "empty") ? false : true) ? (
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img, {
              [sty.img__global_theme_dark]: hasVariant(
                globalVariants,
                "theme",
                "dark"
              ),

              [sty.img__state_allChecked]: hasVariant(
                variants,
                "state",
                "allChecked"
              ),

              [sty.img__state_empty]: hasVariant(variants, "state", "empty")
            })}
            displayHeight={"30px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"30px"}
            src={
              hasVariant(globalVariants, "theme", "dark")
                ? "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiIgc3R5bGU9ImZpbGw6IHJnYigyMTMsIDIwNiwgMjA2KTsiPgo8cGF0aCBmaWxsPSJibGFjayIgZD0iTTAuNjEyIDAuMTEyTDUuODQ0IDMuMjJMMTEuMDc2IDAuMTEyVjIuNUw1Ljg0NCA1LjUyNEwwLjYxMiAyLjQ4OFYwLjExMloiLz4KPC9zdmc+"
                : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMiA2IiBoZWlnaHQ9IjYiIHdpZHRoPSIxMiI+CjxwYXRoIGZpbGw9ImJsYWNrIiBkPSJNMC42MTIgMC4xMTJMNS44NDQgMy4yMkwxMS4wNzYgMC4xMTJWMi41TDUuODQ0IDUuNTI0TDAuNjEyIDIuNDg4VjAuMTEyWiIvPgo8L3N2Zz4K"
            }
          />
        ) : null}
      </div>

      <input
        data-plasmic-name={"textInput"}
        data-plasmic-override={overrides.textInput ?? overrides.textbox}
        className={classNames(projectcss.input, sty.textInput, {
          [sty.textInput__global_theme_dark]: hasVariant(
            globalVariants,
            "theme",
            "dark"
          ),

          [sty.textInput__state_allChecked]: hasVariant(
            variants,
            "state",
            "allChecked"
          ),

          [sty.textInput__state_empty]: hasVariant(variants, "state", "empty")
        })}
        placeholder={"What needs to be done?"}
        type={"text"}
        value={
          hasVariant(globalVariants, "theme", "dark") ? "My Task" : undefined
        }
      />
    </div>
  );
}

const PlasmicDescendants = {
  headerContainer: [
    "headerContainer",
    "freeBox",
    "img",
    "textInput",
    "textbox"
  ],

  freeBox: ["freeBox", "img"],
  img: ["img"],
  textInput: ["textInput", "textbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeader__ArgProps,
      internalVariantPropNames: PlasmicHeader__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeader__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "headerContainer") {
    func.displayName = "PlasmicHeader";
  } else {
    func.displayName = `PlasmicHeader.${nodeName}`;
  }
  return func;
}

export const PlasmicHeader = Object.assign(
  // Top-level PlasmicHeader renders the root element
  makeNodeComponent("headerContainer"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),
    // Metadata about props expected for PlasmicHeader
    internalVariantProps: PlasmicHeader__VariantProps,
    internalArgProps: PlasmicHeader__ArgProps
  }
);

export default PlasmicHeader;
/* prettier-ignore-end */