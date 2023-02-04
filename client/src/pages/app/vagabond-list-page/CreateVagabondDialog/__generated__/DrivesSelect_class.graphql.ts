/**
 * @generated SignedSource<<1e1a807802a28d7c6289f9bbd7036914>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DrivesSelect_class$data = {
  readonly drives: ReadonlyArray<string>;
  readonly " $fragmentType": "DrivesSelect_class";
};
export type DrivesSelect_class$key = {
  readonly " $data"?: DrivesSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"DrivesSelect_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DrivesSelect_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "drives",
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "9aae1d2693c87917a3de7b5cee555d4f";

export default node;
