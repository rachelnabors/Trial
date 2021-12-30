// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: oazA1YFPiZCNccrS5tDgY4
// Component: sXlYIJb-6PO
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ToggleButton from "../../ToggleButton"; // plasmic-import: 5DyYDSyskKh/component
import "@plasmicapp/react-web/lib/plasmic.css";
import * as projectcss from "./plasmic_todo_mvc.module.css"; // plasmic-import: oazA1YFPiZCNccrS5tDgY4/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: sXlYIJb-6PO/css

export const PlasmicFooter__VariantProps = new Array("state");

export const PlasmicFooter__ArgProps = new Array("count");

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"footerContainer"}
      data-plasmic-override={overrides.footerContainer}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        sty.footerContainer
      )}
    >
      {(
        hasVariant(variants, "state", "empty")
          ? false
          : hasVariant(variants, "state", "singularLeft")
          ? true
          : hasVariant(variants, "state", "hasCompleted")
          ? true
          : true
      ) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__xGl8Y, {
            [sty.freeBox__state_empty__xGl8YiQpcO]: hasVariant(
              variants,
              "state",
              "empty"
            ),

            [sty.freeBox__state_hasCompleted__xGl8YVe2It]: hasVariant(
              variants,
              "state",
              "hasCompleted"
            ),

            [sty.freeBox__state_singularLeft__xGl8YWxnl3]: hasVariant(
              variants,
              "state",
              "singularLeft"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: "2",
            value: args.count,
            className: classNames(sty.slotTargetCount, {
              [sty.slotTargetCount__state_hasCompleted]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              ),

              [sty.slotTargetCount__state_singularLeft]: hasVariant(
                variants,
                "state",
                "singularLeft"
              )
            })
          })}

          {(hasVariant(variants, "state", "singularLeft") ? true : true) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b0Gx,
                {
                  [sty.text__state_empty__b0GxiQpcO]: hasVariant(
                    variants,
                    "state",
                    "empty"
                  ),

                  [sty.text__state_hasCompleted__b0GxVe2It]: hasVariant(
                    variants,
                    "state",
                    "hasCompleted"
                  ),

                  [sty.text__state_singularLeft__b0GxWxnl3]: hasVariant(
                    variants,
                    "state",
                    "singularLeft"
                  )
                }
              )}
            >
              {hasVariant(variants, "state", "singularLeft")
                ? " item left"
                : " items left"}
            </div>
          ) : null}
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__sQVzB)}
      >
        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton__oCgt2)}
          state={"selected"}
        >
          {"All"}
        </ToggleButton>

        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton___1Jch)}
        >
          {"Completed"}
        </ToggleButton>

        <ToggleButton
          className={classNames("__wab_instance", sty.toggleButton___1SnTy)}
        >
          {"Active"}
        </ToggleButton>
      </p.Stack>

      {(hasVariant(variants, "state", "hasCompleted") ? true : false) ? (
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__f8HvD,
            {
              [sty.text__state_hasCompleted__f8HvDVe2It]: hasVariant(
                variants,
                "state",
                "hasCompleted"
              )
            }
          )}
        >
          {"Clear completed"}
        </div>
      ) : null}
    </div>
  );
}

const PlasmicDescendants = {
  footerContainer: ["footerContainer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "footerContainer") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("footerContainer"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
