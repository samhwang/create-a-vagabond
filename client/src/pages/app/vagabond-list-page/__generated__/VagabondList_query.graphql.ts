/**
 * @generated SignedSource<<523fd31100d5ef4bea1f8056fb1e9a49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondList_query$data = {
  readonly " $fragmentSpreads": FragmentRefs<"CreateVagabondDialog_query">;
  readonly " $fragmentType": "VagabondList_query";
};
export type VagabondList_query$key = {
  readonly " $data"?: VagabondList_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"VagabondList_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "VagabondList_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CreateVagabondDialog_query"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "fa3989c5c91dfe7d5b8d8153b293c949";

export default node;
