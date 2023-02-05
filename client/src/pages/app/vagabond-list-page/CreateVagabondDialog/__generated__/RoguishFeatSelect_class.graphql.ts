/**
 * @generated SignedSource<<adce624ad574951e44b30e8e14dd77a6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatSelect_class$data = {
  readonly roguishFeatConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "RoguishFeatSelect_class";
};
export type RoguishFeatSelect_class$key = {
  readonly " $data"?: RoguishFeatSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatSelect_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoguishFeatSelect_class",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "VagabondClassRoguishFeatConnection",
      "kind": "LinkedField",
      "name": "roguishFeatConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassRoguishFeatConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "RoguishFeat",
              "kind": "LinkedField",
              "name": "node",
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
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "3ed7ea961074b3dadee9704bc5d95cbb";

export default node;
