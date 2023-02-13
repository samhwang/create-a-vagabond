/**
 * @generated SignedSource<<b4debed5f75b811d3cc8816f3a5f365c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type VagabondList_query$data = {
  readonly me: {
    readonly id: string;
  };
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
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f4b82e166a9f3c218ca5cfb5fdb3668d";

export default node;
