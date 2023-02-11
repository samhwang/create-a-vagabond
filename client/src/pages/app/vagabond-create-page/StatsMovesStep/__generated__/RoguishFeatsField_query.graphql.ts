/**
 * @generated SignedSource<<68b8ddb5ac16fef7c21d3ed6e15f2527>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RoguishFeatsField_query$data = {
  readonly roguishFeatConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
  readonly " $fragmentType": "RoguishFeatsField_query";
};
export type RoguishFeatsField_query$key = {
  readonly " $data"?: RoguishFeatsField_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"RoguishFeatsField_query">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoguishFeatsField_query",
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
      "concreteType": "QueryRoguishFeatConnection",
      "kind": "LinkedField",
      "name": "roguishFeatConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "QueryRoguishFeatConnectionEdge",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "bf070b01ef2f8c5b950b86bb3f85ecda";

export default node;
