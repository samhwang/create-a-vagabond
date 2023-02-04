/**
 * @generated SignedSource<<88a3edf5f04643c7e00b950ae79f1008>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateVagabondDialog_query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"ClassSpecificFields_query" | "VagabondClassSelect_query">;
  readonly " $fragmentType": "CreateVagabondDialog_query";
};
export type CreateVagabondDialog_query$key = {
  readonly " $data"?: CreateVagabondDialog_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateVagabondDialog_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateVagabondDialog_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "VagabondClassSelect_query"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ClassSpecificFields_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "95bf513913332155919606f5a323be92";

export default node;
