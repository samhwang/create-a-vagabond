/**
 * @generated SignedSource<<ffcd7b65eed67992b400e8287edff242>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NatureSelect_class$data = {
  readonly classNatureConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
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
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
      "concreteType": "VagabondClassClassNatureConnection",
      "kind": "LinkedField",
      "name": "classNatureConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassClassNatureConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Nature",
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
      "storageKey": "classNatureConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "14b36a38b89f789c66b1fafb56807cf5";

export default node;
