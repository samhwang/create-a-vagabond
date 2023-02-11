/**
 * @generated SignedSource<<ef10ec17fbad820e0d5914066c6ecbda>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatsField_useSyncFeats_class$data = {
  readonly roguishFeatConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "RoguishFeatsField_useSyncFeats_class";
};
export type RoguishFeatsField_useSyncFeats_class$key = {
  readonly " $data"?: RoguishFeatsField_useSyncFeats_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatsField_useSyncFeats_class">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoguishFeatsField_useSyncFeats_class",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
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
      "storageKey": "roguishFeatConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "af0fda0d90c57b3264b0e41536e39db1";

export default node;
