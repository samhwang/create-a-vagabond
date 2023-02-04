/**
 * @generated SignedSource<<63c40d1aa32f0a73e1cdd13a5ae703fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NatureSelect_class$data = {
  readonly natures: ReadonlyArray<string>;
  readonly " $fragmentType": "NatureSelect_class";
};
export type NatureSelect_class$key = {
  readonly " $data"?: NatureSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"NatureSelect_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NatureSelect_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "natures",
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "43f3c58e8ac3ef9fcbd09595ef78f7c0";

export default node;
