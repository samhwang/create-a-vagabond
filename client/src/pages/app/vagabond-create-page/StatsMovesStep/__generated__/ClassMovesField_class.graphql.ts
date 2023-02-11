/**
 * @generated SignedSource<<8398ad772c4d711195c92ebfa55f5709>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClassMovesField_class$data = {
  readonly classMoveConnection: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    } | null>;
  };
  readonly name: string;
  readonly " $fragmentType": "ClassMovesField_class";
};
export type ClassMovesField_class$key = {
  readonly " $data"?: ClassMovesField_class$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClassMovesField_class">;
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
  "name": "ClassMovesField_class",
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

(node as any).hash = "a829c59772f96b65a8cb8e8f48cd0d82";

export default node;
