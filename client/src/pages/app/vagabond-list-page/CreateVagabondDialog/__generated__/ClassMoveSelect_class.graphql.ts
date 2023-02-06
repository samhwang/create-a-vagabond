/**
 * @generated SignedSource<<cdfec69e8c41a4d307eea2581c0bb21e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassMoveSelect_class$data = {
  readonly classMoveConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
  readonly name: string;
  readonly " $fragmentType": "ClassMoveSelect_class";
};
export type ClassMoveSelect_class$key = {
  readonly " $data"?: ClassMoveSelect_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassMoveSelect_class">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClassMoveSelect_class",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 50
        }
      ],
      "concreteType": "VagabondClassClassMoveConnection",
      "kind": "LinkedField",
      "name": "classMoveConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "VagabondClassClassMoveConnectionEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "ClassMove",
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
                (v0/*: any*/)
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "classMoveConnection(first:50)"
    }
  ],
  "type": "VagabondClass",
  "abstractKey": null
};
})();

(node as any).hash = "c4d19c0e29baced12246108318ae32b9";

export default node;
