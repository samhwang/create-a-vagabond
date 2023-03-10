/**
 * @generated SignedSource<<07c4b2c25addd658a3e026946206e59f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NatureSelect_class$data = {
  readonly natureConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly description: string;
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
      "concreteType": "VagabondClassNatureConnection",
      "kind": "LinkedField",
      "name": "natureConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassNatureConnectionEdge",
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "description",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "natureConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};

(node as any).hash = "0118ddc1d2d67efcf12aea5500179b49";

export default node;
